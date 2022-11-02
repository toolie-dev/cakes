import search from "../../../../assets/icons/search.svg";
import Btn from "../../../common/Btn/Btn";

import s from "./PromoForm.module.css";
import Img from "../../../common/Img/Img";

const PromoForm = (props) => {
    return(
        <form action="#" className={s.form}>
            <div className={s.wrap}>
                <input className={s.input} type="text" />
            </div>
            <Btn otherClass="search" backgroundColor="yellow">
                <span className={s.text}>Шукати</span>
                <div className={s.search}>
                    <Img height="20" src={search} alt="search"/>
                </div>
            </Btn>
        </form>
    )
}

export default PromoForm;