const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const destDir = path.join(__dirname);
const srcDir = path.resolve(__dirname, "..", "src");

// Extract URLs from all source files
const urls = new Set();
const urlToFile = {};

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) scanDir(full);
    else if (/\.(ts|tsx|js|jsx|css)$/.test(entry.name)) {
      const content = fs.readFileSync(full, "utf8");
      const re = /https:\/\/res\.cloudinary\.com\/[^\s"',)\]}]+/g;
      let m;
      while ((m = re.exec(content))) {
        let url = m[0].replace(/[,;]+$/, "");
        urls.add(url);
        if (!urlToFile[url]) urlToFile[url] = [];
        urlToFile[url].push(path.relative(path.resolve(__dirname, ".."), full));
      }
    }
  }
}
scanDir(srcDir);

const uniqueUrls = [...urls].sort();
console.log(`Found ${uniqueUrls.length} unique Cloudinary URLs`);

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith("https") ? https.get : http.get;
    get(url, { timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
      file.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  let done = 0, failed = 0;
  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const ext = path.extname(url.split("?")[0]) || ".png";
    const filename = `image_${String(i + 1).padStart(2, "0")}${ext}`;
    const filepath = path.join(destDir, filename);
    process.stdout.write(`[${i + 1}/${uniqueUrls.length}] ${filename}... `);
    try {
      await download(url, filepath);
      const size = fs.statSync(filepath).size;
      console.log(`OK (${(size / 1024).toFixed(1)} KB)`);
      done++;
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      failed++;
    }
  }

  // Write URL map
  const map = {};
  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const ext = path.extname(url.split("?")[0]) || ".png";
    const filename = `image_${String(i + 1).padStart(2, "0")}${ext}`;
    map[filename] = { url, source: urlToFile[url] };
  }
  fs.writeFileSync(path.join(destDir, "url_map.json"), JSON.stringify(map, null, 2));
  console.log(`\nDone: ${done} downloaded, ${failed} failed, ${uniqueUrls.length} total`);
  console.log(`URL map saved to url_map.json`);
}

main();
