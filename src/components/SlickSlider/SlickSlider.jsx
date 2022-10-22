import arrow_left from "../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../assets/icons/arrow/arrow_right.svg";

import s from "./SlickSlider.module.css";
import Container from "../common/Container/Container";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import Arrows from "./Arrows/Arrows";
import { useState } from "react";

const ProductSlider = (props) => {
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
            slidesToShow: 5,
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

    return(
        <section className={s.product}>
            <Container>
                <div className={s.wrapper}>
                    <h1 className="title title_product">{props.title}</h1>
                    <div className={s.wrap}>
                        <NavLink className="btn btn_grey">Переглянути всі</NavLink>
                        <div className={s.buttons}>
                            <button onClick={ () => { prevSlide() } } className="img img_24">
                                <img src={arrow_left} alt="arrow" />
                            </button>
                            <button onClick={ () => { nextSlide() } } className="img img_24">
                                <img src={arrow_right} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={s.slider}>
                    <Slider settings = {{
                            adaptiveHeight: true,
                            dots: false,
                            infinite: true,
                            speed: 500,
                            slidesToScroll: 1,
                            initialSlide: 0,
                            nextArrow: <Arrows />,
                            prevArrow: <Arrows />,
                            ...props.settings
                        }} ref={(e) => {setSlider(e)}} className={s.slider} {...settings}>
                        {props.items}
                        {props.items}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default ProductSlider;