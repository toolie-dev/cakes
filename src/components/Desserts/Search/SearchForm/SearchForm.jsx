import search from "../../../../assets/icons/search.svg";

import Btn from "../../../common/Btn/Btn";
import Img from "../../../common/Img/Img";
import s from "./SearchForm.module.css";

const SearchForm =(props) => {
    return(
        <form className={s.form}>
            <div className={s.wrapper}>
                <input className={s.input} placeholder="Шоколадний торт з квітами" type="text" />
                <Btn otherClass="search" backgroundColor="yellow" size="mini">
                    <div className={s.text}>Шукати</div>
                    <div className={s.search}>
                        <Img height={25} src={search} alt="search" />
                    </div>
                </Btn>
            </div>
        </form>
    )
}

export default SearchForm;