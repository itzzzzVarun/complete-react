

import { useState } from 'react'
import css from './App.module.css'
import Display from './components/Display'

import BtnContainer from './components/BtnContainer'
function App() {
  let data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=','.', 'C']
  let [calVal, setCalVal ] = useState("")
  
  const displayClicked = (inputText) => {
  if (inputText === "=") {
    const result = eval(calVal)
    setCalVal(result)
  } else if (inputText === "C"){
    setCalVal("")
  } else {
    let input = calVal + inputText
    setCalVal(input)
  }
  }
  return (
    <>
      <div className={css.container}>
      <Display displayValue = {calVal}></Display>
      <BtnContainer  data = {data}  diplayClicked={(e) => {displayClicked(e)}}  ></BtnContainer>
      </div>
    </>
  )
}

export default App
