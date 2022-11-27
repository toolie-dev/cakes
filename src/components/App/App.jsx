import './App.css';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';
import IndexContainer from '../Index/IndexContainer';
import PopupMenuContainer from '../PopupMenu/PopupMenuContainer';
import Footer from '../Footer/Footer';
import PopupAuthContainer from '../PopupAuth/PopupAuthContainer';
import Desserts from '../Desserts/Desserts';
import Confectioners from '../Confectioners/Confectioners';
import ArticlesContainer from '../Articles/ArticlesContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <div className="wrapper">
                <Routes>
                    <Route path="" element={ <Navigate to="/index" /> } />
                    <Route path="/index" element={<IndexContainer />} />
                    <Route path="/desserts" element={<Desserts />} />
                    <Route path="/confectioners" element={<Confectioners />} />
                    <Route path="/articles" element={<ArticlesContainer />} />
                </Routes>
            </div>
            <Footer />

            <PopupMenuContainer isShow={props.typePopup === "menu"} />
            <PopupAuthContainer isShow={props.typePopup === "auth" && props.typePopup === "login" && props.typePopup === "login-code"
            && props.typePopup === "registration" && props.typePopup === "registration-code"} />
        </BrowserRouter>
    );
}

export default App;