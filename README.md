```bash
# Viewing images 
docker images

# Viewing containers 
docker ps    # All running containers
docker ps -s # All containers

# Pulling images
docker pull {IMAGE_NAME}:{TAG} # tag basically means the version. We can run public images directly without pulling it

# Running images(Creating a new container)
docker run {IMAGE_NAME}:{TAG}
docker run -d {IMAGE_NAME}:{TAG} # Detaches from terminal(Runs in background)
docker run --name {NEW_NICKNAME} {IMAGE_NAME}:{TAG}

#Stopping container
docker stop {CONTAINER_ID}

# Starting container 
docker start {CONTAINER_ID} # Runs the container without creating a new one

# Port binding
docker run -p {HOST_PORT}:{CONTAINER_PORT}

# Creating images
# We write a Dockerfile

# Base images
# Are images that we write on top of 
FROM node:19-alpine # This makes sure our image has node-19-alpine 
COPY {FROM_LOCAL} {TO_CONTAINER} # COPY ./package.json ./app/
WORKDIR {DIRECTORY} # Basically doing cd
RUN {COMMAND} # This will execute any command in the container
CMD ["node", "server.js"] # Last command to be executed. Runs when container start(docker start). There can be only one
# RUN will run only once when we are creating the container(docker run)
# CMD will run when we start our docker container(docker start)

# Building image from Dockerimage
docker build -t {IMAGE_NAME}:{TAG} {LOCATION} # docker build -t myImage:1.0 .
```

### POSTGRES TERMINAL
```bash
    psql -U {USERNAME} # Logs into the postgresql server
    CREATE DATABASE {NAME}; #Creates a new db(don't forget the ;)
    \c {NAME}; #Connects to that DB
    \l # Lists all the databases available
```