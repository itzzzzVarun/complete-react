import css from './Button.module.css'

const Button = ( { data, diplayClicked }) => {

  return (
    <>
          
          {data.map(item => (<button key={item} className={css.button} onClick={() => diplayClicked(item)}>{item}</button>))}
    </>
  )
}

export default Button
