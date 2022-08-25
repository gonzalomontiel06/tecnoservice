import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Contact } from './Components/Contact/Contact';
import { HomeView } from './Components/HomeView/HomeView';
import { Main } from './Components/Main/Main';


function App() {
  return (
      <>
      <BrowserRouter>
        <NavBar />
        <HomeView />
        <Main />
        <AboutUs />
        <Routes>
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
