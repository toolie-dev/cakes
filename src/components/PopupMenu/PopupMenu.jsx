import s from "./PopupMenu.module.css";
import WithoutLogin from "./WithoutLogin/WithoutLogin";
import UsersMenu from "./UsersMenu/UsersMenu";
import ConfectionersMenu from "./ConfectionersMenu/ConfectionersMenu";
import StaticMenu from "./StaticMenu/StaticMenu";
import Canvas from "../common/Canvas/Canvas";

const PopupMenu = (props) => {
    /*
    const Menu = () => {
        //номера menu
        const number = 3;
        if(number === 1) {
            return <WithoutLogin />
        }else if (number === 2) {
            return <UsersMenu />
        }else if(number === 3){
            return <ConfectionersMenu />
        }else if(number === 4){
            return <StaticMenu />
        }
    }
    */

    return(
        <Canvas isShowHeader={true} isShow={props.isShow} timeout={1000} onClickCanvas={props.onClickCanvas}>
            <section className={s.menu}>
                {props.isAuth || <WithoutLogin setTypePopup={props.setTypePopup} />}
                {(props.isAuth && props.typeUser === "buyer") && <UsersMenu />}
                {(props.isAuth && props.typeUser === "confectioner") && <ConfectionersMenu />}
            </section>
        </Canvas>
    )
}

export default PopupMenu;