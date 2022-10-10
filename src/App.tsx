import './App.css';
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About';
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path='products' element={<Products />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

/*

3hotele (fajne zakladeczki taby?)
figma design mniej wiecej
semantyka html
podejscie mobile -> desktop

*/