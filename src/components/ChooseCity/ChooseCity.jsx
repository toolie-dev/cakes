import location from "../../assets/icons/location.svg";

import s from "./ChooseCity.module.css";

const ChooseCity = (props) => {
    const buttonClass = (props.isFixedWidth)? s.button : `${s.button} ${s.allWidth}` ;
    return(
        <button className={buttonClass}>
            <div className="img img_20">
                <img src={location} alt="location" />
            </div>
            <div className={s.text}>Вся Україна</div>
        </button>
    )
}

export default ChooseCity;