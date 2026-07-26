/* eslint-disable no-undef */
// Librarys
import path from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import svgr from "vite-plugin-svgr";
import million from "million/compiler";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_CORS = true;
const DEFAULT_PORT = 3000;

export default function ({ mode }) {
  const PORT = process.env.VITE_PORT;
  const CORS = process.env.VITE_CORS;
  const cors = typeof CORS === "undefined" ? DEFAULT_CORS : JSON.parse(CORS);
  const port = typeof PORT === "undefined" ? DEFAULT_PORT : JSON.parse(PORT);

  return defineConfig({
    // Configure server in Vite
    server: {
      cors,
      port,
    },

    // Define the plugins to use in Vite
    plugins: [svgr(), react(), viteSingleFile(), million.vite({ auto: true })],

    // Resolve absolute paths
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
  });
}
