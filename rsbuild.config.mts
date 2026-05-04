import type { RsbuildConfig, EnvironmentConfig } from "@rsbuild/core";
import { env } from "node:process";

export default {
  mode: env.NODE_ENV as any,
  environments: {
    editor: {
      source: { entry: { index: "./editor/main.ts" } },
      output: {
        distPath: "dist/",
      },
      tools: {
        rspack: {
          output: {
            filename: "./beepbox_editor.min.js",
          },
        },
      },
    },
  },
  source: {
    define: {
      OFFLINE: false,
    }
  },
  splitChunks: false,
  html: {
    template: "website/index.html",
  },
  dev: {
    hmr: false,
  },
  server: {
    port: 5559,
    publicDir: { name: "website" },
    cors: {
      origin: "*",
    },
  },
} satisfies RsbuildConfig;
