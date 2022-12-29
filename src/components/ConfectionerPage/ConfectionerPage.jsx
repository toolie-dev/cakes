import { useState } from "react";
import Confectioner from "./Confectioner/Confectioner";
import GoodsContainer from "./Goods/GoodsContainer";

const ConfectionerPage = (props) => {
    const [typePage, setTypePage] = useState("goods");
    return(
        <>
            {
                typePage === "goods"?
                <GoodsContainer setTypePage={setTypePage} />: <Confectioner setTypePage={setTypePage} />
            }
        </>
    )
}

export default ConfectionerPage;