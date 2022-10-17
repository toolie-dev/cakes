import s from "./Index.module.css"
import Promo from "./Promo/Promo";

const Index = (props) => {
    return(
        <main className={s.main}>
            <Promo />
        </main>
    )
}

export default Index;