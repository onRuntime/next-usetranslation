/* eslint-disable @typescript-eslint/no-var-requires */
import { useRouter } from "next/router";

const useTranslation = (namespace = "common", keySplit = true) => {
  const router = useRouter();
  const { locale, locales } = router;
  let translation: any;

  if (!translation) {
    try {
      translation = require(`../../../../locales/${locale}/${namespace}.json`);
    } catch (error) {
      // An error occurred while loading the translation file without src
    }
  }

  if (!translation) {
    try {
      translation = require(`../../../../src/locales/${locale}/${namespace}.json`);
    } catch (error) {
      // An error occurred while loading the translation file with src
    }
  }

  // Try to get the fallback translation

  if (!translation) {
    try {
      translation = require(`../../../../locales/${
        locales && locales.length > 0 ? locales[0] : "en"
      }/${namespace}.json`);
    } catch (err) {
      // An error occurred while loading the fallback translation file without src
    }
  }

  if (!translation) {
    try {
      translation = require(`../../../../src/locales/${
        locales && locales.length > 0 ? locales[0] : "en"
      }/${namespace}.json`);
    } catch (err) {
      // An error occurred while loading the fallback translation file with src
    }
  }

  // If no translation was found, console an error

  if (!translation) {
    console.error(
      `An error occurred while loading the translation file for namespace ${namespace} and locale ${locale}`
    );
  }

  const translate = (key: string, variables: string[] = []) => {
    const keyList = keySplit ? key.split(".") : [key];
    let parent = translation;
    keyList.forEach((k) => (parent = parent[k] ?? key));

    /*
     * parent can countain %s1, %s2, ...
     * variables can contain "value1", "value2", ...
     * we replace the %s1, %s2, ... with the corresponding value
     */
    if (parent && variables.length > 0) {
      parent = parent.replace(
        /%s(\d+)/g,
        (_: any, index: any) => variables[parseInt(index) - 1] ?? undefined
      );
    }
    return parent || key;
  };

  return { t: translate, locale };
};

export default useTranslation;
