import type { RsbuildConfig, EnvironmentConfig } from "@rsbuild/core";
import { env } from "node:process";

export default {
  mode: env.NODE_ENV as any,
  environments: {
    editor: {
      source: { entry: { index: "./editor/main.ts" } },
      html: { template: "website/index.html", title: "StarBox" },
      output: { distPath: "dist/" },
      tools: { rspack: { output: { filename: "./beepbox_editor.min.js" } } },
    },
    player: {
      source: { entry: { index: "./player/main.ts" } },
      html: { template: "website/player/index.html", title: "StarBox Song Player" },
      output: { distPath: "dist/player/" },
      tools: { rspack: { output: { filename: "./beepbox_player.min.js" } } },
    },
    synth: {
      source: { entry: { index: "./synth/synth.ts" } },
      output: { distPath: "dist/" },
      tools: {
        htmlPlugin: false,
        rspack: {
          output: {
            filename: "./beepbox_synth.min.js",
            library: {
              type: "global",
              name: "beepbox",
            },
          },
        },
      },
    },
  },
  source: {
    define: {
      OFFLINE: false,
    },
  },
  splitChunks: false,
  dev: {
    hmr: false,
  },
  server: {
    port: 5559,
    publicDir: { name: "website" },
    htmlFallback: false,
  },
} satisfies RsbuildConfig;
