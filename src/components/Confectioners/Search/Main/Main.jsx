import s from "./Main.module.css";
import { MoreGoodies } from "../../../common/Btn/Btns/Btns";
import Pagination from "../../../Pagination/Pagination";
import Item from "./Item/Item";

const Main = (props) => {
    const confectioners = props.confectioners.map((item , i) => <Item key={i + 1} {...item} />);
    return(
        <div className={s.main}>
            <div className={s.wrapper}>{confectioners}</div>
            <div className={s.footer}>
                <MoreGoodies />
                <Pagination setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
            </div>
        </div>
    )
}

export default Main;