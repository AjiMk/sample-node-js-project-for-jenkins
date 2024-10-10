pipeline {
    agent any
    stages {
        stage('Install Node.js') {
            steps {
                sh '''
                curl -sL https://deb.nodesource.com/setup_16.x | bash -
                sudo apt-get install -y nodejs
                node -v
                npm -v
                '''
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
    }
}
