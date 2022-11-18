import check from "../../../assets/icons/checkCircle.svg";

import s from "./Btn.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Img from "../Img/Img";

const Btn = ({children, otherClass, backgroundColor, isAllWidth, size, isHref, to, href, isActive,  ...restProps}) => {
    if(!isHref){
        return(
            <button {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], isAllWidth && s.allWidth, isActive && s.active)}>
                {isActive? 
                <>
                    <div className={s.img}>
                        <Img height={20} src={check} alt="check" />
                    </div>
                    <span>{children}</span>
                </>:
                children}
            </button>
        )
    }else{
        if(href){
            return  <a href={href} {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], isAllWidth && s.allWidth)}>{children}</a>
        }else if(to){
            return  <NavLink to={to} {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], isAllWidth && s.allWidth)}>{children}</NavLink>
        }
    }
}

export default Btn;