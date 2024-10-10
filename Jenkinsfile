pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // 'NodeJS' should match the name you configured in Jenkins
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
    }
}
