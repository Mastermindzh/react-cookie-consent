import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactCookieConsent",
      formats: ["es", "umd"],
      fileName: (format) => `react-cookie-consent.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
