# ###Use the official Golang image as a base  
FROM golang:1.22 AS builder  

# Set the Current Working Directory inside the container  
WORKDIR /app  

# Copy go mod and sum files  
COPY go.mod go.sum ./  

# This will download all the dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed  
RUN go mod tidy  

# Copy the source code into the container  
COPY . .  

# Build the Go app  
RUN go build -o todolist  

# Start a new stage from scratch  
FROM alpine:latest  

# Set the Current Working Directory inside the container  
WORKDIR /app  

# Copy the Pre-built binary file from the previous stage  
COPY --from=builder /app/todolist ./ 

# Expose the port the app runs on  
EXPOSE 8000 

# Command to run the executable  
CMD ["/app/todolist"]
