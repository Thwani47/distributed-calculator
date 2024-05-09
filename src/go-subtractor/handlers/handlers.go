package handlers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/Thwani47/distributed-calculator/go-subtractor/types"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Welcome to the Go Subtractor API"))
}

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("healthy"))
}

func SubtractionHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "Error reading requst body", http.StatusInternalServerError)
		return
	}

	var numbers types.SubtractionRequest

	err = json.Unmarshal(body, &numbers)

	if err != nil {
		http.Error(w, "Error unmarshallig request body", http.StatusBadRequest)
		return
	}

	result := types.SubtractionResponse{
		Difference: numbers.FirstNumber - numbers.SecondNumber,
	}

	jsonResult, err := json.Marshal(result)
	if err != nil {
		http.Error(w, "Error marshalling response body", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(jsonResult)

}
