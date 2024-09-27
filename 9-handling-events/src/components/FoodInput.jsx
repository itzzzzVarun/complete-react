import css from './FoodInput.module.css'

const FoodInput = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <input className={css.foodInput} type="text" placeholder='Enter food item here' onChange={handleOnChange} />
    </>
  )
}

export default FoodInput;