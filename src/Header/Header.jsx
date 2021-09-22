import linkedin from "./svg/linkedin.svg";
import github from "./svg/github.svg";
import globe from "./svg/globe.svg";

const Header = _ => {
    return (
        <div className="Header">
            <div className="Navbar">
                <nav className="bg-white">
                    <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button"
                                        className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                {/*<div className="flex-shrink-0 flex items-center">
                                <p className="text-2xl text-dark-900">Lucas Lamothe</p>
                            </div>*/}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-10">
                                        <a href="#"
                                           className="text-black-500 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                                           aria-current="page">
                                            Home
                                        </a>
                                        <a href="#about"
                                           className="text-black-500 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                            About
                                        </a>
                                        <a href="#projects"
                                           className="text-black-500 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                            Projects
                                        </a>
                                        <a href="#contact"
                                           className="text-black-500 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-8 items-center pr-2">
                                    <a href="https://www.linkedin.com/in/lucas-lamothe/" target="_blank">
                                        <span className="sr-only">LinkedIn</span>
                                        <img src={linkedin} alt="logo-linkedin"/>
                                    </a>
                                    <a href="https://github.com/LucasLamothe" target="_blank">
                                        <span className="sr-only">Github</span>
                                        <img src={github} alt="logo-github"/>
                                    </a>
                                    <a href="https://www.malt.fr/profile/lucaslamothe" target="_blank">
                                        <span className="sr-only">Malt</span>
                                        <img src={globe} alt="logo-malt"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#"
                               className="text-black-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                               aria-current="page">
                                Home
                            </a>
                            <a href="#about"
                               className="text-black-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </a>
                            <a href="#projects"
                               className="text-black-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                                Projects
                            </a>
                            <a href="#contact"
                               className="text-black-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Header;