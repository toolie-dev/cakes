import s from "./Subtitle.module.css";
import classNames from "classnames";

const Subtitle = ({children, otherClass, ...restProps}) => {
    return(
        <h2 className={classNames(s.subtitle, s[otherClass])}>{children}</h2>
    )
}

export default Subtitle;