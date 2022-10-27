import {phone} from "phone";

export const phoneValidator = value => {
    if(phone(value, {country: 'UA'}).isValid != true){
        return "Неправильний номер телефону";
    }
}

export const numberValidator = value => {
    if(value && !/\D/.test(value)) return true;

    return false;
}