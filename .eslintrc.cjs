module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        // Always use `project` setting in case you have multiple tsconfigs
        project: "./tsconfig.json", // Path to your tsconfig
      },
    },
    react: {
      version: "18.2.0", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:import/errors", // For import errors
    "plugin:import/warnings", // For import warnings
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "react/prop-types": "off", // Turn off prop-types validation
    "prettier/prettier": "error", // Show Prettier errors as ESLint errors
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
