import Item from './Item'

function FoodItems ({ foodItem }) {
  const hanldeBuyButtonCliked = (item) => {
    console.log(`${item}  Item being bought`)
  }
  return (
    <>
      <ul className="list-group">
      {foodItem.map(item => 
        (<Item key={item} foodItem={item} hanldeBuyButtonCliked={() => hanldeBuyButtonCliked(item)}></Item>))}
    </ul>
    </>
  )
}

export default FoodItems