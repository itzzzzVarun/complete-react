import css from './FoodInput.module.css'

const FoodInput = ({handleOnKeyDown}) => {


  return (
    <>
      <input className={css.foodInput} type="text" placeholder='Enter food item here' onKeyDown={handleOnKeyDown} />
    </>
  )
}

export default FoodInput;