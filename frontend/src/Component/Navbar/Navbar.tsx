import { Link, useLocation } from "react-router-dom"
import { PopUp } from "./PopUp";
import { Button } from "@/components/ui/button";
import { AvatarDemo } from "./Avatar";


export const Navbar = () => {
    const { pathname } = useLocation()
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

                {pathname === "/" ? (
                    <div className="hidden md:block">
                        <AvatarDemo />
                    </div>
                ) : pathname === "/register" ? (
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white"
                        >
                            Log In
                        </Link>
                    </div>
                ) : (
                    <div className="hidden md:block">
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-white"
                        >
                            Register
                        </Link>
                    </div>
                )}

                <div className="md:hidden flex items-center">
                    <Button >
                        <PopUp />
                    </Button>
                </div>
            </nav >

        </>
    )
}
