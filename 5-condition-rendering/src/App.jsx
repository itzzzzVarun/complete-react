import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App () {
  //let healthyFoods = ['Daal', 'Fruits', 'Milk', 'Salad', 'Green vegetables', 'Ghee']
  let emptymsg = "I am still hungery"
  let healthyFoods = []
  return (
    <>
    <h1>Healthy food</h1>
    {healthyFoods.length === 0 ? <h1>{emptymsg}</h1>: null}
    <ul className="list-group">
      {healthyFoods.map(item => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
    </>
  )
}

export default App