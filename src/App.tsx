import React from 'react';
import Navbar from "./components/navbar/navbar";
import NavElement from "./components/navbar/navElement";
import './theme/nummarit.css'
import './theme/webteema.css'
import MessageWrapper from "./components/messages/messageWrapper";

function App() {
  return (
    <>
      <Navbar>
        <NavElement text="WHATSAPP" linksTo=""/>
        <NavElement text="PÄÄSIVULLE" linksTo="https://nummenpojat.fi"/>
      </Navbar>
      <MessageWrapper/>
    </>
  );
}

export default App;
