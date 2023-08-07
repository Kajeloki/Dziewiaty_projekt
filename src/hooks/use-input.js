import React, {useState} from "react";

const useInput = (reg)=>{
    const [enteredValue, setEnteredValue]=useState('');
    const [isTouched, setIsTouched]= useState(false);

    const valueIsValid = reg(enteredValue);
    const valueIsInvalid = !valueIsValid && isTouched;

    const valueInputChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
      }
    
      const valueInputBlurHandler = event =>{
        setIsTouched(true);
      }

      const reset =()=>{
        setEnteredValue('');
        setIsTouched(false);
      }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        valueIsInvalid,
        valueInputChangeHandler,
        valueInputBlurHandler,
        reset
    };

    
}

export default useInput;