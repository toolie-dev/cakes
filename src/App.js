import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Container from './components/common/Container/Container';
import HeaderContainer from './components/Header/HeaderContainer';
import Index from './components/Index/Index';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <HeaderContainer />
        <Routes>
          <Route path='/index' element={<Index />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
