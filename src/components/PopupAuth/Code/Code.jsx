import s from "./Code.module.css";
import CanvasContainer from "../../common/Canvas/CanvasContainer";
import HeaderAuthContainer from "../HeaderAuth/HeaderAuthContainer";
import CodeFormContainer from "./CodeForm/CodeFormContainer";

const Code = (props) => {
    return (
        <CanvasContainer isShow={props.isShow}>
            <section className={s.auth}>
                {props.isRegistration? 
                <HeaderAuthContainer title="Реєстрація" />:
                <HeaderAuthContainer title="Вхід" />}
                <CodeFormContainer />
            </section>
        </CanvasContainer>
    )
}

export default Code;