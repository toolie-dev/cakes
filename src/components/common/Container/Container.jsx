import s from "./Container.module.css";
import classNames from "classnames";

const Container = (props) => {
    return(
        <div className={classNames(s.container, props.isMini && s.mini)}>
            {props.children}
        </div>
    )
}

export default Container;