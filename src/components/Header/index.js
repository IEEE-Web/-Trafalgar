import React ,{useState} from "react";
import img from "./pic.svg";
import burgerMenuDark from "./darkmenu.svg";
import burgerMenuLight from "./lightmenu.svg";

import {Theme} from "./ThemeButton/index"
export const Header = (props) => {
  const [opened,setOpened]=useState(false)
  return (
    <header className="h-screen lg:h-full" >
      <nav>
        <div className="lg:mr-16 mr-4 lg:ml-32 ml-4 lg:pt-4 pt-2 flex justify-between items-center">
        <h1 className="font-bold">
          <a href="/">
            <svg
              className="inline-block mr-2"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="21.3137"
                cy="20.8992"
                rx="20.7206"
                ry="20.8992"
                fill="#458FF6"
              />
              <path
                d="M20.077 15.3414H14.045V12.5854H29.515V15.3414H23.457V31.0974H20.077V15.3414Z"
                fill="white"
              />
            </svg>
            Trafalgar
          </a>
        </h1>
        <ul className="font-bold lg:flex justify-center items-center">
          <div className="font-bold lg:flex hidden">
            <li className=" pr-2 pl-2">
              <a href="/">Home</a>
            </li>
            <li className="pr-2 pl-2">
              <a href="/">Find a doctor</a>
            </li>
            <li className="pr-2 pl-2">
              <a href="/">Apps</a>
            </li>
            <li className=" pr-2 pl-2">
              <a href="/">Testimonials</a>
            </li>
            <li className=" pr-2 pl-2">
              <a href="/">About us</a>
            </li>
            <li className=" pr-2 pl-2">
              <Theme handleDarkModeTheme={props.handleDarkModeTheme} darkMode={props.darkMode}/>
            </li>
          </div>
          <div>
            <li className="pr-2 pl-2 lg:hidden cursor-pointer">
              <button onClick={()=>{setOpened(!opened)
              }}>
                <img src={props.darkMode?burgerMenuLight:burgerMenuDark} alt="" />
              </button>
            </li>
          </div>
        </ul>
        </div>
        <div className={`w-full font-bold pt-4 shadow-xl	 lg:hidden  ${!opened?"invisible":null}`}>
        <ul>
            <li className=" pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black">
              <a href="/">Home</a>
            </li>
            <hr />
            <li className="pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black">
              <a href="/">Find a doctor</a>
            </li>
            <hr />
            <li className="pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black">
              <a href="/">Apps</a>
            </li>
            <hr />
            <li className=" pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black">
              <a href="/">Testimonials</a>
            </li>
            <hr />
            <li className=" pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black">
              <a href="/">About us</a>
            </li>
            <hr />
            <li className="pr-2 pl-4 cursor-pointer w-full text-gray-500 hover:text-black" onClick={()=>props.handleDarkModeTheme()}>
              <Theme handleDarkModeTheme={props.handleDarkModeTheme} darkMode={props.darkMode}/>
            </li>
        </ul>
        </div>
      </nav>
      <div className=" lg:mt-16 mr-16 lg:ml-32 ml-4 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <h1 className="font-bold text-3xl lg:text-5xl  lg:w-3/4">
            Virtual healthcare for you
          </h1>
          <p className="mt-4 text-gray-500 lg:w-3/4 ">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="rounded-full mt-4 bg-blue-1000 text-white font-bold p-2">
            Consult today
          </button>
        </div>
        <div className="hidden lg:block">
          <img src={img} alt="" />
        </div>
      </div>
    </header>
  );
};
