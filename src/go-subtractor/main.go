package main

import (
	"fmt"
	"net/http"

	"github.com/Thwani47/distributed-calculator/go-subtractor/handlers"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", handlers.HomeHandler).Methods("GET")
	router.HandleFunc("/health", handlers.HealthCheckHandler).Methods("GET")
	router.HandleFunc("/subtract", handlers.SubtractionHandler).Methods("POST")
	fmt.Println("Server is running on port 8000")
	http.ListenAndServe(":8000", router)
}
