import arrow from "../../assets/icons/arrow/arrow_button.svg";

import s from "./SearchAside.module.css";
import Title from "../common/Title/Title";
import Img from "../common/Img/Img";
import { useState } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import Item from "./Item/Item.jsx";

const SearchAside = (props) => {
    const [isShow, setIsShow] = useState(false);

    const classGenerator = (state) => {
        if(state === "entering") return "animate__animated animate__fadeInDown"
        else if(state === "exiting") return "animate__animated animate__fadeOutUp"
        else return s[state]
    }

    return(
        <aside className={s.aside}>
            <Title otherClass="search">{props.title}</Title>
            <button onClick={ () => { setIsShow(!isShow) } } className={s.btn}>
                <div className={s.info}>Більше фільтрів</div>
                <span className={classNames(isShow && s.active, s.arrow)}>
                    <Img height={24} src={arrow} alt="arrow" />
                </span>
            </button>
            <Transition
            in={isShow}
            timeout={1000}>
                {state => <div className={classNames(s.wrapper, classGenerator(state))}>
                    {
                        props.list.map((item, i) => (
                            <div key={i + 1} className={s.elem}>
                                <h2 className={s.title}>{item.title}</h2>
                                <div className={s.wrap}>
                                    {item.list.map((item, i) => <Item key={i + 1} {...item} setTypes={props.setTypes} />)}
                                </div>
                            </div>
                        ))
                    }
                </div>}
            </Transition>
        </aside>
    )
}

export default SearchAside;