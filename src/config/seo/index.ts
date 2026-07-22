const images = ['https://legioncli.vercel.app/logo.png'];
const description =
  'Legion CLI is a powerful developer-first command-line tool designed to streamline your development workflow. Build faster, deploy smarter, and ship with confidence.';

const title = { default: 'Legion CLI', template: `%s | Legion CLI` };
const url = 'https://legioncli.vercel.app/';
const metadataBase = new URL(url);

export const metaDataObject = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};
