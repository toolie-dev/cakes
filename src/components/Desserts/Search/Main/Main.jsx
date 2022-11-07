import arrow_left from "../../../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../../../assets/icons/arrow/arrow_right.svg";

import s from "./Main.module.css";
import CardProductSearch from "../../../Cards/CardProductSearch/CardProductSearch";
import { MoreGoodies } from "../../../common/Btn/Btns/Btns";
import Img from "../../../common/Img/Img";
import Pagination from "./Pagination/Pagination";

const Main = (props) => {
    const products = props.products.map((item, i) => <CardProductSearch key={i + 1} {...item}/>);
    return(
        <div className={s.main}>
            <div className={s.wrapper}>
                {products}
            </div>
            <div className={s.footer}>
                <MoreGoodies />
                <div className={s.pagination}>
                    <button onClick={ () => { props.setActivePage(-1) } } className={s.button}>
                        <Img height={25} src={arrow_left} alt="arrow_left" />
                    </button>
                    <Pagination numberPage={props.numberPage} activePage={props.activePage} />
                    <button onClick={ () => { props.setActivePage(1) } } className={s.button}>
                        <Img height={25} src={arrow_right} alt="arrow_right" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;