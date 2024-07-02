import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-100 ">
        <ul className="flex">
          <li className="">
            <Link to="/login">log in</Link>
          </li>

          <li>
            <Link to="/admin">admin</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
    </div>
  );
}
