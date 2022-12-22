import plus from "../../../../assets/icons/plus_red.svg";
import arrow_left from "../../../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../../../assets/icons/arrow/arrow_right.svg";

import Btn from "../../../common/Btn/Btn";
import Img from "../../../common/Img/Img";
import Title from "../../../common/Title/Title";
import s from "./Reviews.module.css";

const Reviews = (props) => {
    return(
        <div className={s.reviews}>
            <div className={s.wrap}>
                <Title>Відгуки</Title>
                <Btn backgroundColor="pink" isFlex={true}>
                    <Img src={plus} alt="plus" height={24} />
                    <div className={s.text}>Додати відгук</div>
                </Btn>
            </div>
            <span>
            <div className={s.wrapper}>
                <span className={s.btn}>
                    <Btn isAllWidth={true} to="/1" backgroundColor="grey">Переглянути всі</Btn>
                </span>
                <div className={s.btns}>
                    <button>
                        <Img height={24} src={arrow_left} alt="arrow" />
                    </button>
                    <button>
                        <Img height={24} src={arrow_right} alt="arrow" />
                    </button>
                </div>
            </div>
            </span>
            <div className={s.slider}>
                <div className={s.item}>
                    <div className={s.info}>
                        <div className={s.name}>Анна Щедріна</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.review}>Заказывали на мой День рождения муссовый торт с маракуйей и остались очень довольны. Тортик получился очень вкусный, с приятной кислинкой за счëт маракуйи и невероятно нежной и лëгкой текстурой. Начинка, на мой вкус, просто шикарная: желе маракуйи, бисквит, хрустящий слой и мусс из манго и маракуйи.</div>
                </div>
                <div className={s.item}>
                    <div className={s.info}>
                        <div className={s.name}>Олександр Ольцев</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.review}>Супер десерты для дома и хореки. Круассаны  волшебные. Торты, кейки и муссовые десерты - это любовь</div>
                </div>
                <div className={s.item}>
                    <div className={s.info}>
                        <div className={s.name}>Тарас Коломієць</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.review}>Самые вкусные торты и пирожные , сказочные эклеры . В восторге от десертов . Кондитера - волшебницы,  доставка всегда на высшем уровне!!!!! Всей семьёй обожаем Вашу кондитерскую , спасибо за ваш труд и вкуснотищу!!!!</div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;