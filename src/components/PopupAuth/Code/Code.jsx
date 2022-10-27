import s from "./Code.module.css";
import Canvas from "../../common/Canvas/Canvas";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import CodeForm from "./CodeForm/CodeForm";

const Code = (props) => {
    return (
        <Canvas isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.auth}>
                {props.isRegistration? 
                <HeaderAuth title="Реєстрація" setTypePopup={props.setTypePopup} />:
                <HeaderAuth title="Вхід" setTypePopup={props.setTypePopup} />}
                <CodeForm setTypePopup={props.setTypePopup} />
            </section>
        </Canvas>
    )
}

export default Code;