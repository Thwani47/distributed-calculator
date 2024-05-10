from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to the Flask Multiplier API!"

@app.get("/health")
def check_health():
    return "healthy"

@app.route('/multiply', methods=['POST'])
def multiply():
    data = request.get_json()
    first_number = float(data.get('firstNumber'))
    second_number = float(data.get('secondNumber'))
    
    result = first_number * second_number
    
    return jsonify({'product' : result})

if __name__ == '__main__':
    app.run()