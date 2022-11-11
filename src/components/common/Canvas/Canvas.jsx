import "./Canvas.css";
import { Transition } from 'react-transition-group';
import classNames from "classnames";

const Canvas = (props) => {
    const classGenerator = (state) => {
        if(state === "entering") return "animate__animated animate__fadeIn"
        else if(state === "exiting") return "animate__animated animate__fadeOut"
    }
    return(
        <Transition
        in={props.isShow}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        >
            {state => (
                <div onClick={ props.onClickCanvas } className={classNames("canvas", classGenerator(state), {"showHeader": props.isShowHeader})}>
                    {props.children}
                </div>
            )}
        </Transition>
    )
}

export default Canvas;