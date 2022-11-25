import React from 'react';
import Navbar from "./components/navbar/navbar";
import NavElement from "./components/navbar/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'
import MessageWrapper from "./components/whatsapp/messages/messageWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QrWrapper from "./components/whatsapp/qrWrapper";

function App() {
  return (
    <>
      <Navbar>
        <NavElement text="TAPAHTUMAT" linksTo="/events"/>
        <NavElement text="LUO WHATSAPP ISTUNTO" linksTo="/whatsapp/new"/>
        <NavElement text="LÄHETÄ VIESTI" linksTo="/whatsapp/send"/>
        <NavElement text="PÄÄSIVULLE" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/events" element={<></>}/>
          <Route path="/whatsapp/new" element={<QrWrapper/>}/>
          <Route path="/whatsapp/send" element={<MessageWrapper/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
