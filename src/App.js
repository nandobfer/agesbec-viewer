import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainContainer } from './components/MainContainer';
import { Home } from './pages/Home';

function App() {
  return (
    <MainContainer>
        <BrowserRouter>
            <Routes>
                    <Route index element={<Home />} />
                    {/* <Route path='/perfil' element={<Perfil />} /> */}
            </Routes>
        </BrowserRouter>
    </MainContainer>
  );
}

export default App;
