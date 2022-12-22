import photo_1 from "../../../../assets/img/Goods/Pies/1/photo_1.png";
import photo_2 from "../../../../assets/img/Goods/Pies/1/photo_2.png";
import photo_3 from "../../../../assets/img/Goods/Pies/1/photo_3.png";
import photo_4 from "../../../../assets/img/Goods/Pies/1/photo_4.png";
import photo_5 from "../../../../assets/img/Goods/Pies/1/photo_5.png";
import arrow_left from "../../../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../../../assets/icons/arrow/arrow_right.svg";

import Arrows from "../../../common/Arrows/Arrows";
import s from "./Photos.module.css";
import { useState } from "react";
import Slider from "react-slick";
import Img from "../../../common/Img/Img";
import classNames from "classnames";

const Photos = (props) => {
    const [slider, setSlider] = useState(null);

    const nextSlide = () => {
        slider.slickNext();
    }

    const prevSlide = () => {
        slider.slickPrev();
    }
    
    return(
        <>
        <div className={s.images}>
            <div className={s.others}>
                <button className={classNames(s.btn, s.prev)} onClick={prevSlide}>
                    <span><Img src={arrow_left} alt="arrow" height={24} /></span>
                </button>
                <Slider {...{
                        slidesToShow: 4,
                        adaptiveHeight: false,
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        nextArrow: <Arrows />,
                        prevArrow: <Arrows />,
                        vertical: true,
                        verticalSwiping: true,
                        swipeToSlide: true,
                    }} ref={(e) => {setSlider(e)}} className={classNames(s.slider, s.mini)}>
                    <div className={s.item}>
                        <img src={photo_1} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_2} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_3} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_4} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_5} alt="photo" />
                    </div>
                </Slider>
                <Slider {...{
                    slidesToShow: 2,
                    adaptiveHeight: false,
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    nextArrow: <Arrows />,
                    prevArrow: <Arrows />,
                    swipeToSlide: true,
                    responsive: [
                        {
                            breakpoint: 425,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                }} className={classNames(s.slider, s.big)}>
                    <div className={s.item}>
                        <img src={photo_1} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_2} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_3} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_4} alt="photo" />
                    </div>
                    <div className={s.item}>
                        <img src={photo_5} alt="photo" />
                    </div>
                </Slider>
                <button className={classNames(s.btn, s.next)} onClick={nextSlide}>
                    <span><Img src={arrow_right} alt="arrow" height={24} /></span>
                </button>
            </div>
            <div className={s.main}>
                <img src={photo_1} alt="photo" />
            </div>
        </div>
        </>
    )
}

export default Photos;