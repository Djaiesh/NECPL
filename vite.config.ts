import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // allow external access
    port: 8080,
    hmr: {
      overlay: false,
      host: "low-increasing-united-movement.trycloudflare.com",
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Production optimization
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Code splitting for better caching
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
          "router": ["react-router-dom"],
          "forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "charts": ["recharts"],
        },
      },
    },
    // Source maps for production debugging
    sourcemap: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
  },
}));