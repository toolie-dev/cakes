import arrow_left from "../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../assets/icons/arrow/arrow_right.svg";

import classNames from "classnames";
import s from "./Pagination.module.css";
import Img from "../common/Img/Img";

const Pagination = (props) => {
    return(
        <div className={s.pagination}>
            <button onClick={ () => { props.setActivePage((props.activePage - 1)) } } className={s.button}>
                <Img height={25} src={arrow_left} alt="arrow_left" />
            </button>
            <div className={s.wrap}>
                {props.activePage !== 1 && <div onClick={ () => { props.setActivePage(1) } } className={s.item}>1</div>}
                {props.activePage > 3 && <div className={s.dots}>...</div>}
                {props.activePage > 2 && <div onClick={ () => { props.setActivePage(props.activePage - 1) } } className={s.item}>{props.activePage - 1}</div>}
                <div onClick={ () => { props.setActivePage(props.activePage) } } className={classNames(s.item, s.active)}>{props.activePage}</div>
                {props.activePage < (props.numberPage - 1) && <div onClick={ () => { props.setActivePage((props.activePage + 1)) } } className={s.item}>{props.activePage + 1}</div>}
                {props.activePage < (props.numberPage - 2) && <div className={s.dots}>...</div>}
                {props.activePage !== props.numberPage && <div onClick={ () => { props.setActivePage(props.numberPage) } } className={s.item}>{props.numberPage}</div>}
            </div>
            <button onClick={ () => { props.setActivePage((props.activePage + 1)) } } className={s.button}>
                <Img height={25} src={arrow_right} alt="arrow_right" />
            </button>
        </div>
    )
}

export default Pagination;