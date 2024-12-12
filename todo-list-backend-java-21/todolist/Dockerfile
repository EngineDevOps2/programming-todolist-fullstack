##### Use the official OpenJDK base image  
# FROM openjdk:21-jdk-slim AS build  
FROM amd64/gradle:8.11-jdk21 AS build
# Set the working directory  
WORKDIR /app  

# Copy the build configuration file  
COPY . ./  
# If using Maven  
# COPY pom.xml ./  

# Copy the source files  
# COPY src ./src  

# Download dependencies and build the application  
# RUN ./gradlew build 
# If using Maven  
# RUN mvn clean package  
RUN gradle build  --no-daemon
# Create a new image for the runtime  
# FROM amd64/gradle:8.11-jdk21   
#  WORKDIR /app  
# # #RUN ls -l /app/build/libs/
# COPY --from=build /app/build/libs/todolist-0.0.1-SNAPSHOT.jar app.jar  
# # If using Maven  
# # COPY --from=build /app/target/*.jar app.jar  

# # Expose port 8080  
EXPOSE 8080  

# Run the application  
# ENTRYPOINT ["java", "-jar", "app.jar"]

#CMD  gradle flywayMigrate --stacktrace --no-daemon &&  java -jar /app/build/libs/todolist-0.0.1-SNAPSHOT.jar
CMD   java -jar /app/build/libs/todolist-0.0.1-SNAPSHOT.jar

