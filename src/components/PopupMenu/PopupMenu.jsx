import s from "./PopupMenu.module.css";
import WithoutLoginContainer from "./WithoutLogin/WithoutLoginContainer";
import BuyerMenu from "./BuyerMenu/BuyerMenu";
import ConfectionerMenu from "./ConfectionerMenu/ConfectionerMenu";
import Menu from "./Menu/Menu";
import CanvasContainer from "../common/Canvas/CanvasContainer";

const PopupMenu = (props) => {

    return(
        <CanvasContainer isShowHeader={true} isShow={props.isShow}>
            <section className={s.menu}>
                {props.isAuth || <WithoutLoginContainer />}
                {(props.isAuth && props.typeUser === "buyer") && <BuyerMenu />}
                {(props.isAuth && props.typeUser === "confectioner") && <ConfectionerMenu />}
            </section>
        </CanvasContainer>
    )
}

export default PopupMenu;