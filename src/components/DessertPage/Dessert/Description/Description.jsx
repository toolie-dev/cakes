import favorite from "../../../../assets/icons/favorite.svg";

import Btn from "../../../common/Btn/Btn";
import Img from "../../../common/Img/Img";
import s from "./Description.module.css";

const Description = (props) => {
    return(
        <>
            <div className={s.title}>
                <div className={s.tags}>
                    <div className={s.elem}>Для дівчат</div>
                    <div className={s.elem}>На день народження</div>
                    <div className={s.elem}>Класичні рецепти</div>
                </div>
                <div className={s.name}>Торт “Червоний оксамит”</div>
            </div>
            <div className={s.desc}>
                <div className={s.cost}>670 грн</div>
                <ul className={s.info}>
                    <li className={s.item}>2 кг</li>
                    <li className={s.item}>Начинка: червоний оксамит</li>
                    <li className={s.item}>Прикраси з мастики</li>
                </ul>
                <div className={s.text}>Цей торт особливо актуальний до Дня святого Валентина. Ви тільки подивіться, який він пристрасний!) І смачний звичайно. І з приготуванням впорається будь-хто! Загалом все, як ми любимо! Тому цей «Червоний оксамит» до приготування обов'язковий. Щоб отримати такий насичений червоний колір, використовуйте або сухі індійські барвники (Roha), або гелевий Americolor Red Red.</div>
                <div className={s.btns}>
                    <Btn otherClass="dessert" backgroundColor="red">Обрати параметри</Btn>
                    <Btn otherClass="dessert" backgroundColor="transparent">Переглянути контакти</Btn>
                    <Btn otherClass="favorite" backgroundColor="pinkTransparent"><Img src={favorite} alt="favorite" height={24} /></Btn>
                </div>
            </div>
        </>
    )
}

export default Description;