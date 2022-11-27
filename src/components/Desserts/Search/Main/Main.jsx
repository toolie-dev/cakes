import s from "./Main.module.css";
import CardProductSearch from "../../../Cards/CardProductSearch/CardProductSearch";
import { MoreGoodies } from "../../../common/Btn/Btns/Btns";
import Pagination from "../../../Pagination/Pagination";

const Main = (props) => {
    return(
        <div className={s.main}>
            <div className={s.wrapper}>{props.products.map((item, i) => <CardProductSearch key={i + 1} {...item}/>)}</div>
            <div className={s.footer}>
                <MoreGoodies />
                <Pagination setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
            </div>
        </div>
    )
}

export default Main;