import css from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) => {


  return (
    <>
      <input className={css.foodInput} type="text" placeholder='Enter food item here' onChange={handleOnChange} />
    </>
  )
}

export default FoodInput;