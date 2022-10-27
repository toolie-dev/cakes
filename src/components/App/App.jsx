import './App.css';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';
import IndexContainer from '../Index/IndexContainer';
import PopupMenuContainer from '../PopupMenu/PopupMenuContainer';
import PopupAuth from '../PopupAuth/PopupAuth';
import Footer from '../Footer/Footer';

const App = (props) => {
    return (
        <BrowserRouter>
            <HeaderContainer typePopup={props.typePopup} setTypePopup={props.setTypePopup} />
            <Routes>
                <Route path="" element={ <Navigate to="/index" /> } />
                <Route path="/index" element={<IndexContainer setTypePopup={props.setTypePopup} />} />
            </Routes>
            <Footer />

            <PopupMenuContainer isShow={props.typePopup === "menu"} typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <PopupAuth isShow={props.typePopup === "auth" && props.typePopup === "login" && props.typePopup === "login-code" && props.typePopup === "registration" && props.typePopup === "registration-code"}
            typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
        </BrowserRouter>
    );
}

export default App;