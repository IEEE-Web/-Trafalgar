import React from "react";
import img from "./pic.svg";

export const Header = () => {
  return (
    <header>
      <nav className="mr-16 ml-32 mt-4 flex justify-between items-center">
        <h1 className="font-bold">
          <a href="#">
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
        <ul className="font-bold">
          <li className="inline-block pr-2 pl-2">
            <a href="#">Home</a>
          </li>
          <li className="inline-block pr-2 pl-2">
            <a href="#">Find a doctor</a>
          </li>
          <li className="inline-block pr-2 pl-2">
            <a href="#">Apps</a>
          </li>
          <li className="inline-block pr-2 pl-2">
            <a href="#">Testimonials</a>
          </li>
          <li className="inline-block pr-2 pl-2">
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <div className="mt-16 mr-16 ml-32 grid grid-cols-2 items-center">
        <div>
          <h1 className="font-bold text-4xl">Virtual healthcare<br/> for you</h1>
          <p className="mt-4 text-gray-500">
            Trafalgar provides progressive, and affordable<br /> healthcare,
            accessible on mobile and<br/> online for everyone
          </p>
          <button className="rounded-full mt-4 bg-blue-500 text-white font-bold p-2">Consult today</button>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
      </div>
    </header>
  );
};
