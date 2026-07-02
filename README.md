# Playwright Automation Framework

##Overview

This project is an end-to-end automation framework built using **Playwright** and **JavaScript (ES6)**. It follows the **Page Object Model (POM)** design pattern to create a scalable, maintainable, and reusable test automation solution.

The framework supports both **UI Automation** and **API Automation**, using Playwright's built-in capabilities and reusable fixtures.

### Key Features

* UI Automation
* API Automation using Playwright Request Context
* Page Object Model (POM)
* Reusable Fixtures
* HTML Reporting
* Parallel Execution
* GitHub Actions CI Integration

---

# Framework Choice

## Why Playwright?

Playwright was selected because it provides a modern automation solution for both UI and API testing within a single framework.

### Advantages

* Supports **Chromium, Firefox, and WebKit**
* Built-in **API testing** without additional libraries
* **Auto-waiting** reduces flaky tests
* Fast **parallel execution**
* Rich debugging with **Trace Viewer**, screenshots, and videos
* Built-in **HTML reporting**
* Easy integration with **CI/CD pipelines**
* Excellent support for **Page Object Model (POM)**

These capabilities make Playwright an excellent choice for scalable and maintainable automation frameworks.

---

# Tech Stack

* Playwright
* JavaScript (ES6)
* Node.js
* Page Object Model (POM)
* Playwright Fixtures
* GitHub Actions

---

# Project Structure

```text
my-qa-assignment
│
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
├── test-results/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Folder Description

## pages/

Contains all Page Object Model (POM) classes and reusable fixtures.

### LoginPage.js

Handles:

* Navigate to application
* Valid user login
* Invalid user login

### ProductPage.js

Handles:

* Product sorting
* Add products to cart
* Remove products from cart

### CheckoutPage.js

Handles:

* Checkout process
* Customer information
* Complete order

### fixture.js

Provides reusable Playwright fixtures:

* LoginPage
* ProductPage
* CheckoutPage
* API Request Context

This avoids creating page objects inside every test.

---

## tests/

Contains automated UI and API test cases.

### login.spec.js

Covers:

* Successful login
* Locked user validation
* Invalid username
* Invalid password
* Empty username
* Empty password

### cart.spec.js

Covers:

* Product sorting
* Add products to cart
* Cart badge validation
* Cart navigation
* Remove products

### checkout.spec.js

Covers:

* Successful checkout
* Checkout information
* Checkout overview
* Required field validations

### api.spec.js

Uses Playwright Request Context.

Current scenarios:

* GET Cart
* POST Create Cart
* PUT Update Cart
* DELETE Cart

---

# Prerequisites

Before running the project, install:

* Node.js (v18 or later)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd my-qa-assignment
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run Login tests

```bash
npx playwright test tests/login.spec.js
```

Run Cart tests

```bash
npx playwright test tests/cart.spec.js
```

Run Checkout tests

```bash
npx playwright test tests/checkout.spec.js
```

Run API tests

```bash
npx playwright test tests/api.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

Run a specific test

```bash
npx playwright test -g "test name"
```

---

# Reporting

Generate and open the Playwright HTML Report:

```bash
npx playwright show-report
```

The report includes:

* Test Summary
* Pass/Fail Status
* Execution Time
* Screenshots (Failures)
* Videos
* Trace Viewer

---

# Framework Features

* Page Object Model (POM)
* Reusable Fixtures
* UI Automation
* API Automation
* HTML Reporting
* Auto Waiting
* Retry Mechanism
* Parallel Execution
* Role-based Locators

---

# Best Practices Followed

* Page Object Model (POM)
* Centralized reusable fixtures
* Independent test cases
* Global Playwright configuration
* Explicit assertions
* Separation of UI and API tests
* Playwright auto-waiting
* Readable and reusable code

---

# Extension Plan

The framework is designed to scale as the application grows.

## Parallelisation

Future improvements include:

* Cross-browser execution
* Smoke, Regression, and Sanity test suites
* Multiple worker execution
* Browser matrix execution in CI

Example:

```bash
npx playwright test --workers=4
```

---

## Reporting

Current:

* Playwright HTML Report


---

# Author

**Prasad Vernekar**

QA Automation Engineer
