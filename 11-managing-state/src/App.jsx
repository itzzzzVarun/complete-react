
import css from  './App.module.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'
function App() {

    let [ healthyFoods, setFoodItems ] = useState([])


    const handleOnKeyDown = (e) => {
      if (e.key === 'Enter') {
      let newFoodItem = e.target.value
      let newItems = [...healthyFoods, newFoodItem]
      setFoodItems(newItems)
      e.target.value = ""
      }
    }


    
  return (
      <>
    <Container>
        <h1 className={css.foodHeading}>Healthy food</h1>

            <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
            <ErrorMsg foodItem={healthyFoods}></ErrorMsg>
            <FoodItems foodItem={healthyFoods}></FoodItems>
    </Container>

    <Container>
      <p>Above is the list of healthy food that are good for your health and well being.</p>
    </Container>
      </>
  )
}

export default App
