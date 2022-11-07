import Btn from "../../../common/Btn/Btn";
import s from "./SearchForm.module.css";

const SearchForm =(props) => {
    return(
        <form className={s.form}>
            <div className={s.wrapper}>
                <input className={s.input} placeholder="Шоколадний торт з квітами" type="text" />
                <Btn otherClass="search" backgroundColor="yellow" size="mini">Шукати</Btn>
            </div>
        </form>
    )
}

export default SearchForm;