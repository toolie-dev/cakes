import s from "./Btn.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const Btn = ({children, otherClass, backgroundColor, isAllWidth, size, isHref, to, href,  ...restProps}) => {
    if(!isHref){
        return <button {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], s[isAllWidth? "allWidth": null])}>{children}</button>
    }else{
        if(href){
            return  <a href={href} {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], s[isAllWidth? "allWidth": null])}>{children}</a>
        }else if(to){
            return  <NavLink to={to} {...restProps} className={classNames(s.btn, s[otherClass], s[backgroundColor], s[size], s[isAllWidth? "allWidth": null])}>{children}</NavLink>
        }
    }
}

export default Btn;