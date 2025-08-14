pipeline {
  agent {
        docker {
            image 'node:18'
        }
    }

  environment {
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub-creds')                                                   
    IMAGE_NAME = "akbar00/jenkins-ci-node-app" 
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/MdAkbar123/jenkins-ci-node-app.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Docker Build & Push') {
      steps {
        script {
          docker.build(IMAGE_NAME).push("latest")
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/test-results.xml', allowEmptyArchive: true
    }
  }
}
