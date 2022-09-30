import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Contact } from './Components/Contact/Contact';
import { HomeView } from './Components/HomeView/HomeView';
import { Main } from './Components/Main/Main';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
      <>
      <BrowserRouter>
        {/* <Routes>
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes> */}
        <NavBar />
        <HomeView />
        <Main />
        <AboutUs />
        <Contact />
        <Footer />
      </BrowserRouter>
      </>
  );
}

export default App;
