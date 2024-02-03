FROM golang:1.21 AS builder

WORKDIR /usr/src/app

COPY hello.go .

RUN go mod init jorgegabriel/fullcycle && \
    go build 

FROM scratch 

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/fullcycle .

CMD ["./fullcycle"] 