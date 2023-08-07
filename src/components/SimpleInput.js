
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueIsInvalid: nameInputHasError,
    valueInputChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetName
   }=useInput(value=> value.trim() !=='');

   const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    valueIsInvalid: mailInputHasError,
    valueInputChangeHandler: mailChangeHandler,
    valueInputBlurHandler: mailBlurHandler,
    reset: resetMail
   }=useInput(value=> value.includes('@'));

 let formIsValid =false;
    if(enteredNameIsValid && enteredMailIsValid)
    {
      formIsValid=true;
    }
    else{
      formIsValid=false;
    }

  
  const formSubmisionHandler = event =>{
    event.preventDefault();
    console.log(enteredName);
    resetName();
    resetMail();
  }

  
 
  const nameInputClasses= nameInputHasError ? 'form-control invalid' : 'form-control';
  const mailInputClasses= mailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler}  value={enteredName} onBlur={nameBlurHandler}/>
        {nameInputHasError && <p className="error-text">Imię nie może być puste</p>}
      </div>

      <div className={mailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='mail' onChange={mailChangeHandler}  value={enteredMail} onBlur={mailBlurHandler}/>
        {mailInputHasError && <p className="error-text">Email musi zawierać "@"</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
