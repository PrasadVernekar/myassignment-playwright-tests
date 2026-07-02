<<<<<<< HEAD
<<<<<<< HEAD
# Playwright Automation Framework

## Overview

This project is an end-to-end automation framework built using **Playwright** and **JavaScript**. It follows the **Page Object Model (POM)** design pattern to improve test maintainability, readability, and reusability.

The framework supports:

- UI Automation
- API Automation using Playwright Request Context
- Reusable Fixtures
- HTML Reporting
- GitHub Actions CI Integration

---

# Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)
- Playwright Fixtures
- GitHub Actions

---

# Project Structure

```
my-qa-assignment
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── node_modules/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CheckoutPage.js
│   └── fixture.js
│
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── api.spec.js
│
├── playwright-report/
│
├── test-results/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

---

# Folder Description

## `pages`

Contains all Page Object Model (POM) classes and reusable fixtures.

### LoginPage.js

Handles all login-related actions such as:

- Navigating to the application
- Valid user login
- Invalid user login

---

### ProductPage.js

Contains reusable methods related to product functionality.

Examples:

- Sort products
- Add products to cart

---

### CheckoutPage.js

Contains methods for:

- Checkout
- Enter customer information
- Complete order

---

### fixture.js

Defines reusable Playwright fixtures.

Current fixtures include:

- LoginPage
- ProductPage
- CheckoutPage
- API Request Context

This avoids creating page object instances inside every test.

---

## `tests`

Contains all automated test cases.

### login.spec.js

Verifies:

- Successful login
- Locked user validation

---

### cart.spec.js

Verifies:

- Product sorting
- Lowest-priced product appears first
- Add products to cart
- Cart badge count

---

### checkout.spec.js

Verifies:

- Checkout flow
- Customer information
- Successful order completion

---

### api.spec.js

Uses Playwright's Request Context for API testing without launching a browser.

API scenarios include:

- GET User List
- POST Create User

---

## `playwright-report`

Automatically generated HTML execution report.

Open using:

```bash
npx playwright show-report
```

---

## `test-results`

Stores execution artifacts such as:

- Trace files
- Screenshots
- Videos

These are useful for debugging failed test cases.

---

## `playwright.config.js`

Global Playwright configuration.

Includes:

- Browser configuration
- Base URL
- Reporter
- Retries
- Timeouts
- Trace settings

---

# Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18 or later recommended)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd my-qa-assignment
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

## Execute all tests

```bash
npx playwright test
```

---

## Execute Login tests

```bash
npx playwright test tests/login.spec.js
```

---

## Execute Cart tests

```bash
npx playwright test tests/cart.spec.js
```

---

## Execute Checkout tests

```bash
npx playwright test tests/checkout.spec.js
```

---

## Execute API tests

```bash
npx playwright test tests/api.spec.js
```

---

## Execute tests in headed mode

```bash
npx playwright test --headed
```

---

## Execute tests in debug mode

```bash
npx playwright test --debug
```

---

## Execute a specific test

```bash
npx playwright test -g "add to cart badge"
```

---

# Reporting

After execution, view the HTML report:

```bash
npx playwright show-report
```

The report contains:

- Test Summary
- Pass/Fail Status
- Screenshots (Failures)
- Trace Viewer
- Execution Time

---

# API Testing

The framework includes API automation using Playwright's built-in Request Context.

### GET

```
GET /api/users?page=2
```

Validates:

- Status Code
- Response Schema
- User Details

---

### POST

```
POST /api/users
```

Payload:

```json
{
  "name": "morpheus",
  "job": "leader"
}
```

Validates:

- Status Code
- Name
- Job
- Generated ID
- Created Timestamp

---

# Framework Features

- Page Object Model (POM)
- Reusable Fixtures
- API Automation
- UI Automation
- HTML Reports
- Retry Mechanism
- Parallel Execution
- Auto Waiting
- Role-based Locators

---

# Best Practices Followed

- Page Object Model for maintainability
- Centralized reusable fixtures
- Global Playwright configuration
- Independent test cases
- Playwright auto-waiting
- Explicit assertions
- Separation of UI and API tests
- Readable and reusable code

---

The workflow performs:

- Checkout source code
- Install Node.js
- Install project dependencies
- Install Playwright browsers
- Execute Playwright tests
- Publish HTML report (if configured)

---

# Author

**Prasad Vernekar**
QA Automation Engineer
=======
# my-qa-assignment
>>>>>>> 5b34428a343abc87bae94c56a2cd9b9d59a5b6fd
=======
# myassignment-playwright-tests
>>>>>>> c0030a2a732b165c3a85fab23318d9140806c473
