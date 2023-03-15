
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import React, {useState, useEffect, useRef} from 'react'
import logo from "./images/logo.png"
import {Link} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div>
          <div className="flex md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
      <button fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}>
      <i className="cursor-pointer" class="fas fa-bars"></i>
      </button>
      <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to="/">
            <img src={logo} alt="user-pic" className="w-9 h-9 rounded-full " />
          </Link>
    </div>
    {toggleSidebar && (
        <div className="fixed w-4/5 bg-black h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
          <button className="cursor-pointer" fontSize={30}  onClick={() => setToggleSidebar(false)}>
          <i class="fas fa-times"></i>
      </button>

        </div>
          <Sidebar closeToggle={setToggleSidebar}  />
        </div>
        )}
    </div>
    <div className="flex-1 h-screen overflow-y-scroll">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      </Routes>

      </div>

    </div>

    </div>
  );
}

export default App;

// <Route path="/" element={<Home />}  />
//         <Route path="/login" element={<Login />}  />
