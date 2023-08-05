import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName]=useState('');
  const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched]= useState(false);

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event =>{
    setEnteredNameIsTouched(true);

    if(enteredName.trim()==='')
    {
      setEnteredNameIsValid(false);
    }
  }
  
  const formSubmisionHandler = event =>{
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if(enteredName.trim()=== '')
    {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue= nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  }

  
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses= nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className="error-text">Imię nie może być puste</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
