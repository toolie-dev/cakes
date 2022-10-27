import s from "./RegistrationForm.module.css";
import { useFormik } from 'formik';
import { phoneValidator } from "../../../../utils/validators/index";
import createMask from "../../../../utils/mask/mask";
import { useRef } from "react";
import {phone} from "phone";

const validate = values => {
    const validators = {
        tel: phoneValidator
    }

    let errors= {};

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

const RegistrationForm = (props) => {
    const ref = useRef(null);

    const formik = useFormik({
        initialValues: {
            tel: "+38-(0",
            name: ""
        },
        validate,
        onSubmit: values => {
            props.setTypePopup("registration-code");
            console.log(JSON.stringify({
                name: values.name,
                phoneNumber: phone(values.tel, {country: 'UA'}).phoneNumber,
                typeUser: props.typeRegistration
            }, null, 2));
        },
    });

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
             <div className={s.wrapper}>
                <h2 className={s.title}>{props.typeRegistration === "buyer" ? "Ім’я та прізвище" : "Ім’я або назва компанії"}</h2>
                <div className={s.wrap}>
                    <input
                        className={s.input}
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                {formik.errors.name ? <div className={s.error}>{formik.errors.name}</div> : null}
            </div>
            <div className={s.wrapper}>
                <h2 className={s.title}>Номер телефону</h2>
                <h3 className={s.subtitle}>На вказаний номер вам прийде СМС-повідомлення з кодом</h3>
                <div className={s.wrap}>
                    <input
                        className={s.input}
                        ref={ref}
                        onInput={ (e) => { createMask(ref.current, e) } }
                        onFocus={ (e) => { createMask(ref.current, e) } }
                        onBlur={ (e) => { createMask(ref.current, e) } }
                        id="tel"
                        name="tel"
                        onChange={formik.handleChange}
                        value={formik.values.tel}
                    />
                    <button className="btn btn_auth_mini" type="submit">Надіслати</button>
                </div>
                {formik.errors.tel ? <div className={s.error}>{formik.errors.tel}</div> : null}
            </div>
        </form>
    )
}

export default RegistrationForm;