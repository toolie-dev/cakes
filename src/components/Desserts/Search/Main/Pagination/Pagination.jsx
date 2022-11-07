import classNames from "classnames";
import s from "./Pagination.module.css";

const Pagination = (props) => {
    if(props.activePage > 2 && props.activePage < (props.numberPage - 1)){
        return(
            <div className={s.wrap}>
                {
                    ((props.activePage - 3) > 0)?
                    <>
                        <div className={s.item}>1</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.activePage - 1}</div>
                    </>:
                        <>
                        <div className={s.item}>1</div>
                        <div className={s.item}>{props.activePage - 1}</div>
                    </>
                }
                <div className={classNames(s.item, s.active)}>{props.activePage}</div>
                {
                    ((props.activePage + 3) < (props.numberPage + 1))?
                    <>
                        <div className={s.item}>{props.activePage + 1}</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.numberPage}</div>
                    </>:
                    <>
                        <div className={s.item}>{props.activePage + 1}</div>
                        <div className={s.item}>{props.numberPage}</div>
                    </>
                }
            </div>
        )
    }else if(props.activePage === 2 || props.activePage === (props.numberPage - 1)){
        return(
            <div className={s.wrap}>
                {
                    (props.activePage === 2)?
                    <>
                        <div className={s.item}>1</div>
                    </>:
                    <>
                        <div className={s.item}>1</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.activePage - 1}</div>
                    </>
                }
                <div className={classNames(s.item, s.active)}>{props.activePage}</div>
                {
                    (props.activePage === (props.numberPage - 1))?
                    <>
                        <div className={s.item}>{props.numberPage}</div>
                    </>:
                    <>
                        <div className={s.item}>{props.activePage + 1}</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.numberPage}</div>
                    </>
                }
            </div>
        )
    }else if(props.activePage === 1 || props.activePage === props.numberPage){
        return(
            <div className={s.wrap}>
                {
                    (props.activePage !== 1) &&
                    <>
                        <div className={s.item}>1</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.activePage - 1}</div>
                    </>
                }
                <div className={classNames(s.item, s.active)}>{props.activePage}</div>
                {
                    (props.activePage !== props.numberPage) &&
                    <>
                        <div className={s.item}>{props.activePage + 1}</div>
                        <div className={s.dots}>...</div>
                        <div className={s.item}>{props.numberPage}</div>
                    </>
                }
            </div>
        )
    }
}

export default Pagination;