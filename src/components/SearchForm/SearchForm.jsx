import { useFormik } from "formik";
import search from "../../assets/icons/search.svg";
import validate, { presenceSomething } from "../../utils/validators";
import Btn from "../common/Btn/Btn";
import Img from "../common/Img/Img";
import s from "./SearchForm.module.css";

const Form = (props) => {
    const formik = useFormik({
        initialValues: {
            text: ""
        },
        validate: values => {
            const test = validate(values, {
                text: presenceSomething
            });
            return test
        },
        onSubmit: values => {
            props.setResult(values.text);
            values.text = "";
        },
    });

    return(
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <div className={s.wrapper}>
                <input className={s.input} placeholder={props.placeholder} name="text"
                type="text" onChange={formik.handleChange} value={formik.values.text}/>
                <Btn type="submit" otherClass="search" backgroundColor="yellow" size="mini">
                    <div className={s.text}>Шукати</div>
                    <div className={s.search}>
                        <Img height={25} src={search} alt="search" />
                    </div>
                </Btn>
            </div>
            {formik.errors.text ? <div className={s.error}>{formik.errors.text}</div> : null}
        </form>
    )
}

const SearchForm = (props) => {
    return(
        <div>
            <Form placeholder={props.placeholder} setResult={props.setResult} />
            {props.result.length != 0 &&
            <div className={s.wrap}>
                {
                    props.result.map((item, i) => (
                        <div key={i + 1} className={s.item}>
                            <div className={s.main}>
                                <h2 className={s.title}>“{item.text}”</h2>
                                <div onClick={ () => { props.deleteResult(i) } } className={s.delete}>&#10006;</div>
                            </div>
                            <div className={s.info}>{item.products} смаколики</div>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default SearchForm;