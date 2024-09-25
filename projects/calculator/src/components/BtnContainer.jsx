import css from './BtnContainer.module.css'
import Button from './Button'
const BtnContainer = ({ data }) => {
  return (
    <>
        <div className={css.btnContainer}>
          <Button data = {data}></Button>
        </div>
    </>
  )
}

export default BtnContainer