
# Sample Node.js Project for Jenkins CI/CD

This is a sample Node.js project created to demonstrate Continuous Integration and Continuous Deployment (CI/CD) using Jenkins. The project includes basic setup with TypeScript, ESLint for linting, and Jest for unit testing.

## Project Structure

```plaintext
.
├── src/
│   └── server.ts     # Main application entry point
├── package.json     # Project metadata and scripts
├── tsconfig.json    # TypeScript configuration
├── .eslintrc.js     # ESLint configuration (optional if using flat config)
├── jest.config.js   # Jest configuration
└── README.md        # Project documentation
```

## Features

- **Node.js with Express**: Basic Express server.
- **TypeScript**: Configured to compile TypeScript.
- **ESLint**: Code linting with ESLint and TypeScript support.
- **Jest**: Unit testing framework integrated.
- **CI/CD with Jenkins**: Configured to demonstrate CI/CD pipelines in Jenkins.

## Requirements

- Node.js v18.x or higher
- Jenkins for CI/CD pipeline setup
- TypeScript v5.x

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/sample-node-js-project-for-jenkins.git
cd sample-node-js-project-for-jenkins
```

### Install Dependencies

```bash
npm install
```

### Running the Project

You can run the project using the following NPM scripts:

- **Start the application**:
  ```bash
  npm start
  ```

- **Build the TypeScript files**:
  ```bash
  npm run build
  ```

- **Lint the code**:
  ```bash
  npm run lint
  ```

- **Run the tests**:
  ```bash
  npm test
  ```

## Jenkins CI/CD Pipeline

This project is designed to work with Jenkins to automate the CI/CD process. You can set up a Jenkins pipeline to:

1. Install dependencies
2. Lint the code
3. Run tests
4. Build the TypeScript project
5. Deploy the application

### Example Jenkins Pipeline Configuration

Here’s a simple Jenkins pipeline configuration (`Jenkinsfile`) to use with this project:

```groovy
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment steps here
            }
        }
    }
}
```

## Project Setup for Local Development

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the server with `npm start`.

### Running Locally

The application will run on `http://localhost:3000`. You can adjust the port in the source file (`src/index.js`) by modifying the `port` variable.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Minimal web framework for Node.js.
- **TypeScript**: Typed JavaScript for better development experience.
- **ESLint**: Linter to ensure code quality and consistency.
- **Jest**: Unit testing framework for JavaScript and TypeScript.
- **Jenkins**: Automation server for CI/CD.

