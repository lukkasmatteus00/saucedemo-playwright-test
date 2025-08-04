# 🧪 SauceDemo E2E Tests with Playwright

This repository contains a sample end-to-end (E2E) test automation project using [Playwright](https://playwright.dev/) and TypeScript.  

The goal is to validate the login functionality (successful and failed attempts) on the [SauceDemo website](https://www.saucedemo.com/).

---

## 📁 Project Structure

```
saucedemo-playwright/
├── tests/                    # E2E test files
│   └── login.spec.ts
├── utils/                    # Common steps
│   └── login.ts
├── .github/
│   └── workflows/            # GitHub Actions CI workflow
│       └── playwright.yml
├── playwright.config.ts      # Playwright configuration
├── package.json              # NPM dependencies and scripts
├── README.md                 # Project documentation
├── .gitignore
```

---

## ✅ Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)
- [Git](https://desktop.github.com/download/)

---

## 🚀 Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/lukkasmatteus00/saucedemo-playwright-test.git
cd saucedemo-playwright
npm install
```

Install Playwright's browsers:

```bash
npx playwright install
```

---

## 🧪 Running the Tests

To run all tests in headless mode:

```bash
npx playwright test
```

To run tests in headed mode (with UI):

```bash
npx playwright test --headed
```

To run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

To run a specific test case:

```bash
npx playwright test -g "Successful login with standard user"
```

---

## 📊 Viewing Test Reports

Playwright generates an HTML report automatically after execution.

To open the report:

```bash
npx playwright show-report
```

This opens an interactive HTML report in your browser, showing:
- Test results
- Screenshots (on failure)
- Videos (if enabled)
- Logs and steps

---

## 📌 Test Scenarios Covered

| Test Case                          | Description |
|-----------------------------------|-------------|
| ✅ Successful login               | Valid credentials: `standard_user` / `secret_sauce`, assert page URL and products |
| ❌ Failed login (invalid password) | Invalid password triggers error message |

---

## 🧠 Tech Stack

- [Playwright](https://playwright.dev/) with TypeScript
- Playwright Test Runner
- GitHub Actions
- HTML Reporter

---

## 🧼 Clean-up Commands

Remove test output and reports:

```bash
rm -rf test-results/ playwright-report/
```

---

## 📬 Questions?

If you have any questions or need further clarification, feel free to reach out.

---
