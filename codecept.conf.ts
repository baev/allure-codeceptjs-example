export const config: CodeceptJS.MainConfig = {
  name: "codeceptjs",
  tests: "./specs/*.spec.ts",
  output: "./output",
  plugins: {
    allure: {
      outputDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
