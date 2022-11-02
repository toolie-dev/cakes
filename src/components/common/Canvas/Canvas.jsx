import "./Canvas.css";
import { Transition } from 'react-transition-group';
import classNames from "classnames";

const Canvas = (props) => {
    return(
        <Transition
        in={props.isShow}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        >
            {state => (
                <div onClick={ props.onClickCanvas } className={classNames("canvas", state, {"showHeader": props.isShowHeader})}>
                    {props.children}
                </div>
            )}
        </Transition>
    )
}

export default Canvas;