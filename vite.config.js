import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { localHost } from "./help";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      api: {
        target: localHost,
      },
    },
  },
});
