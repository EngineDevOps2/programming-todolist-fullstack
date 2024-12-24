FROM amd64/gradle:8.11-jdk21 AS build

WORKDIR /app  

COPY . ./
#RUN gradle shadowJar --no-daemon

EXPOSE 8080  


#CMD  gradle flywayMigrate --stacktrace --no-daemon &&  java -jar /app/build/libs/app.jar
CMD  gradle flywayMigrate  --no-daemon &&  gradle bootRun
#CMD   java -jar /app/build/libs/todolist-0.0.1-SNAPSHOT.jar

