import Item from './Item'

function FoodItems ({ foodItem }) {
  return (
    <>
      <ul className="list-group">
      {foodItem.map(item => 
        (<Item key={item} foodItem={item} ></Item>))}
    </ul>
    </>
  )
}

export default FoodItems