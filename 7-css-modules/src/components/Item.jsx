import styles from './Item.module.css'

function Item ({ foodItem }) {
  console.log(styles)
  return (
    <>
          <li className={`${styles['my-item']} list-group-item`}><span className={`${styles['my-span']}`}>{foodItem}</span></li>
    </>
  )
}

export default Item