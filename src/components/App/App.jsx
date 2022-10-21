import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';
import Index from '../Index/Index';
import PopupMenuContainer from '../PopupManu/PopupMenuContainer';
import PopupAuth from '../PopupAuth/PopupAuth';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/index' element={<HeaderContainer typePopup={props.typePopup} setTypePopup={props.setTypePopup} />} />
            </Routes>
            <Routes>
                <Route path='/index' element={<Index />} />
            </Routes>

            <PopupMenuContainer isShow={props.typePopup === "menu"} typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <PopupAuth isShow={props.typePopup === "auth" && props.typePopup === "login" && props.typePopup === "registration"}
            typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
        </BrowserRouter>
    );
}

export default App;
