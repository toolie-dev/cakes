import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import HeaderContainer from '../Header/HeaderContainer';
import Index from '../Index/Index';
import PopupMenu from '../PopupManu/PopupMenu';
import PopupAuth from '../PopupAuth/PopupAuth';

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/index' element={<HeaderContainer />} />
            </Routes>
            <Routes>
                <Route path='/index' element={<Index />} />
            </Routes>
            <button onClick={ () => { props.setTypePopup("auth") } }>button</button><br />
            <button onClick={ () => { props.setTypePopup("menu") } }>button2</button>

            <PopupMenu isShow={props.typePopup === "menu"} typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
            <PopupAuth isShow={props.typePopup === "auth" && props.typePopup === "login" && props.typePopup === "registration"}
            typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />
        </BrowserRouter>
    );
}

export default App;
