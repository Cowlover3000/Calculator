pipeline {
    agent any
    stages {
        stage('show folders') {
            steps {
                sh 'touch .halloween'
                sh 'ls -lah .'
                sh 'pwd'
            }
        }
        stage('Test') {
            steps {
                // Test steps here
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps here
            }
        }
    }
}