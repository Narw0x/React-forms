import { useState } from 'react';

export function useInput(defaultValue = '', validFn){
    const [value, setValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validFn(value);

    function handleChange(event){
        setValue(event.target.value);
        setDidEdit(false);
    }
    
    function handleBlur(){
        setDidEdit(true);
    }

    return{
        value: value,
        hasError: didEdit && !valueIsValid,
        handleChange,
        handleBlur
    }
}