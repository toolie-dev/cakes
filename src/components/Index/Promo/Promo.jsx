import photo_1 from "../../../assets/img/PromoSubspeciesPhoto/photo_1.png";
import photo_2 from "../../../assets/img/PromoSubspeciesPhoto/photo_2.png";
import photo_3 from "../../../assets/img/PromoSubspeciesPhoto/photo_3.png";
import photo_4 from "../../../assets/img/PromoSubspeciesPhoto/photo_4.png";
import photo_5 from "../../../assets/img/PromoSubspeciesPhoto/photo_5.png";

import img_1 from "../../../assets/img/PromoImg/img_1.png";
import img_2 from "../../../assets/img/PromoImg/img_2.png";
import img_3 from "../../../assets/img/PromoImg/img_3.png";

import arrowBottom from "../../../assets/icons/arrow/arrow_button_red.svg";
import arrowLeft from "../../../assets/icons/arrow/arrow_left.svg";
import arrowRight from "../../../assets/icons/arrow/arrow_right.svg";

import Container from "../../common/Container/Container";
import s from "./Promo.module.css";
import SubspeciesCard from "../SubspeciesCard/SubspeciesCard";
import PromoForm from "./PromoForm/PromoForm";
import Img from "../../common/Img/Img";
import Title from "../../common/Title/Title";
import Subtitle from "../../common/Subtitle/Subtitle";
import Btn from "../../common/Btn/Btn";
import classNames from "classnames";

const Promo = (props) => {
    return(
        <section className={s.promo}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <div className={s.info}>
                            <Title otherClass="main">Пошукаємо щось смачненького?</Title>
                            <Subtitle otherClass="main">Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше</Subtitle>
                        </div>
                        <div className={s.search}>
                            <PromoForm />
                            <div className={s.popular}>
                                <Btn otherClass="tag" backgroundColor="pink">На день народження</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">З фруктами</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Патріотичні</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Для чоловіків</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Для весілля</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Без глютену</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Веганські</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Без цукру</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">Для дівчат</Btn>
                                <Btn otherClass="tag" backgroundColor="pink">З квітами</Btn>
                                <button className={s.other}>
                                    <div className={s.text}>Інші варіанти</div>
                                    <Img height={6} src={arrowBottom} alt="arrow" />
                                </button>
                            </div>
                        </div>
                        <div className={s.slider}>
                            <div className={s.arrows}>
                                <button>
                                    <Img height={24} src={arrowLeft} alt="arrow" />
                                </button>
                                <button>
                                    <Img height={24} src={arrowRight} alt="arrow" />
                                </button>
                            </div>
                            <div className={s.carrousel}>
                                <SubspeciesCard src={photo_1} name="Торти" />
                                <SubspeciesCard src={photo_2} name="Цукерки" />
                                <SubspeciesCard src={photo_3} name="Капкейки" />
                                <SubspeciesCard src={photo_4} name="Макаруни" />
                                <SubspeciesCard src={photo_5} name="Печиво" />
                            </div>
                        </div>
                    </div>
                    <div className={s.images}>
                        <div className={s.img}>
                            <img src={img_1} alt="img" />
                        </div>
                        <div className={s.img}>
                            <img src={img_2} alt="img" />
                        </div>
                        <div className={classNames(s.img, s.big)}>
                            <img src={img_3} alt="img" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Promo;