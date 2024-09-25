
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Item from './components/Item'

function App() {
    let healthyFoods = ['Daal', 'Fruits', 'Milk', 'Salad', 'Green vegetables', 'Ghee']
    // let healthyFoods = []
  return (
    <>
        <h1>Healthy food</h1>
    <ErrorMsg foodItem={healthyFoods}></ErrorMsg>
    <FoodItems foodItem={healthyFoods}></FoodItems>
    </>
  )
}

export default App
