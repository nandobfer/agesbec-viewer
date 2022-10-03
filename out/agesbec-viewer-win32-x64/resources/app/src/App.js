import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainContainer } from './components/MainContainer';
import { Acessos } from './pages/Acessos';
import { Home } from './pages/Home';
import { Visitantes } from './pages/Visitantes';

function App() {
  return (
    <MainContainer>
        <BrowserRouter>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path='/acessos' element={<Acessos />} />
                    <Route path='/visitantes' element={<Visitantes />} />
            </Routes>
        </BrowserRouter>
    </MainContainer>
  );
}

export default App;
