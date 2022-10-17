import s from "./PromoForm.module.css";

const PromoForm = (props) => {
    return(
        <form action="#" className={s.form}>
            <div className={s.wrap}>
                <input className={s.input} type="text" />
            </div>
            <button className="btn btn_search">Шукати</button>
        </form>
    )
}

export default PromoForm;