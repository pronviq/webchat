import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildOptions } from "./config/build/types/types";
import path from "path";

interface IEnv {
  mode?: BuildMode;
  port?: number;
}

export default (env: IEnv) => {
  const options: BuildOptions = {
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    path: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
    },
    analyzer: false,
  };

  const config: webpack.Configuration = buildWebpack(options);
  return config;
};
