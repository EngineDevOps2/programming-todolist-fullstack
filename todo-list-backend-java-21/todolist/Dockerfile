FROM amd64/gradle:8.11-jdk21 AS build

WORKDIR /app  

COPY . ./  
RUN gradle build

EXPOSE 8080  


CMD  gradle flywayMigrate --stacktrace --no-daemon &&  java -jar /app/build/libs/todolist-0.0.1-SNAPSHOT.jar
#CMD   java -jar /app/build/libs/todolist-0.0.1-SNAPSHOT.jar

