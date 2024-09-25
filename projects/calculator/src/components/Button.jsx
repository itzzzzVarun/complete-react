import css from './Button.module.css'

const Button = ( { data }) => {
  return (
    <>
          
          {data.map(item => (<button className={css.button}>{item}</button>))}
    </>
  )
}

export default Button
