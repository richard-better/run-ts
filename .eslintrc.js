module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "standard",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
