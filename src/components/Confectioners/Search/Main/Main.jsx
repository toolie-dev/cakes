import s from "./Main.module.css";
import { MoreGoodies } from "../../../common/Btn/Btns/Btns";
import Pagination from "../../../Pagination/Pagination";
import Item from "./Item/Item";
import Title from "../../../common/Title/Title";

const Main = (props) => {
    return(
        <div className={s.main}>
            <div className={s.title}>
                <Title>Кращі кондитери</Title>
            </div>
            <div className={s.wrapper}>{props.confectioners.map((item , i) => <Item key={i + 1} {...item} />)}</div>
            <div className={s.footer}>
                <MoreGoodies />
                <Pagination setActivePage={props.setActivePage} numberPage={props.numberPage} activePage={props.activePage} />
            </div>
        </div>
    )
}

export default Main;