import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import webpack from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import path from "path";
// import Dotenv from "dotenv-webpack"

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: options.path.html }),
    new DotenvWebpackPlugin({
      path: path.resolve(options.path.src, "..", ".env"),
      safe: true,
    }),
    
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
        chunkFilename: "[contenthash].css",
      })
    );
  }

  if (options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins.filter(Boolean);
}
