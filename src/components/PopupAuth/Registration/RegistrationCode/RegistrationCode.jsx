import Code from "../../Code/Code"

const RegistratinCode = (props) => {
    return(
        <Code isRegistration={true} isShow={props.isShow} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
    )
}

export default RegistratinCode;