/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { withTranslation } = require("@onruntime/next-usetranslation");

const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

module.exports = withTranslation(config);
