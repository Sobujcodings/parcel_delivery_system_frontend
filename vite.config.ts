import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Your frontend runs here
    proxy: {
      "/api": {
        // Intercepts requests starting with /api
        target: "http://localhost:5000", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
