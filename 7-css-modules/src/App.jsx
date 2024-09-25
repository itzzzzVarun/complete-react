
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'


function App() {
    let healthyFoods = ['Daal', 'Fruits', 'Milk', 'Salad', 'Green vegetables', 'Ghee']
    // let healthyFoods = []
  return (
    <>
        <h1 className='my-heading'>Healthy food</h1>
    <ErrorMsg foodItem={healthyFoods}></ErrorMsg>
    <FoodItems foodItem={healthyFoods}></FoodItems>
    </>
  )
}

export default App
