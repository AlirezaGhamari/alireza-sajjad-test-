import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-purple-400 h-[50px] flex  items-center ">
      <ul className="flex ">

        <li className="m-1 p-3 hover:bg-purple-500 rounded-xl hover:text-white">
          <Link to="/home">home</Link>
        </li>
        <li className="m-1 p-3 hover:bg-purple-500 rounded-xl  hover:text-white">
          <Link to="/login">log in</Link>
        </li>
      </ul>
    </div>
  );
}
