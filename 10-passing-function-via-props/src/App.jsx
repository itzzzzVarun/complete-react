
import css from  './App.module.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
function App() {
    let healthyFoods = ['Daal', 'Fruits', 'Milk', 'Salad', 'Green vegetables', 'Ghee']
    // let healthyFoods = []

    const handleOnChange = (e) => {
      console.log(e.target.value)
    }

  return (
      <>
    <Container>
        <h1 className={css.foodHeading}>Healthy food</h1>
            <ErrorMsg foodItem={healthyFoods}></ErrorMsg>
            <FoodInput handleOnChange={handleOnChange}></FoodInput>
            <FoodItems foodItem={healthyFoods}></FoodItems>
    </Container>

    <Container>
      <p>Above is the list of healthy food that are good for your health and well being.</p>
    </Container>
      </>
  )
}

export default App