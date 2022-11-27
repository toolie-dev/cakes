import s from "./SearchMain.module.css";
import CardArticle from "../Cards/CardArticle/CardArticle";
import { MoreGoodies } from "../common/Btn/Btns/Btns";
import Pagination from "../Pagination/Pagination";
import classNames from "classnames";

const SearchMain = (props) => {
    return(
        <div className={s.main}>
            <div className={classNames(s.wrapper, s[`numberColumn${props.numberColumn}`])}>{props.list.map((item, i) => <CardArticle key={i + 1} isNeedWrepper={false} isSearch={true} {...item}/>)}</div>
            <div className={s.footer}>
                <MoreGoodies />
                <Pagination setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
            </div>
        </div>
    )
}

export default SearchMain;