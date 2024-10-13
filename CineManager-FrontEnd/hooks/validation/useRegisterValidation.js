import { useState, useRef } from "react";

export function useRegisterValidation() {

    const [errors, setErrors] = useState({});
    const [isFormValided, setIsFormValided] = useState(false);
    let isFormValid = true;

    const validateForm = (fields) => {
        setErrors({});

        const { nom, email, password } = fields;

        if (nom.trim() === '') {
            setErrors(prevState => ({ ...prevState, name: "fiels required" }));
            isFormValid = false;

        }

        if (email.trim() === '') {
            setErrors(prevState => ({ ...prevState, email: "fiels required" }));
            isFormValid = false;
        } else if (!email.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => ({ ...prevState, email: "email refused" }));
            isFormValid = false;
        }

        if (password.trim() === '') {
            setErrors(prevState => ({ ...prevState, password: "fiels required" }));
            isFormValid = false;
        } else if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            setErrors(prevState => ({ ...prevState, password: "password refused" }));
            isFormValid = false;
        }

        setIsFormValided(isFormValid);

        return isFormValid

    }

    // apres submit cette function vider les champ
    const resetForm = (refs)=>{
        refs.nameField.current.value = '';
        refs.emailField.current.value = '';
        refs.passwordField.current.value = '';

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