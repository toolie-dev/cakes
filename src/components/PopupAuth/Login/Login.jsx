import s from "./Login.module.css";
import FooterAuth from "../FooterAuth/FooterAuth";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../common/FormControls/FormControls";
import { telephoneNumber } from "../../../utils/validators/index";
import Canvas from "../../common/Canvas/Canvas";



const LoginForm = (props) => {
    return (
        <Formik
        initialValues={{ tel: '' }}
        validate={values => {
            const tel = telephoneNumber(values.tel);
            const errors = {
                tel
            };
            console.log(errors);
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
                <h2 className={s.title}>Номер телефону</h2>
                <h3 className={s.subtitle}>На вказаний номер вам прийде СМС-повідомлення з кодом</h3>
                <Field type="tel" name="tel" component={Input} />
                <ErrorMessage name="tel" component="div" />
                <button type="submit" disabled={isSubmitting}>Надіслати</button>
            </Form>
        )}
        </Formik>
    )
}

//Input
const Login = (props) => {
    return(
        <Canvas isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.auth}>
                <HeaderAuth title="Вхід" setTypePopup={props.setTypePopup} />
                <LoginForm {...props} />
                <FooterAuth isRegistration={false} onClick={ () => { props.setTypePopup("auth") } } />
            </section>
        </Canvas>
    )
}

export default Login;