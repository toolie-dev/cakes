import './App.css';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';
import IndexContainer from '../Index/IndexContainer';
import PopupMenuContainer from '../PopupMenu/PopupMenuContainer';
import Footer from '../Footer/Footer';
import PopupAuthContainer from '../PopupAuth/PopupAuthContainer';
import ConfectionersContainer from '../Confectioners/ConfectionersContainer';
import ArticlesContainer from '../Articles/ArticlesContainer';
import DessertsContainer from '../Desserts/DessertsContainer';
import DessertPageContainer from '../DessertPage/DessertPageContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <div className="wrapper">
                <Routes>
                    <Route path="" element={ <Navigate to="/index" /> } />
                    <Route path="/index" element={<IndexContainer />} />
                    <Route path="/desserts" element={<DessertsContainer />} />
                    <Route path="/dessert/:dessertId" element={<DessertPageContainer />} />
                    <Route path="/confectioners" element={<ConfectionersContainer />} />
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