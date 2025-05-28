w<<<<<<< HEAD
# PlaywrightPKT
=======
# UI Automation Test
This repo is for form submission automation test

## Overview

PlaywrightPKT is a project for UI testing of web forms using Playwright.

## Folder structure
.
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── PengumumanPage.js
├── resources/
│   └── data.json
├── selectors/
│   ├── homeSelectors.js
│   ├── loginSelectors.js
│   └── pengumumanSelectors.js
├── tests/
│   ├── home.spec.js
│   ├── invalidLogin.spec.js
│   └── pengumuman.spec.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── playwright.config.js
└── playwright.config.js

## Prerequisites

- Node.js (version 21 or lower) to avoid version compatibility issues

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright and its required browsers:
   ```bash
   npx playwright install
   ```

## How to run

- run this command `npm run test:allure`

### Report
- Once the test is complete, html report will be displayed automatically.
>>>>>>> 882d94d (Initial commit)
