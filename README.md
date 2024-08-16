# API Automation for Simple Book

## Prerequisites

Ensure you have the following software installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Newman (Postman's command-line runner)

## 1. Clone the Repository

First, clone this repository to your local machine:

``bash
git clone <repository-url>
cd <repository-directory>

## 2. Install Dependencies

```bash
npm install
```

This will install all necessary dependencies listed in package.json.

## 3. Set Up Your Environment

Edit the environment file (soraya.env.json) or update the email in the script directly:

- Replace the email field with your email address:

``` bash
"values": [
    {
        "key": "email",
        "value": "your-email@example.com",
        "enabled": true
    }
]
```

## 4. Run the Automation Script

You can run the tests using the following command:

```bash
npm filename.js
```

## 5. View the Results

The test results will be displayed in the terminal. Each test will show whether it passed or failed, along with any additional details.

## Structure
- filename.js: Contains the main script that runs the automated tests.
- soraya.postman_collection.json: Contains the Postman collection with all the API tests.
- soraya.postman_environment.json: Contains the environment variables required for the tests.

**Notes:**
- Replace filename.js with the actual filename of your script.
- Customize any sections that require more specific details about the tests or configuration.
