const images = [
  'https://legioncli.com/logo.png',
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1752326964/hacknitr/zblorl5fuiaulxica9cu.png',
];
const description =
  'Legion CLI is a powerful developer-first command-line tool designed to streamline your development workflow. Build faster, deploy smarter, and ship with confidence.';

const title = { default: 'Legion CLI', template: `%s | Legion CLI` };
const url = 'https://legioncli.com/';
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
