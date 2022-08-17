/* eslint-disable @typescript-eslint/no-var-requires */
import { useRouter } from "next/router";
import withTranslation from "./hoc/withTranslation";
import path from "path";

const useTranslation = (namespace = "common", keySplit = true) => {
  const router = useRouter();
  const { locale, locales } = router;

  path;
  namespace;
  keySplit;
  locales;

  // check if project has /src/locales our /src folder
  const localePathWithoutSrc = path.join(
    process.cwd(),
    "locales",
    locale || "en",
    `${namespace}.json`
  );
  const localePathWithSrc = path.join(
    process.cwd(),
    "src",
    "locales",
    locale || "en",
    `${namespace}.json`
  );

  const translationsWithoutSrc = require(localePathWithoutSrc);
  const translationsWithSrc = require(localePathWithSrc);

  const translations = translationsWithSrc || translationsWithoutSrc;

  console.log("translations", translations);

  // require the translation file in {project_directory}/src/locales/{locale}/{namespace}.json

  console.log(locale);

  return { locale };
};

export { withTranslation };
export default useTranslation;
