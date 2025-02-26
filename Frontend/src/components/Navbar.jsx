import React, { useEffect, useState } from 'react'
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';


function Navbar() {
    const [authUser, setAuthUser] = useAuth()
    //console.log(authUser)


    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // const element = document.documentElement;
    // useEffect(() => {
    //     if (theme === "dark") {
    //         element.classList.add("dark");
    //         localStorage.setItem("theme", "dark")
    //         document.body.classList.add("dark")
    //     } else {
    //         element.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //         document.body.classList.remove("dark");
    //     }
    // }, [theme])

    const [sticky, setsticky] = useState(false)
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 0) {
                setsticky(true)
            } else {
                setsticky(false)
            }
        }
        window.addEventListener('scroll', handlescroll)
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [])
    const navitems = (
        <>


            <li className=' text-black ' >
                <a href='/'>Home</a></li>
            <li className=' text-black '>
                <a href='/Package'>Package</a></li>
            <li className=' text-black '>
                <a href='/contact'>Contact</a></li>
            <li className=' text-black '>
                <a href='/about'>About</a></li>
        </>
    )
    return (


        <div
            className={` max-w-screen-2xl container mx-auto  dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky
                ? "sticky-navbar shadow-md bg-base-200 transition-all ease-in-out"
                : ""
                }`}>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {navitems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Travelworld</a>
                </div>
                <div className="navbar-end ">
                    <div className="navbar-center hidden lg:flex ">
                        <ul className=" text-lg menu menu-horizontal ">
                            {navitems}

                        </ul>
                    </div>
                    <label className=" input input-bordered flex items-center gap-2">
                        <input type="text"
                            className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>




                    {authUser ? (
                        <Logout />
                    ) : (
                        <div>
                            <a className="bg-blue-700 text-white px-3 py-2 mx-5 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").showModal()

                                }
                            >
                                Login
                            </a>
                            <Login />
                        </div>

                    )}


                </div>
            </div>
        </div>

    )
}



export default Navbar