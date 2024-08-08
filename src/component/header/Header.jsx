import logo from "./logoBlue.png"
import {Link} from "react-router-dom";
export default function Header() {
    return (
        <div
            className='flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center gap-4 w-full'>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-36'/>
                </Link>

                <div id="collapseMenu"
                     className='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <ul className='lg:flex lg:gap-x-20 ml-7 max-lg:space-y-2 font-poppins'>
                            <li className='max-lg:border-b max-lg:py-3'>
                                <Link to="/"
                                   className='hover:font-medium text-gray-700 block font-normal text-[15px]'>Home</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                                                                           className='hover:font-medium text-gray-700 block font-normal text-[15px]'>Explore</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                                                                           className='hover:font-medium text-gray-700 block font-normal text-[15px]'>Dashboard</a>
                            </li>
                        </ul>

                        <ul className='lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto font-poppins'>
                            <li className='max-lg:border-b max-lg:py-3 max-lg:mt-2'>
                                <a href='javascript:void(0)'
                                   className='hover:font-medium text-gray-700 block font-normal text-[15px]'>Pricing</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 max-lg:mt-2'><a href='javascript:void(0)'
                                                                                       className='hover:font-medium text-gray-700 block font-normal text-[15px]'>Learn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

                <div className='flex items-center ml-auto space-x-6'>
                    <a href='javascript:void(0)'
                       className='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Log
                        in</a>
                    <Link to="/signup"
                        className='px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Sign Up
                    </Link>

                    <button id="toggleOpen" className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}