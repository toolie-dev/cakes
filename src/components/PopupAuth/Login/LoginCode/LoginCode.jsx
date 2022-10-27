import Code from "../../Code/Code"

const LoginCode = (props) => {
    return(
        <Code isRegistration={false} isShow={props.isShow} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
    )
}

export default LoginCode;