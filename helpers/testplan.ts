import * as fs from "fs";

class TestPlan extends Helper {
  plan: String[] = [];
  _init() {
    const path = process.env.ALLURE_TESTPLAN_PATH;
    if (path && fs.existsSync(path)) {
      const data = fs.readFileSync(path);
      const testplan = JSON.parse(data.toString());
      testplan.tests.forEach(test => {
        this.plan.push(test.selector);
      })

    }
  }

  _beforeSuite(suite) {
    if (this.plan.length) {
      suite.tests = suite.tests.filter(test => {
        const fullName = `${suite.title}:.${test.title}`;
        return this.plan.indexOf(fullName) >= 0
      })
    }
  }
}

export = TestPlan;
