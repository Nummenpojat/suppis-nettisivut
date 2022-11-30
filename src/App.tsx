import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar/navbar";
import NavElement from "./components/navbar/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'
import MessageWrapper from "./pages/message";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Qr from "./pages/qr";
import Main from "./pages/main";
import Login from "./pages/login";
import {onAuthStateChanged, User, getIdTokenResult} from "firebase/auth";
import {auth, getIdTokenForApiCall, signOut, verifyClaim} from "./firebaseConfig";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user == null && window.location.pathname !== "/login") {
          location.replace("/login")
      }
      verifyClaim(user, "admin");
    })
  }, [])

  return (
    <>
      <Navbar>
        <NavElement text="TAPAHTUMAT" linksTo="/events"/>
        <NavElement text="LUO WHATSAPP ISTUNTO" linksTo="/whatsapp/new"/>
        <NavElement text="LÄHETÄ VIESTI" linksTo="/whatsapp/send"/>
        <NavElement text="PROFIILI" linksTo="/login"/>
        <NavElement text="PÄÄSIVULLE" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/events" element={<></>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/whatsapp/new" element={<Qr/>}/>
          <Route path="/whatsapp/send" element={<MessageWrapper/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
