import { NextConfig } from "next";
import { NextJsWebpackConfig } from "next/dist/server/config-shared";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";

const useTranslation = (
  namespace = "common",
  keySplit = true
  ) => {
  const router = useRouter();
  const { locale, locales } = router;

  fs;
  path;
  namespace;
  keySplit;
  locales;

  // check if project has /src/locale our /src folder
  // const localePathWithoutSrc = path.join(process.cwd(), "locale");
  // const localePathWithSrc = path.join(process.cwd(), "src", "locale");
  // if (!fs.existsSync(localePathWithoutSrc) || !fs.existsSync(localePathWithSrc)) {
  //   return console.error("You need to create a locale folder in your project root or src folder");
  // }

  // const localePath = fs.existsSync(localePathWithoutSrc) ? localePathWithoutSrc : localePathWithSrc;

  // require the translation file in {project_directory}/src/locales/{locale}/{namespace}.json
  console.log(locale);

  return { locale };
};

export const withTranslation = (config: NextConfig): NextConfig => {
  const webpack: NextJsWebpackConfig = (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false
    }

    return config;
  };

  return {
    ...config,
    webpack,
  }
}

export default useTranslation;