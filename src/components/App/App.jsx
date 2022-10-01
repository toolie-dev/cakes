import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from '../common/Container/Container';
import HeaderContainer from '../Header/HeaderContainer';
import Index from '../Index/Index';
import PopupAuthContainer from '../PopupAuth/PopupAuthContainer';

const App = (props) => {
    return (
        <BrowserRouter>
            <button onClick={ () => { props.setTypePopup("login") } }>button</button>
            <br/>
            {/*
            <HeaderContainer />
            <Routes>
              <Route path='/index' element={<Index />} />
            </Routes>
            */}
            {props.typePopup && <PopupAuthContainer typePopup={props.typePopup} setTypePopup={props.setTypePopup} onClickCanvas={props.onClickCanvas} />}
        </BrowserRouter>
    );
}

export default App;
