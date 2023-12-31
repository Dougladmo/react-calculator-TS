import { useState } from "react"
import { Container } from "./components/layout/Container.style"
import {
  NumberButton,
  OperatorButton,
  GrayButton,
  ZeroButton,
} from "./components/Button.style"
import { Result, ResultBox } from "./components/layout/Result.style"

function App() {
  const [num, setNum] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [operator, setOperator] = useState("")

  const percentage = () => {
    setNum(num / 100)
  }

  const numberInput = (e: any) => {
    const input = e.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  const operatorHandler = (e: any) => {
    const operatorInput = e.target.value
    setOperator(operatorInput)
    setFirstNum(num)
    setNum(0)
  }

  const clear = () => {
    setNum(0)
  }

  const changeSign = () => {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(num * -1)
    }
  }

  const calculate = () => {
    if (operator === "/") {
      setNum(firstNum / num)
    } else if (operator === "X") {
      setNum(firstNum * num)
    } else if (operator === "-") {
      setNum(firstNum - num)
    } else if (operator === "+") {
      setNum(parseFloat(firstNum) + parseFloat(num))
    }
  }

  return (
    <>
      <Container>
        <ResultBox>
          <Result>{num}</Result>
        </ResultBox>
        <div className="buttons">
          <GrayButton onClick={clear}>AC</GrayButton>
          <GrayButton onClick={changeSign}>+/-</GrayButton>
          <GrayButton onClick={percentage}>%</GrayButton>
          <OperatorButton onClick={operatorHandler} value={"/"}>
            /
          </OperatorButton>
          <NumberButton onClick={numberInput} value={7}>
            7
          </NumberButton>
          <NumberButton onClick={numberInput} value={8}>
            8
          </NumberButton>
          <NumberButton onClick={numberInput} value={9}>
            9
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"X"}>
            x
          </OperatorButton>
          <NumberButton onClick={numberInput} value={4}>
            4
          </NumberButton>
          <NumberButton onClick={numberInput} value={5}>
            5
          </NumberButton>
          <NumberButton onClick={numberInput} value={6}>
            6
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"-"}>
            -
          </OperatorButton>
          <NumberButton onClick={numberInput} value={1}>
            1
          </NumberButton>
          <NumberButton onClick={numberInput} value={2}>
            2
          </NumberButton>
          <NumberButton onClick={numberInput} value={3}>
            3
          </NumberButton>
          <OperatorButton onClick={operatorHandler} value={"+"}>
            +
          </OperatorButton>
          <ZeroButton onClick={numberInput} value={0}>
            0
          </ZeroButton>
          <NumberButton onClick={numberInput} value=".">
            ,
          </NumberButton>
          <OperatorButton onClick={calculate}>=</OperatorButton>
        </div>
      </Container>
    </>
  )
}

export default App
