import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from '../common/Container/Container';
import HeaderContainer from '../Header/HeaderContainer';
import Index from '../Index/Index';
import Auth from '../Auth/Auth';

const App = (props) => {
    return (
        <BrowserRouter>
            <button onClick={ () => { props.toggleAuthState(true) } }>button</button>
            <br/>
            рурр
            {/*
            <HeaderContainer />
            <Routes>
              <Route path='/index' element={<Index />} />
            </Routes>
            */}
            {props.isShowAuth && 
            <div onClick={props.onClickCanvas} className="canvas">
                <Auth toggleAuthState={props.toggleAuthState} />
            </div>}
        </BrowserRouter>
    );
}

export default App;
