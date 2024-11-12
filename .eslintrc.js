module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "no",
    "react-native/no-unused-styles": "error",
  },
};
