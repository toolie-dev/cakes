import "./Canvas.css";
import { Transition } from 'react-transition-group';

const Canvas = (props) => {
    return(
        <Transition
        in={props.isShow}
        timeout={props.timeout}
        mountOnEnter
        unmountOnExit
        >
            {state => (
                <div onClick={ props.onClickCanvas } className={`canvas ${state}${(props.isShowHeader)? " showHeader" : ""}`}>
                    {props.children}
                </div>
            )}
        </Transition>
    )
}

export default Canvas;