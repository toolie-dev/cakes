import arrow_left from "../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../assets/icons/arrow/arrow_right.svg";

import s from "./SlickSlider.module.css";
import Container from "../common/Container/Container";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useState } from "react";
import Img from "../common/Img/Img";
import Title from "../common/Title/Title";
import Btn from "../common/Btn/Btn";
import classNames from "classnames";
import Arrows from "../common/Arrows/Arrows";

const SlickSlider = (props) => {
    const [slider, setSlider] = useState(null);

    const nextSlide = () => {
        slider.slickNext();
    }

    const prevSlide = () => {
        slider.slickPrev();
    }

    let settings;

    if(!props.settings){
        settings = {
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 762,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
    }else{
        settings = props.settings;
    }

    const SlickSlider = (
        <>
            <div className={s.wrapper}>
                <Title isMini={props.isMini} otherClass="slider">{props.title}</Title>
                <div className={s.wrap}>
                    <Btn to="/2" backgroundColor="grey">Переглянути всі</Btn>
                    <div className={s.buttons}>
                        <button onClick={prevSlide}>
                            <Img height={24} src={arrow_left} alt="arrow" />
                        </button>
                        <button onClick={nextSlide}>
                            <Img height={24} src={arrow_right} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.slider}>
                <Slider {...{
                        slidesToShow: 5,
                        adaptiveHeight: false,
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        swipeToSlide: true,
                        nextArrow: <Arrows />,
                        prevArrow: <Arrows />,
                        ...props.settings
                    }} ref={(e) => {setSlider(e)}} className={s.slider} {...settings}>
                    {props.items}
                    {props.items}
                </Slider>
            </div>
        </>
    )
    
    if(props.isMini) return <div className={classNames(props.className, s.mini)}>{SlickSlider}</div>
    else return(
        <section className={props.isMini && s.mini}>
            <Container>{SlickSlider}</Container>
        </section>
    )
}

export default SlickSlider;