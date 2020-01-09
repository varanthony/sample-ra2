//Jenkins file only to tutorial example
pipeline {
  agent any
    
  tools {nodejs "nodeJS_13_3_0"}
  
  environment {
        BUILD_FULL = sh (script: "docker image ls | grep nodejs-react-ra2",returnStatus: true)
  }

  stages {

    stage('Env') {
      steps {
          sh 'node --version'
          sh 'npm --version'
          sh 'grunt --version'
          sh 'bower --version'
      }
    }

    stage('Cloning Git') {
      steps {
        git branch: 'master', credentialsId: 'a0f3da8c-fe12-4f9a-a949-8ff21d1cabea', url: 'http://10.101.0.73:3000/anthony.lai/react-ra2.git'
      }
    }

    stage('Build dependencies') {
      steps {
        sh 'npm run-script build'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage ('publish to Nexus 3'){
          steps {
            sh 'npm publish'
          }
        }
     
		stage ('Sonarqube Analysis by Shell Script'){
      steps {
      sh "rm -Rf target/sonar-reports"
			sh "/opt/sonar-scanner/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
			sh "java -jar /opt/sonar-scanner/plugin/sonar-cnes-report.jar -s http://10.101.0.73:9000 -p NodeTest -o target/sonar-reports"
      }
    }

    stage('Docker Build') {
      steps {
        script {
          if( BUILD_FULL == '0') {
              sh "docker image rm nexus/nodejs-react-ra2:latest"
          }
          sh 'docker image build -t nexus/nodejs-react-ra2:latest .'
          sh 'docker images'
        }
      }
    }





    // stage ('publish to Nexus 3'){
    //       steps {
    //         // sh "npm login --registry=http://10.101.0.91:8081/repository/npm-private/"
    //         // sh "npmuser"
    //         // sh "P@ssw0rd"
    //         // sh "anthony.lai@varmeego.com"
    //         // sh "npm publish"
    //         // sh "npm logout --registry=http://10.101.0.91:8081/repository/npm-private/"
    //         sh 'npm publish'
    //       }
    //     }
    
    // stage('Image to Nexus.') {
    //   steps{
		// 	sh "docker tag docker.io/alks1013/react-nodejs:DEV localhost:18085/sample/react-nodejs:DEV"
		// 	sh "docker login -u mvnuser -p P@ssw0rd localhost:18085"
		// 	sh "docker push localhost:18085/sample/react-nodejs:DEV"
		// 	sh "docker logout localhost:18085"
	  //   }
    // }

  }
}