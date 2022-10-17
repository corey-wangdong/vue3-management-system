/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "no-var": 2,
    eqeqeq: 2,
    // 箭头函数参数括号，一个参数时可省略括号
    "arrow-parens": [2, "as-needed"],
    // 禁止出现未使用的变量
    "@typescript-eslint/no-unused-vars": [2],
    // 箭头函数，箭头前后空格
    "arrow-spacing": [2, { before: true, after: true }]
  }
};
