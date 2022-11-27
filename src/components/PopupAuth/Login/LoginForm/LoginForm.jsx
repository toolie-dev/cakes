import validate, { phoneValidator } from "../../../../utils/validators/index";
import s from "./LoginForm.module.css";
import { useFormik } from 'formik';
import { useRef } from "react";
import createMask from "../../../../utils/mask/mask";
import Btn from "../../../common/Btn/Btn";

const LoginForm = (props) => {
    const ref = useRef(null);

    const formik = useFormik({
        initialValues: {
            tel: ""
        },
        validate: values => {
            return validate(values, {
                tel: phoneValidator
            });
        },
        onSubmit: values => {
            props.setTypePopup("login-code");
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Номер телефону</h2>
                <h3 className={s.subtitle}>На вказаний номер вам прийде СМС-повідомлення з кодом</h3>
                <div className={s.wrap}>
                    <input className={s.input} ref={ref}  onInput={ (e) => { createMask(ref.current, e) } } onFocus={ (e) => { createMask(ref.current, e) } }
                        onBlur={ (e) => { createMask(ref.current, e) } } id="tel" name="tel" onChange={formik.handleChange} value={formik.values.tel} />
                    <Btn otherClass="auth" size="mini" type="submit" backgroundColor="yellowAuth">Надіслати</Btn>
                </div>
                {formik.errors.tel && <div className={s.error}>{formik.errors.tel}</div>}
            </div>
        </form>
    )
}

export default LoginForm;