import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from '../common/Container/Container';
import HeaderContainer from '../Header/HeaderContainer';
import Index from '../Index/Index';
import Auth from '../Auth/Auth';

const App = () => {
    return (
        <BrowserRouter>
            рурр
            {/*
            <HeaderContainer />
            <Routes>
              <Route path='/index' element={<Index />} />
            </Routes>
            */}
            <Auth />
        </BrowserRouter>
    );
}

export default App;
