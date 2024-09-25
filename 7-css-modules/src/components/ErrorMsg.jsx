function ErrorMsg ({ foodItem }) {
  let errorMsg = "I am still hungry"
  return (
    <>
      {foodItem.length === 0?{errorMsg}:null}
    </>
  )
}

export default ErrorMsg