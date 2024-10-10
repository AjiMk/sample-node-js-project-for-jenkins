pipeline {
    agent {
        docker {
            image 'node:16' // Node.js version you need
            args '-u root'  // Run as root user
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
