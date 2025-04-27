import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-green-500 border-gray-200 px-4 lg:px-6 py-2.5 flex justify-between">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div flex items-center lg:order-2>
            <Link className="bg-amber-950 text-blue-400">Logo</Link>
          </div>
        <ul className="flex justify-between">
          <li>
            <NavLink
            to={'home'}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
              border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            to={'about'}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
              border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
            to={'user'}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
              border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              User
            </NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
}
