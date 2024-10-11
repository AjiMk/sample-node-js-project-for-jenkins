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
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }      
  }
}
