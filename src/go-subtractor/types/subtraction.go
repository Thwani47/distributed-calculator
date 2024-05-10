package types

type SubtractionRequest struct {
	FirstNumber  float32 `json:"firstNumber"`
	SecondNumber float32 `json:"secondNumber"`
}

type SubtractionResponse struct {
	Result float32 `json:"result"`
}
