# demo-notes
## Demo Notes App

Very basic CRUD Notes app with a Spring Boot backend, React frontend and MySQL database. Built to demonstrate how to deploy a simple full-stack app on a local Kubernetes cluster.

![DemoSmall](https://user-images.githubusercontent.com/15999515/178159863-bf0c7c8c-3bce-4591-a2c7-14ccef12ff00.png)

You can:
- Add a Note
- View all Notes
- Star a Note
- Delete a Note

## Deploy on Kubernetes cluster

**Prerequisites**
* Make sure your local Kubernetes cluster is up and running
* This project uses the NGINX Ingress controller in order to route traffic to either the React frontend (/*) or the Spring Boot REST API (/api/*). You'll need to deploy the NGINX Ingress controller to your local cluster using this **kubectl** command:

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.1/deploy/static/provider/cloud/deploy.yaml`

For more information, check out the [NGINX Ingress controller installation guide](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start).

* You'll need to create the following secret in your Kubernetes cluster:

`kubectl create secret generic mysqlpassword --from-literal MYSQL_PASSWORD=your_password`

**Deployment on a local Kubernetes cluster**
1. Open a terminal and navigate to the main project folder (*demo-notes*). Run the following command:

`kubectl apply -f kubernetes`

This will apply all .yaml configs from the demo-notes/kubernetes folder.

2. Your app should soon be up and running.

To access the React frontend, go to http://localhost or just type *localhost* in your browser's address bar.

To access the Spring Boot REST API, go to http://localhost/api/notes

***Note:** This has been tested with Docker Desktop's Kubernetes cluster. For Minikube, you'll probably need to use Minikube's IP instead of "localhost".*

## Run using Docker Compose

**Prerequisites**
* Take a look at *docker-compose.yml* and *application.properties*. There are two variables: $MYSQL_USERNAME and $MYSQL_PASSWORD. These will be used when accessing the MySQL database. You can:
    * Either edit the *docker-compose.yml* and *application.properties* files and change all occurances of these variables (I suggest you use "root" for the username and any arbitrary value for the password)
    * Or create these two environment variables (MYSQL_USERNAME and MYSQL_PASSWORD) on your Docker host system

**Running the containers using Docker Compose**

1. Open a terminal and navigate to the main project folder (*demo-notes*). Run the following command:

`docker-compose up`

This will run all 3 containers (backend, frontend and MySQL database) - if you don't have built images for these 3 containers, this command will automatically build the Spring Boot API and the React frontend and it will download the MySQL image from Docker Hub.

2. Your containers should soon be up and running.

To access the React frontend, go to http://localhost:3333/
You can't access the Spring Boot API from this configuration, since this is done by the NGINX Ingress Controller which is only present in the Kubernetes configuration.

3. When you're done with the app, shut down the containers using:

`docker-compose down`
