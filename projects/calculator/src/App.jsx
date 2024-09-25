

import css from './App.module.css'
import Display from './components/Display'

import BtnContainer from './components/btnContainer'
function App() {

  let data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=','.']
  return (
    <>
      <div className={css.container}>
      <Display></Display>
      <BtnContainer data = {data}></BtnContainer>
      </div>
    </>
  )
}

export default App
