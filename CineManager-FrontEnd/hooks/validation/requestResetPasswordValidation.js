import { useState, useRef } from "react";

export function requestResetPasswordValidation() {

    const [errors, setErrors] = useState({});
    const [isFormValided, setIsFormValided] = useState(false);
    let isFormValid = true;

    const validateForm = (fields) => {
        setErrors({});

        const {  email } = fields;

      

        if (email.trim() === '') {
            setErrors(prevState => ({ ...prevState, email: "fiels required" }));
            isFormValid = false;
        } else if (!email.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => ({ ...prevState, email: "email refused" }));
            isFormValid = false;
        }

       

        setIsFormValided(isFormValid);

        return isFormValid

    }

    // apres submit cette function vider les champ
    const resetForm = (refs)=>{
        refs.emailField.current.value = '';
       
    }

    // pour get les error dans le champ exacte
    const getError = (fieldName) => errors[fieldName];

    const hasError = (fieldName) => getError(fieldName) !== undefined; //donc il y a une error dans ce cas 

    return {
        validateForm,
        resetForm,
        getError,
        hasError,
        isFormValided,
    };

}