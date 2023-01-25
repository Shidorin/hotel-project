import './App.css';
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About';
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from './components/Home/Home';
import { Cookies } from './components/Cookies/Cookies';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        {/* <Route path='products' element={<Products />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;

/*

3hotele (fajne zakladeczki taby?)
semantyka html
podejscie mobile -> desktop

*/

/*  TODO & FIX
  navbar for mobile hamburger/anilist?
  after clicking diffrent navElement changes position
  style filter hotels
  one more component on /home
  zmiana Navbar - oddzielenie img od nav, zeby w contact byl tylko nav
  footer
  nav pages
  single hotel page
  reservation
  map intergration?

  contact maybe 2 labels: one for transform over box, 2nd for inside box
*/