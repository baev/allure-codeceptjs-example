export const config: CodeceptJS.MainConfig = {
  name: "codeceptjs",
  tests: "./specs/*.spec.ts",
  output: "./out",
  plugins: {
    allure: {
      resultsDir: "./out/allure-results",
      require: "allure-codeceptjs",
    },
  },
};
