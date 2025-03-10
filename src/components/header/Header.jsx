import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
const Header = ({ darkMode, toggleDarkMode, toggleSideBar }) => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-500">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
              onClick={toggleSideBar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
            <a href="#" className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ">
                DashBoard
              </span>
            </a>
          </div>
          <button
            className="p-2 rounded-full   text-gray-800 dark:text-gray-200 transition duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-blue-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
