import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueIsInvalid: enteredNameIsInvalid,
    valueInputChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetName
  }=useInput(value => value.trim()!=='');
  
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    valueIsInvalid: enteredLastNameIsInvalid,
    valueInputChangeHandler: lastNameChangeHandler,
    valueInputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  }=useInput(value => value.trim()!=='');

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    valueIsInvalid: enteredMailIsInvalid,
    valueInputChangeHandler: mailChangeHandler,
    valueInputBlurHandler: mailBlurHandler,
    reset: resetMail
  }=useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredLastNameIsValid && enteredMailIsValid)
  {
    formIsValid = true;
  }else {
    formIsValid = false;
  }

  const submitHandler = (event)=>{
    event.preventDefault();
    resetName();
    resetLastName();
    resetMail();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
          {enteredNameIsInvalid && <p>Wprowadź imię</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
          {enteredLastNameIsInvalid && <p>Wprowadź nazwisko</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={mailChangeHandler} onBlur={mailBlurHandler} value={enteredMail}/>
        {enteredMailIsInvalid && <p>Wprowadź mail ze znakiem "@"</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
