import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App () {
  let healthyFoods = ['Daal', 'Fruits', 'Milk', 'Salad', 'Green vegetables', 'Ghee']
  return (
    <>
    <h1>Healthy food</h1>
    <ul className="list-group">
      {healthyFoods.map(item => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
    </>
  )
}

export default App
