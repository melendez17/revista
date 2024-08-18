import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "flowbite";
import profilePicture from "../assets/Profilepicture2.jpg";

const Sidebar = () => {
  return (
    <>
      {/* Navbar superior (Horizontal) */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* Boton que abre la sidebar */}
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {/* icono de hamburguesa */}
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <span className="self-center ml-2 text-2xl font-bold sm:text-2xl sm:ml-4 font-Titles whitespace-nowrap dark:text-white">
                Revista
              </span>
            </div>

            {/* profile section  */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div>
                  {/* boton con foto de perfil */}
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={profilePicture}
                      alt="Melendez"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                      Andrés Meléndez
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      <a href="mailto:andresmelendezcar@gmail.com">andresmelendezcar@gmail.com</a>
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        to="/home"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-00">
          <ul className="space-y-2 font-medium">
            {SidebarData.map((item, index) => (
              // Principal data
              <li key={index}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-2 px-4 text-sm text-left text-gray-900 transition duration-75 border-b-4 border-gray-100 rounded-lg bg-gray-50 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls={`dropdown-example-${index}`}
                  data-collapse-toggle={`dropdown-example-${index}`}
                >
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
                {item.subNav ? (
                  <ul
                    id={`dropdown-example-${index}`}
                    className="hidden py-2 space-y-2"
                  >
                    {item.subNav.map((subItem, subIndex) => (
                      // Secondary data
                      <li key={subIndex}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-2 px-4 text-sm text-left text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          aria-controls={`dropdown-example-${index}-${subIndex}`}
                          data-collapse-toggle={`dropdown-example-${index}-${subIndex}`}
                        >
                          <span className="font-medium font-Titles">{subItem.title}</span>
                          {subItem.subNav ? (
                            <svg
                              className="w-2 h-3 mr-3"
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
                        {subItem.subNav ? (
                          <ul
                            id={`dropdown-example-${index}-${subIndex}`}
                            className="hidden py-2 space-y-2"
                          >
                            {subItem.subNav.map((thirdItem, thirdIndex) => (
                              // Third data
                              <li key={thirdIndex}>
                                <Link
                                  to={thirdItem.path}
                                  className="flex items-center w-full p-2 text-sm font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                  <span>{thirdItem.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
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
