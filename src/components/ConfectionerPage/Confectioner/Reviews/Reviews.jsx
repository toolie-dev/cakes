import s from "./Reviews.module.css";
import Title from "../../../common/Title/Title";
import { MoreGoodies } from "../../../common/Btn/Btns/Btns";
import Pagination from "../../../Pagination/Pagination";

const Reviews = (props) => {
    return(
        <section className={s.reviews}>
            <Title>Відгуки</Title>
            <ul className={s.list}>
                <li className={s.item}>
                    <div className={s.wrapper}>
                        <div className={s.name}>Анна Щедріна</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.order}>Торт “Червоний оксамит”</div>
                    <div className={s.text}>Заказывали на мой День рождения муссовый торт с маракуйей и остались очень довольны. Тортик получился очень вкусный, с приятной кислинкой за счëт маракуйи и невероятно нежной и лëгкой текстурой. Начинка, на мой вкус, просто шикарная: желе маракуйи, бисквит, хрустящий слой и мусс из манго и маракуйи.</div>
                </li>
                <li className={s.item}>
                    <div className={s.wrapper}>
                        <div className={s.name}>Олександр Ольцев</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.order}>Торт весільний з фруктами</div>
                    <div className={s.text}>Супер десерты для дома и хореки. Круассаны  волшебные. Торты, кейки и муссовые десерты - это любовь</div>
                </li>
                <li className={s.item}>
                    <div className={s.wrapper}>
                        <div className={s.name}>Тарас Коломієць</div>
                        <div className={s.date}>15.11.2020</div>
                    </div>
                    <div className={s.order}>Торт для дня народження з квітами, 5 кг</div>
                    <div className={s.text}>Самые вкусные торты и пирожные , сказочные эклеры . В восторге от десертов . Кондитера - волшебницы,  доставка всегда на высшем уровне!!!!! Всей семьёй обожаем Вашу кондитерскую , спасибо за ваш труд и вкуснотищу!!!!</div>
                </li>
            </ul>
            <MoreGoodies />
            <Pagination numberPage={props.numberPage} activePage={props.activePage} setActivePage={ (number) => { props. setActivePage(number, "confectioner") } } />
        </section>
    )
}

export default Reviews;