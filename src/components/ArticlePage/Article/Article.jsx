import photo from "../../../assets/img/Articles/photo_2.png";
import point_left from "../../../assets/icons/arrow/point_left.svg";
import point_right from "../../../assets/icons/arrow/point_right.svg";
import photo_1 from "../../../assets/img/Articles/photo_1.png";
import photo_5 from "../../../assets/img/Articles/photo_5.png";
import photo_3 from "../../../assets/img/Articles/photo_3.png";
import photo_4 from "../../../assets/img/Articles/photo_4.png";

import s from "./Article.module.css";
import Container from "../../common/Container/Container";
import Title from "../../common/Title/Title";
import Img from "../../common/Img/Img";
import Slider from "react-slick";
import Arrows from "../../common/Arrows/Arrows";
import { useState } from "react";

const Article = (props) => {
    const [slider, setSlider] = useState(null);

    const nextSlide = () => {
        slider.slickNext();
    }

    const prevSlide = () => {
        slider.slickPrev();
    }

    return(
        <section>
            <Container isMini={true}>
                <div className={s.wrapper}>
                    <div className={s.image}>
                        <img src={photo} alt="photo" />
                    </div>
                    <div className={s.title}>
                        <Title>Як приготувати справжній французький круасан</Title>
                    </div>
                    <div className={s.info}>
                        <p className={s.paragraph}>Круасани на сніданок – це класика. Що може бути смачніше за свіжий гарячий невагомий круасан?</p>
                        <p className={s.paragraph}>Гурман підготував для тебе рецепт справжнього французького круасана.</p>
                        <p className={s.paragraph}>ДИВИСЬ: Оладки на сніданок: ТОП-5 кращих рецептів</p>
                        <p className={s.paragraph}>Рецепт круасана</p>
                        <ul className={s.list}>
                            <li className={s.li}>20 г свіжих дріжджів (або 5 гр сухих)</li>
                            <li className={s.li}>500 г білого хлібного борошна</li>
                            <li className={s.li}>10 г солі</li>
                            <li className={s.li}>50 г цукру</li>
                            <li className={s.li}>1 велике яйце</li>
                            <li className={s.li}>125 г холодного молока</li>
                            <li className={s.li}>125 г води</li>
                            <li className={s.li}>200 г несолоного вершкового масла (з холодильника)</li>
                            <li className={s.li}>1 яйце, збите з щіпкою солі, для глазурі</li>
                        </ul>
                    </div>
                    <div className={s.info}>
                        <p className={s.paragraph}>Як приготувати:</p>
                        <p className={s.paragraph}>Добре розітри дріжджі в борошні, додай сіль і цукор.</p>
                        <p className={s.paragraph}>Слідом додай яйце, молоко та воду - ретельно перемішай до однорідної маси й виміси тісто 3-4 хвилини.</p>
                        <p className={s.paragraph}>Сформуй кулю і зроби хрестоподібний надріз зверху; злегка присип форму для тіста борошном і відправ у неї тісто не менше, ніж на 2 години, а краще на всю ніч (12 годин) постав форму в холодильник, накривши її плівкою.</p>
                    </div>
                    <div className={s.info}>
                        <p className={s.paragraph}>Посипавши злегка робоче місце борошном, виклади на нього виросле  тісто. Розгорни його в місці надрізу в 4 сторони й злегка розкачай. Намагайся витримати квадратну форму.</p>
                        <p className={s.paragraph}>Розгорни тісто ромбом і в його середину виклади вершкове масло товщиною близько 1 см. Масло попередньо розкачай на папері від упаковки масла, накривши плівкою.</p>
                        <p className={s.paragraph}>Закрий масло рештою тіста з боків ромба та починай розгортати до 60-70 см, звертаючи увагу на товщину шару - вона повинна бути рівномірною по всій площі. За час розкочування тіста підніми й злегка повертай (не перевертаючи) його кілька разів.</p>
                        <p className={s.paragraph}>Склади тісто в три шари, зробивши позначку на верхньому шарі. Поклади тісто в пакет і відправ його на 20-30 хвилин у холодильник.</p>
                        <p className={s.paragraph}>Діставши тісто з холодильника, виклади його позначкою догори і короткою стороною до себе. Розкачай у прямокутник і знову склади його в три рази; відправ на відпочинок у холодильник на 20-30 хвилин. Повторюємо процедуру ще один раз – загалом 3 рази!</p>
                        <p className={s.paragraph}>Після третьої "заморозки" розкачай тісто в прямокутник 30х75 см і завтовшки 4 мм.</p>
                        <p className={s.paragraph}>Гострим ножем підрівняй краї, шар розділи на 2 частини уздовж і почни вирізати трикутники розміром 15х15х9 см. Основу надріж, щоб при випічці круасан вигнувся і набув своєї знаменитої форми.</p>
                        <p className={s.paragraph}>Формуй круасан, починаючи скручувати його з основи. Глазуруй круасан яєчною сумішшю з сіллю та дай підійти 2 години. Намаж ще раз глазур'ю круасан. Намагайся змазувати круасан тільки по верхньому шару, не чіпаючи листкових боків, щоб уникнути їх склеювання.</p>
                        <p className={s.paragraph}>Розігрій духовку до 220-230 градусів за Цельсієм.</p>
                        <p className={s.paragraph}>Випікай круасан 18-20 хвилин до золотавого кольору. Остуди на решітці.</p>
                        <p className={s.paragraph}>Смачного!</p>
                    </div>
                </div>
                <div className={s.slider}>
                    <div className={s.btns}>
                        <button onClick={prevSlide} className={s.btn}>
                            <Img alt="arrow" src={point_left} height={24} />
                            <div className={s.text}>
                                <span className={s.long}>Попередня стаття</span>
                                <span className={s.short}>Попередня</span>
                            </div>
                        </button>
                        <button onClick={nextSlide} className={s.btn}>
                            <div className={s.text}>
                                <span className={s.long}>Наступна стаття</span>
                                <span className={s.short}>Наступна</span>
                            </div>
                            <Img alt="arrow" src={point_right} height={24} />
                        </button>
                    </div>
                    <Slider {...{
                        slidesToShow: 2,
                        adaptiveHeight: false,
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        swipeToSlide: true,
                        nextArrow: <Arrows />,
                        prevArrow: <Arrows />,
                        responsive: [
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                }
                            }
                        ]
                    }} ref={(e) => {setSlider(e)}} className={s.carrousel}>
                    <div className={s.elem}>
                        <div className={s.item}>
                            <div className={s.img}>
                                <img src={photo_1} alt="photo" />
                            </div>
                            <div className={s.desc}>Кращі кондитерські Києва</div>
                        </div>
                    </div>
                    <div className={s.elem}>
                        <div className={s.item}>
                            <div className={s.img}>
                                <img src={photo_5} alt="photo" />
                            </div>
                            <div className={s.desc}>Кращі кондитерські Києва</div>
                        </div>
                    </div>
                    <div className={s.elem}>
                        <div className={s.item}>
                            <div className={s.img}>
                                <img src={photo_3} alt="photo" />
                            </div>
                            <div className={s.desc}>Кращі кондитерські Києва</div>
                        </div>
                    </div>
                    <div className={s.elem}>
                        <div className={s.item}>
                            <div className={s.img}>
                                <img src={photo_4} alt="photo" />
                            </div>
                            <div className={s.desc}>Кращі кондитерські Києва</div>
                        </div>
                    </div>
                </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Article;
