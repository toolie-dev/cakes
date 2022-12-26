import {phone} from "phone";

export const phoneValidator = value => {
    if(phone(value, {country: 'UA'}).isValid != true) return "Неправильний номер телефону";
}

export const numberValidator = value => {
    if(value && !/\D/.test(value)) return true;

    return false;
}

export const presenceSomething = value => {
    if(!/\S/.test(value)) return "Де текст?" 
}

const validate = (values, validators)  => {
    let errors = {};

    for (const key in values) {
        if(validators[key]){
            const error = validators[key](values[key]);

            if(typeof(error) === "string"){
                errors = {
                    ...errors,
                    [key]: error 
                }
            }
        }
    }

    return errors;
};

export default validate;