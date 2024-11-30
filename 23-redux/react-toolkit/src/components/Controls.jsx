import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {

  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch( counterActions.increment());
  }

  const handleDecrement = () => {
      dispatch(counterActions.decrement());
  }

  const handleAdd = () => {
    dispatch(counterActions.add(
    inputElement.current.value
    ))
    inputElement.current.value = ""
  }

  const handleSubtract = () => {
    dispatch(counterActions.subtract(
    inputElement.current.value
    ));
    inputElement.current.value = ""
  }

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  }
  return (

    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" 
        onClick={handleIncrement}>
        +1
        </button>

        <button type="button" className="btn btn-success btn-lg px-4"
        onClick={handleDecrement}>
        -1
        </button>

        <button type="button" className="btn btn-warning"
        onClick={handlePrivacyToggle}>
        Privacy Toggle
        </button>
    </div>

    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row">
        <input type="text" ref={inputElement} className="number-input" placeholder="Enter a number..."/>

        <button type="button" className="btn btn-info" 
        onClick={handleAdd}>
        Add
        </button>
        <button type="button" className="btn btn-danger"
        onClick={handleSubtract}>
        Subtract
        </button>
    </div>
    </>

  )
}

export default Controls;