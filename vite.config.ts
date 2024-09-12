import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";
import dynamicImport from "vite-plugin-dynamic-import";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  // Memastikan variabel lingkungan dimuat
  const apiCaptcha = env.VITE_API_CAPTCHA;
  const apiUser = env.VITE_API_USER;
  const apiMonitoring = env.VITE_API_MONITORING;
  const apiDapot = env.VITE_API_DAPOT;

  return {
    plugins: [react(), tsconfigPaths(), dynamicImport()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      exclude: [...configDefaults.exclude, "node_modules/**"],
    },
    define: {
      "process.env": process.env,
    },
    server: {
      proxy: {
        // Mengarahkan permintaan API ke server backend
        "/api/v1/captcha": {
          target: apiCaptcha,
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/captcha/, "/api/v1/captcha"),
        },
        "/api/v1/user": {
          target: apiUser,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/v1\/user/, "/api/v1/user"),
        },
        "/api/v1/eventbus": {
          // target: apiEventbus,
          target: "http://192.168.1.62:2041",
          // target: "http://77.37.44.158:2041",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/eventbus/, "/api/v1/eventbus"),
        },
        "/api/v1/monitoring": {
          // target: apiMonitoring,
          target: "http://192.168.1.62:2022",
          // target: "http://77.37.44.158:2041",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/monitoring/, "/api/v1/monitoring"),
        },
      },
    },
    preview: {
      port: 5173,
      proxy: {
        // Mengarahkan permintaan API ke server backend
        "/api/v1/captcha": {
          target: apiCaptcha,
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/captcha/, "/api/v1/captcha"),
        },
        "/api/v1/user": {
          target: apiUser,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/v1\/user/, "/api/v1/user"),
        },
        "/api/v1/dapot": {
          target: apiDapot,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/v1\/dapot/, "/api/v1/dapot"),
        },
        "/api/v1/eventbus": {
          // target: apiEventbus,
          target: "http://192.168.1.62:2041",
          // target: "http://77.37.44.158:2041",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/eventbus/, "/api/v1/eventbus"),
        },
        "/api/v1/monitoring": {
          // target: apiMonitoring,
          target: "http://192.168.1.62:2022",
          // target: "http://77.37.44.158:2041",
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(/^\/api\/v1\/monitoring/, "/api/v1/monitoring"),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          // This setting avoids the eval usage issue
          compact: true,
        },
      },
      commonjsOptions: {
        transformMixedEsModules: true,
        dynamicRequireTargets: [
          "node_modules/lottie-web/build/player/lottie.js",
        ],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "replace-eval",
            setup(build) {
              build.onLoad(
                { filter: /lottie-web\/build\/player\/lottie\.js$/ },
                async (args) => {
                  const contents = await fs.promises.readFile(
                    args.path,
                    "utf8"
                  );
                  const modified = contents.replace(/eval\(/g, "(0, eval)(");
                  return { contents: modified, loader: "default" };
                }
              );
            },
          },
        ],
      },
    },
  };
});
