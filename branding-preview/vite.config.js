import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  publicDir: path.resolve(__dirname, "../public"),
  server: {
    port: 5174,
    fs: {
      allow: [path.resolve(__dirname, "..")]
    }
  }
});
