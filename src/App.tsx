import './App.css';
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/About/About';
import { Navbar } from "./pages/Navbar/Navbar"
import { Home } from './pages/Home/Home';
import { Cookies } from './pages/Cookies/Cookies';
import { Footer } from './pages/Footer/Footer';
import { Contact } from './pages/Contact/Contact';
import { HotelList } from './components/HotelList/HotelList';
import { ErrorPage } from './components/ErrorPage';
import ScrollToTop from './features/ScrollToTop';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='hotels' element={<HotelList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;