import css from './Item.module.css'

const Item = ({ foodItem }) => {

    const hanldeBuyButtonCliked = (event) => {
      console.log(event)
      console.log(`${foodItem}  Item being bought`)
    }

  return (
    <>
      <li className={`${css.myItem} list-group-item`}><span    className={css.mySpan}>{foodItem}</span>
      <button className={`${css.button} btn btn-info`} 
      onClick={(event) => hanldeBuyButtonCliked(event) }
      >Buy</button>
      </li>
    </>
  )
}

export default Item