pipeline {
  agent any
  tools {nodejs "nodejs"}
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
  }
}
