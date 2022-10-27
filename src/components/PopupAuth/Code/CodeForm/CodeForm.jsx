import s from "./CodeForm.module.css";
import { useFormik } from 'formik';
import { numberValidator } from "../../../../utils/validators/index";

const validateNumber = e => {
    if(e.target.value.length > 1){
        e.target.value = e.target.value.slice(0,1);
    }

    if(/\D/.test(e.target.value)){
        e.target.value = "";
    }
}

const validate = values => {
    const result = [];

    for(const key in values) {
        result.push(numberValidator(values[key]));
    }

    if(!result.every(item => item === true)){
        return {
            number: "Ви не ввели всі цифри"
        };
    }
};

const CodeForm = (props) => {
    const formik = useFormik({
        initialValues: {
            number1: "",
            number2: "",
            number3: "",
            number4: "",
            number5: "",
            number6: ""
        },
        validate,
        onSubmit: values => {
            let code = "";

            for(const key in values){
                code += values[key];
            }

            props.setTypePopup("");
            console.log(JSON.stringify({code}, null, 2));
        },
    });

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
             <div className={s.wrapper}>
                <h2 className={s.title}>Введіть код з повідомлення</h2>
                <div className={s.wrap}>
                    <div className={s.elem}>
                        <input
                            onInput={validateNumber}
                            className={s.input}
                            id="number1"
                            name="number1"
                            onChange={formik.handleChange}
                            value={formik.values.number1}
                        />
                        <input
                            onInput={validateNumber}
                            className={s.input}
                            id="number2"
                            name="number2"
                            onChange={formik.handleChange}
                            value={formik.values.number2}
                        />
                        <input
                            onInput={validateNumber}
                            className={s.input}
                            id="number3"
                            name="number3"
                            onChange={formik.handleChange}
                            value={formik.values.number3}
                        />
                    </div>
                    <div className={s.elem}>
                        <input
                            onInput={validateNumber}
                            className={s.input}
                            id="number4"
                            name="number4"
                            onChange={formik.handleChange}
                            value={formik.values.number4}
                        />
                        <input
                            onInput={validateNumber} 
                            className={s.input}
                            id="number5"
                            name="number5"
                            onChange={formik.handleChange}
                            value={formik.values.number5}
                        />
                        <input
                            onInput={validateNumber}
                            className={s.input}
                            id="number6"
                            name="number6"
                            onChange={formik.handleChange}
                            value={formik.values.number6}
                        />
                    </div>
                </div>
                {formik.errors.number ? <div className={s.error}>{formik.errors.number}</div> : null}
            </div>
            <div className={s.btns}>
                <button className={s.btn}>Надіслати повторно</button>
                <button className="btn btn_auth_big" type="submit">Надіслати</button>
            </div>
        </form>
    )
}

export default CodeForm;