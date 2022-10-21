import arrow_left from "../../../assets/icons/arrow/arrow_left.svg";
import arrow_right from "../../../assets/icons/arrow/arrow_right.svg";

import s from "./ProductSlider.module.css";
import Container from "../../common/Container/Container";
import { NavLink } from "react-router-dom";
import Item from "./Item/Item";
import Slider from "react-slick";
import Arrows from "./Arrows/Arrows";
import { useState } from "react";

const ProductSlider = (props) => {
    const list = props.list.map((item, i) => <Item key={i++} {...item} />);
    const [slider, setSlider] = useState(null);

    const nextSlide = () => {
        slider.slickNext();
    }

    const prevSlide = () => {
        slider.slickPrev();
    }

    var settings = {
        adaptiveHeight: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
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
        ],
        nextArrow: <Arrows />,
        prevArrow: <Arrows />
      };

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
                    <Slider ref={(e) => {setSlider(e)}} className={s.slider} {...settings}>
                        {list}
                        {list}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default ProductSlider;