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

const Promo = (props) => {
    return(
        <section className={s.promo}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.wrap}>
                        <div className={s.info}>
                            <h1 className="title title_main">Пошукаємо щось смачненького?</h1>
                            <h2 className="subtitle subtitle_main">Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна було замовити ще легше</h2>
                        </div>
                        <div className={s.search}>
                            <PromoForm />
                            <div className={s.popular}>
                                <button className={s.item}>На день народження</button>
                                <button className={s.item}>З фруктами</button>
                                <button className={s.item}>Патріотичні</button>
                                <button className={s.item}>Для чоловіків</button>
                                <button className={s.item}>Для весілля</button>
                                <button className={s.item}>Без глютену</button>
                                <button className={s.item}>Веганські</button>
                                <button className={s.item}>Без цукру</button>
                                <button className={s.item}>Для дівчат</button>
                                <button className={s.item}>З квітами</button>
                                <button className={s.other}>
                                    <div className={s.text}>Інші варіанти</div>
                                    <div className="img img_6">
                                        <img src={arrowBottom} alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className={s.slider}>
                            <div className={s.arrows}>
                                <button className="img img_24">
                                    <img src={arrowLeft} alt="arrow" />
                                </button>
                                <button className="img img_24">
                                    <img src={arrowRight} alt="arrow" />
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
                        <div className={`${s.img} ${s.big}`}>
                            <img src={img_3} alt="img" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Promo;