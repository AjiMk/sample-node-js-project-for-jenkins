pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('SonarQube Analysis') {
      steps {
        script {
          def scannerHome = tool 'SonarScanner';
          withSonarQubeEnv('SonarScanner') {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
