import s from "./Title.module.css";
import classNames from "classnames";

const Title = ({children, otherClass, ...restProps}) => {
    return(
        <h1 {...restProps} className={classNames(s.title, s[otherClass])}>{children}</h1>
    )
}

export default Title;