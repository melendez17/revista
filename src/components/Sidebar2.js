import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "flowbite";
import profilePicture from "../assets/Profilepicture2.jpg";

const Sidebar = () => {
  return (
    <>
    {/* Navbar superior (Horizontal) */}
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex  items-center justify-between">
            <div class="flex items-center justify-start">
               {/* Boton que abre la sidebar */}
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
               {/* icono de hamburguesa */}
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {/* <a href="https://flowbite.com" class="flex ms-2 md:me-24"> */}
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span class="self-center text-2xl font-bold sm:text-2xl ml-2 sm:ml-4 font-Titles whitespace-nowrap dark:text-white">
                  Revista
                </span>
              {/* </a> */}
            </div>
            
            {/* profile section  */}
            <div class="flex items-center">
              <div class="flex items-center">
                <div>
                  {/* boton con foto de perfil */}
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      class="w-8 h-8 rounded-full"
                      src={profilePicture}
                      alt="Melendez"
                    />
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Andrés Meléndez
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      <a href="mailto:andresmelendezcar@gmail.com">andresmelendezcar@gmail.com</a>
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                    <Link
                            to="/home"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Home
                          </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-00">
          <ul class="space-y-2 font-medium">
            {SidebarData.map((item, index) => (
              <li key={index}>
                {/* Si quiero cambiar a que este menu funcione como link tambien debo cambiar button por link y descomentar el to= */}
                <button 
                  type="button"
                  // to={item.path}
                  className="flex items-center justify-between w-full p-2 px-4 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls={`dropdown-example-${index}`}
                  data-collapse-toggle={`dropdown-example-${index}`}
                >
                  {/* {item.icon} */}
                  <span className="font-semibold font-Titles">{item.title}</span>
                  {item.subNav ? (
                    <svg
                      className="w-3 h-3 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  ) : null}
                </button>
                  {/* </Link> */}
                {item.subNav ? (
                  <ul
                    id={`dropdown-example-${index}`}
                    className="hidden py-2 space-y-2"
                  >
                    {item.subNav &&
                      item.subNav.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            <span className="">{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
};

export default Sidebar;
