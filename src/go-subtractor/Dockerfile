FROM golang:1.22-bullseye

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o main .

EXPOSE 8000

CMD ["./main"]