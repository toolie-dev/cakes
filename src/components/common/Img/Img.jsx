import s from "./Img.module.css";
import classNames from "classnames";

const Img = ({src, alt, height, ...restProps}) => {
    return(
        <div className={classNames(s.img, s[`height${height}`])}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Img;