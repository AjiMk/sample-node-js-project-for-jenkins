pipeline {
  agent any
  tools {Node.j "node"}
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/AjiMk/sample-node-js-project-for-jenkins'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }      
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
