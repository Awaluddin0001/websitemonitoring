module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier", // Integrasi dengan Prettier untuk format
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": "warn", // Hindari penggunaan console.log dalam kode produksi
    "react/jsx-uses-react": "off", // Tidak perlu di React 17+ dengan JSX Transform
    "react/react-in-jsx-scope": "off", // Tidak perlu di React 17+ dengan JSX Transform
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
