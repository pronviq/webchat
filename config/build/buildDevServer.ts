import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";
import path from "path";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const port = options.port;

  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      logging: "none",
      overlay: false,
      
    },
    watchFiles: [path.resolve(options.path.src, "..", ".env")],
    
  };
}
