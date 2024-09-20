import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  };

  const imgLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[local]_[hash:base64:5]" : "[hash:base64:10]",
      },
      sourceMap: true,
    },
  };

  const stylLoader = {
    test: /\.styl$/,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      cssLoaderWithModules,
      "stylus-loader",
    ],
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      cssLoaderWithModules,
      "sass-loader",
    ],
    exclude: /node_modules/,
  };

  return [tsLoader, stylLoader, scssLoader, imgLoader, svgrLoader];
}
