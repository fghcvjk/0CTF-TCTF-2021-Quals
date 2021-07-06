From ubuntu:18.04

RUN sed -i 's/archive.ubuntu.com/mirror.sjtu.edu.cn/g' /etc/apt/sources.list \
    && apt-get update -y \
    && apt-get install curl -y \
    && useradd ctf \
    && mkdir /opt/app \ 
    && mkdir /opt/jdk

COPY jdk-8u291-linux-x64.tar.gz /tmp
RUN tar -xvzf /tmp/jdk-8u291-linux-x64.tar.gz -C /opt/jdk && rm -rf /tmp/jdk-8u291-linux-x64.tar.gz
COPY zeroXStream.jar /opt/app
COPY flag /flag_is_here_vwv

WORKDIR /opt/app

EXPOSE 8090

USER ctf
CMD ["/opt/jdk/jdk1.8.0_291/bin/java", "-jar", "/opt/app/zeroXStream.jar"]
