import { useState } from "react"
import Button from "./components/Button"
import ButtonBox from "./components/ButtonBox"
import Screen from "./components/Screen"
import Wrapper from "./components/Wrapper"
import { buttonValues } from "./utils/constants"

type CalculatorState = {
  sign: string;
  number: string;
  result: string
}

function App() {

  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    sign: '',
    number: '0',
    result: '0'
  })

  const buttonClickHandler = (button: string) => {
    switch (button) {
      case "C":
        clearScreen();
        break;
      case "+-":
        invertSign()
        break;
      case "%":
        calculatePercentage();
        break;
      case "=":
        getResult();
        break
      case "+":
      case "X":
      case "-":
      case "/":
        addSign(button)
        break
      case ".":
        addComma()
        break
      default:
        addNumber(button)
        break;
    }
  }

  const getResult = () => {
    if (calculatorState.sign && calculatorState.number) {
      const math = (sign: string, a: number, b: number) => {
        if (sign === '+') {
          return a + b;
        }

        else if (sign === '-') {
          return a - b;
        }

        else if (sign === 'X') {
          return a * b;
        }

        else {
          return a / b
        }
      }

      setCalculatorState({
        ...calculatorState,
        result: calculatorState.number === '0' && calculatorState.sign === '/'
          ? 'Cannot divide by 0'
          : math(calculatorState.sign, Number(calculatorState.result), Number(calculatorState.number))?.toString(),
        sign: '',
        number: '0'
      })
    }
  }

  const addNumber = (number: string) => {
    if (calculatorState.number.length < 16) {
      setCalculatorState({
        ...calculatorState,
        number: calculatorState.number === "0" && number === "0"
          ? "0"
          : Number(calculatorState.number) % 1 === 0
            ? Number(calculatorState.number + number).toString()
            : calculatorState.number + number
      })
    }
  }

  const addComma = () => {
    setCalculatorState({
      ...calculatorState,
      number: !calculatorState.number.includes('.') ? calculatorState.number + "." : calculatorState.number
    })
  }

  const addSign = (sign: string) => {
    setCalculatorState({
      ...calculatorState,
      sign,
      number: '0',
      result: !calculatorState.result && calculatorState.number ? calculatorState.number : calculatorState.result
    })
  }

  const calculatePercentage = () => {
    let number = Number(calculatorState.number)
    let result = calculatorState.result ? parseFloat(calculatorState.result) : 0

    setCalculatorState({
      ...calculatorState,
      number: (number /= 100).toString(),
      result: (result /= 100).toString(),
      sign: ''
    })
  }

  const invertSign = () => {
    setCalculatorState({
      ...calculatorState,
      sign: '',
      number: calculatorState.number ? (Number(calculatorState.number) * -1).toString() : '0',
      result: calculatorState.result ? (Number(calculatorState.result) * -1).toString() : '0',
    })
  }

  const clearScreen = () => {
    setCalculatorState({
      ...calculatorState,
      sign: '',
      number: '0',
      result: '0'
    })
  }

  return (
    <Wrapper>
      <Screen value={calculatorState.number ? calculatorState.number : calculatorState.result} />
      <ButtonBox>
        {
          buttonValues.flat().map((button, index) => {
            return <Button
              key={index}
              className={button === "=" ? "equals" : ""}
              value={button}
              onClick={() => buttonClickHandler(button)}
            />
          })
        }
      </ButtonBox>
    </Wrapper>
  )
}

export default App
