import css from './Item.module.css'

const Item = ({ foodItem , hanldeBuyButtonCliked}) => {
  return (
    <>
      <li className={`${css.myItem} list-group-item`}><span    className={css.mySpan}>{foodItem}</span>
      <button className={`${css.button} btn btn-info`} 
      onClick={hanldeBuyButtonCliked}
      >Buy</button>
      </li>
    </>
  )
}

export default Item