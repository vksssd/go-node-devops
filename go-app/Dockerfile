# Use the official Golang image as the base image
FROM golang:1.16

# Set the working directory inside the container
WORKDIR /go/src/app/go-app

# Copy the Go application source code into the container
# COPY go.mod ./
COPY .  .
# RUN cd go-app
RUN ls

# RUN go mod download

# Build the Go application
RUN go build -o main .

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the executable
CMD ["./go-app/main"]
