import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  return {
    mode: options.mode,
    entry: options.path.entry,
    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),
    output: {
      filename: "[contenthash].js",
      path: options.path.output,
      clean: true,
    },

    devtool: isDev && "source-map",
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
