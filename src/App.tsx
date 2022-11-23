import React from 'react';
import Navbar from "./components/navbar/navbar";
import NavElement from "./components/navbar/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'
import MessageWrapper from "./components/messages/messageWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <NavElement text="TAPAHTUMAT" linksTo="/events"/>
        <NavElement text="WHATSAPP" linksTo="/whatsapp"/>
        <NavElement text="PÄÄSIVULLE" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/events" element={<></>}/>
          <Route path="/whatsapp" element={<MessageWrapper/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
