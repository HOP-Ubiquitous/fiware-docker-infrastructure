# FIWARE-Docker-infrastructure

### Description
This repository contains a easy way to deploy a FIWARE infrastructure through docker compose  

### Architecture
<br>

![alt text](https://raw.githubusercontent.com/HOP-Ubiquitous/fiware-docker-infrastructure/master/images/architecture.png "Architecture image")

<br>

### Docker Architecture

All the services share the subnet and will be reachable through the dns namespaces provided by docker. 

![alt text](https://raw.githubusercontent.com/HOP-Ubiquitous/fiware-docker-infrastructure/master/images/network.png "Docker network image")

### Install and Deploy

#### Requirements

* docker-ce
* docker-compose


#### Build IoTAgent

Within the IoTAgent folder execute:

```
$ docker build -t "iotagent:latest" .
```

In order for the iotagent to receive its configuration, a config.js 
file must exist in the docker-compose directory. This directory will 
include the information that must be mapped between the devices and 
the orion.

#### Configure Cygnus

In order to configure the channels and databases in which the information will persist, 
it is necessary to configure the agent.conf file in the docker-compose/ directory.
This file will be loaded into the docker container as a configuration file.<br><br>
An example of the file that is loaded by default can be found in the following url:<br>
https://github.com/telefonicaid/fiware-cygnus/blob/master/docker/cygnus-ngsi/agent.conf <br><br>
In the previous example we can see how to initialize each of the different connectors to databases.
<br><b>_To simplify the debug better add only the necessary ones._</b>


#### Docker Compose Commands

Launch infrastructure:

```
$ docker-compose up
``` 

Launch infrastructure in background:
```
$ docker-compose up -d
```

Stop infrastructure:
```
$ docker-compose down
```

#### Orion-Cygnus Communication:
In order to get the information that reaches Orion to be persistent, it is necessary to create subscriptions on Orion by setting Cygnus as the url of the callback.
An example of the subscription to create can be found in the postman collection within the main directory.

https://github.com/HOP-Ubiquitous/fiware-docker-infrastructure/blob/master/fiware-docker.postman_collection.json


***
-------


<img src="http://www.hopu.eu/wp-content/uploads/2016/05/HOP_LOGO_NEW_LINE.png" width=600/>
<img src="http://www.fiware4industry.com/wp-content/uploads/2015/11/FIWARE-for-Industry.png" width=600/>

