import css from './BtnContainer.module.css'
import Button from './Button'
const BtnContainer = ({ data, diplayClicked }) => {

  return (
    <>
        <div className={css.btnContainer}>
        <Button data={data} diplayClicked={diplayClicked}></Button>
        </div>
    </>
  )
}

export default BtnContainer