import { Link, useLocation } from "react-router-dom"
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";


export const Navbar = () => {
    const { pathname } = useLocation()
    const [menuOpen, setMenuOpen] = useState(false);
    console.log("psth", menuOpen)

    return (
        <>
            <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
                <div className="text-2xl font-semibold">
                    <a href="/">MyApp</a>
                </div>

                {/* Navigation Links */}
                {/* <ul className="hidden md:flex space-x-8">
                <li>
                    <a href="#home" className="hover:text-blue-400 transition">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-blue-400 transition">
                        About
                    </a>
                </li>
                <li>
                    <a href="#services" className="hover:text-blue-400 transition">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-400 transition">
                        Contact
                    </a>
                </li>
            </ul> */}

                {
                    pathname === "/register" ? (<div className="hidden md:block">
                        <Link rel="stylesheet" to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white"
                        >Log In</Link>
                    </div>) : (
                        <div className="hidden md:block">
                            <Link rel="stylesheet" to="/register"
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white"
                            >Register</Link>
                        </div>
                    )
                }


                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <IoReorderThreeSharp size={28} />
                    </button>
                </div>


            </nav>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-3 py-4 md:hidden shadow-lg z-20">
                    {pathname === "/login" ? (
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white w-3/4 text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Register
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white w-3/4 text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            Log In
                        </Link>
                    )}
                </div>
            )}
        </>
    )
}
