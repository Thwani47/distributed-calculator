FROM golang:1.22-bullseye AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o main .

FROM debian:buster-slim AS release
WORKDIR /app
COPY --from=builder /app/main /app/main

EXPOSE 8000

CMD ["/app/main"]