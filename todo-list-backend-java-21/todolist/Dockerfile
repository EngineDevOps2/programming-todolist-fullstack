# Use the official OpenJDK base image  
FROM openjdk:21-jdk-slim AS build  

# Set the working directory  
WORKDIR /app  

# Copy the build configuration file  
COPY . ./  
# If using Maven  
# COPY pom.xml ./  

# Copy the source files  
# COPY src ./src  

# Download dependencies and build the application  
RUN ./gradlew build 
# If using Maven  
# RUN mvn clean package  

# Create a new image for the runtime  
FROM openjdk:21-jdk-slim  
WORKDIR /app  
#RUN ls -l /app/build/libs/
COPY --from=build /app/build/libs/todolist-0.0.1-SNAPSHOT.jar app.jar  
# If using Maven  
# COPY --from=build /app/target/*.jar app.jar  

# Expose port 8080  
EXPOSE 8080  

# Run the application  
ENTRYPOINT ["java", "-jar", "app.jar"]
