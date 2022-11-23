import React from "react";
import '../../theme/nummarit.css'

export default function Navbar({children}: any) {
  return (
    <header>
      <div className="h-[120px] bg-partionsininen py-[20px] px-[40px] flex ">
        <a href="/" className="mr-auto">
          <img
            src="https://nummenpojat.kuvat.fi/kuvat/Kuvituskuvaa%20ja%20grafiikkaa/Graafinen%20ohje%20ja%20br%C3%A4ndimateriaalit/Lippukunnan%20logot/HN%20ovaali%20logo.png?img=img4k"
            className="h-[80px] w-[160px]"/>
        </a>
        <nav className="hidden md:flex">
          <ul className="h-full flex place-items-center">
            {
              children
            }
          </ul>
        </nav>
        <nav className="md:hidden place-items-center flex">
          <button>
            <img width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Octicons-three-bars.svg/1200px-Octicons-three-bars.svg.png"/>
          </button>
        </nav>
      </div>
    </header>
  );
}