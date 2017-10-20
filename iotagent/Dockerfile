FROM centos:6

RUN yum update -y && yum install -y wget \
  && wget http://ftp.rediris.es/mirror/fedora-epel/6/i386/epel-release-6-8.noarch.rpm \
  && yum localinstall -y --nogpgcheck epel-release-6-8.noarch.rpm \
  && yum -y install nodejs \
  && yum clean all

COPY . /opt/iota-lwm2m
WORKDIR /opt/iota-lwm2m

ENTRYPOINT bin/lwm2mAgent.js config.js
