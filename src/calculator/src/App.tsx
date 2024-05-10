import { useState } from "react"
import Button from "./components/Button"
import ButtonBox from "./components/ButtonBox"
import Screen from "./components/Screen"
import Wrapper from "./components/Wrapper"
import { buttonValues } from "./utils/constants"
import { calculate } from "./utils/calculator"

type CalculatorState = {
  sign: string;
  number: number | string;
  result: number
}

function App() {

  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    sign: '',
    number: 0,
    result: 0
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

  const getResult = async () => {

    if (calculatorState.sign && calculatorState.number) {
      const result = calculatorState.number === 0 && calculatorState.sign === '/'
        ? Number.POSITIVE_INFINITY
        : await calculate(calculatorState.sign, Number(calculatorState.result), Number(calculatorState.number));
      setCalculatorState({
        ...calculatorState,
        result,
        sign: '',
        number: 0
      })
    }
  }

  const addNumber = (number: string) => {
    if (calculatorState.number.toString().length < 16) {
      setCalculatorState({
        ...calculatorState,
        number: calculatorState.number === 0 && number === "0"
          ? 0
          : Number(calculatorState.number) % 1 === 0
            ? Number(calculatorState.number + number)
            : Number(calculatorState.number + number)
      })
    }
  }

  const addComma = () => {
    setCalculatorState({
      ...calculatorState,
      number: !calculatorState.number.toString().includes('.') ? calculatorState.number + "." : calculatorState.number
    })
  }

  const addSign = (sign: string) => {
    setCalculatorState({
      ...calculatorState,
      sign,
      number: 0,
      result: !calculatorState.result && calculatorState.number ? Number(calculatorState.number) : calculatorState.result
    })
  }

  const calculatePercentage = () => {
    let number = Number(calculatorState.number)
    let result = calculatorState.result ? parseFloat(calculatorState.result.toString()) : 0

    setCalculatorState({
      ...calculatorState,
      number: number /= 100,
      result: result /= 100,
      sign: ''
    })
  }

  const invertSign = () => {
    setCalculatorState({
      ...calculatorState,
      sign: '',
      number: calculatorState.number ? (Number(calculatorState.number) * -1) : 0,
      result: calculatorState.result ? (Number(calculatorState.result) * -1) : 0,
    })
  }

  const clearScreen = () => {
    setCalculatorState({
      ...calculatorState,
      sign: '',
      number: 0,
      result: 0
    })
  }

  return (
    <>
    <h1 className="heading">Distributed Calculator</h1>
      <Wrapper>
        <Screen value={calculatorState.number ? calculatorState.number.toString() : calculatorState.result.toString()} />
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
    </>
  )
}

export default App
