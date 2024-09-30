import { useState } from 'react'
import Item from './Item'

function FoodItems ({ foodItem }) {
  let [activeItems, setActiveItem] = useState([]);

  const hanldeBuyButtonCliked = (item, event) => {
    let newItems = [...activeItems, item]
    setActiveItem(newItems);
  }
  return ( 
    <>
      <ul className="list-group">
      {foodItem.map(item => 
        (<Item key={item} foodItem={item} bought={activeItems.includes(item)} hanldeBuyButtonCliked={(event) => hanldeBuyButtonCliked(item, event)}></Item>))}
    </ul>
    </>
  )
}

export default FoodItems