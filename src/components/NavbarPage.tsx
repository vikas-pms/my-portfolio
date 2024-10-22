import Link from 'next/link';
import React from 'react';

function NavbarPage() {
    return (
        <>
            <div className="navbar bg-gray-400 ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400  rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                        >
                            <li> <Link href={"/"}>Home</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#skill">Skill</Link></li>
                            <li><Link href="#experience">Project</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-sans">Vikas&apos;s Portfolio</Link>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="bg-gray-400  flex gap-10">
                    <li> <Link href={"/"}>Home</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#skill">Skill</Link></li>
                            <li><Link href="#experience">Project</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="/1722336887739-removebg-preview.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarPage;
