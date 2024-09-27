function ErrorMsg ({ foodItem }) {
     let emptymsg = "I am still hungery"
  return (
    <>
          {foodItem.length === 0 ? <h1>{emptymsg}</h1>: null}
    </>
  )
}
 export default ErrorMsg