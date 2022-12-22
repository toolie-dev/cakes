import photo from "../../../../assets/img/Confectioners/photo_1.png";
import Btn from "../../../common/Btn/Btn";

import s from "./User.module.css";
//without description
const User = (props) => {
    return(
        <div>
            <div className={s.user}>
                <div className={s.image}>
                    <img src={photo} alt="photo" />
                </div>
                <div className={s.wrap}>
                    <div className={s.name}>Інна Пономаренко</div>
                    <div className={s.city}>Київ</div>
                </div>
                <div>
                    <div className={s.btn}>
                        <Btn to="/confectioner/1" otherClass="dassertPage" backgroundColor="yellow" >Перейти на сторінку</Btn>
                    </div>
                </div>
                <div className={s.tags}>
                    <div className={s.item}>Торти</div>
                    <div className={s.item}>Цукерки</div>
                    <div className={s.item}>Печиво</div>
                    <div className={s.item}>Капкейки</div>
                    <div className={s.item}>Макаруни</div>
                </div>
                <div className={s.desc}>
                    <p className={s.paragraph}>Уже более 10 лет совершенствую свои навыки.</p>
                    <p className={s.paragraph}>С 2011 по 2017 — основатель бренда Марципан в Воронеже со штатом 35 человек. Я была шеф кондитером 3 ресторанов. А также, одним из первых кондитеров, который ввел в моду кенди бары в Черноземье и совместно с партнерами придумали коробки цветы и макарон — идея которая разлетелась по всему миру.</p>
                    <p className={s.paragraph}>Также, я и моя команда занимаемся организацией и запуском кондитерских производств.</p>
                </div>
            </div>
        </div>
    )
}

export default User;