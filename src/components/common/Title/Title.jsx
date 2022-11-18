import s from "./Title.module.css";
import classNames from "classnames";

const Title = ({children, otherClass, isMini, ...restProps}) => {
    return(
        <h1 {...restProps} className={classNames(s.title, s[otherClass], isMini && s.mini)}>{children}</h1>
    )
}

export default Title;