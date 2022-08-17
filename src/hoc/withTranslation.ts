import { NextConfig } from "next";
import { NextJsWebpackConfig } from "next/dist/server/config-shared";

const withTranslation = (config: NextConfig): NextConfig => {
  const webpack: NextJsWebpackConfig = (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  };

  return {
    ...config,
    webpack,
  };
};

export default withTranslation;
