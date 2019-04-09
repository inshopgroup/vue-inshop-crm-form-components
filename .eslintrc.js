module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:vue/base"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "@/sass/style.scss";`
  //     }
  //   }
  // },
  rules: {
  },
};
