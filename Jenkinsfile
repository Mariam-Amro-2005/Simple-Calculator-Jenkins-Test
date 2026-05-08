pipeline {
    // Execute on any available agent
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git url: 'https://github.com/Mariam-Amro-2005/Simple-Calculator-Jenkins-Test.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                // Using 'bat' block for Windows Jenkins agents
                bat 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Running unit tests using Jest...'
                // Using 'bat' block for Windows Jenkins agents
                bat 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline succeeded! All tests passed.'
        }
        failure {
            echo 'Pipeline failed! Please check the console output.'
        }
    }
}
