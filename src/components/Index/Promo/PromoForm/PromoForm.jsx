import search from "../../../../assets/icons/search.svg";

import s from "./PromoForm.module.css";

const PromoForm = (props) => {
    return(
        <form action="#" className={s.form}>
            <div className={s.wrap}>
                <input className={s.input} type="text" />
            </div>
            <button className="btn btn_search">
                <span className={s.text}>Шукати</span>
                <div className={`${s.search} img img_20`}>
                    <img src={search} alt="search" />
                </div>
            </button>
        </form>
    )
}

export default PromoForm;