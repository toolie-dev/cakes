import photo from "../../../../assets/img/Confectioners/photo_1.png";

import s from "./User.module.css";
import Btn from "../../../common/Btn/Btn"

const User = (props) => {
    return(
        <section className={s.user}>
            <div className={s.image}>
                <img src={photo} alt="photo" />
            </div>
            <div className={s.info}>
                <div className={s.city}>Київ</div>
                <div className={s.name}>Інна Пономаренко</div>
            </div>
            <div className={s.btns}>
                <Btn backgroundColor="red" otherClass="confectionerPage">Переглянути контакти</Btn>
            </div>
            <div className={s.desc}>
                <p>Уже более 10 лет совершенствую свои навыки.</p>
                <p>С 2011 по 2017 — основатель бренда Марципан в Воронеже со штатом 35 человек. Я была шеф кондитером 3 ресторанов. А также, одним из первых кондитеров, который ввел в моду кенди бары в Черноземье и совместно с партнерами придумали коробки цветы и макарон — идея которая разлетелась по всему миру.</p>
                <p>Также, я и моя команда занимаемся организацией и запуском кондитерских производств.</p>
                <p>У меня большой опыт за плечами. За 10 лет работы я создала тысячи и тысячи тортов.</p>
                <p>Пройдя большой путь от домашнего кондитера до бренд-шефа, я с большой радостью и уверенностью делюсь с учениками своими знаниями от выпечки тортов и пирожных до масштабных свадебных тортов.</p>
            </div>
        </section>
    )
}

export default User;