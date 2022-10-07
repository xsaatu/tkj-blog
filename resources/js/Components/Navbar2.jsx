import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const Navbar2 = ({ user }) => {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="navbar bg-base-100 bg-transparent">
            <div className="flex-1">
                <img
                    src="/img/tkjlogo.png"
                    alt="xsaatu"
                    className="w-11 text-slate-300 rounded-full "
                />
            </div>
            <div className="flex-none sm">
                <button
                    id="hamburger"
                    name="hamburger"
                    type="button"
                    className={`block absolute right-4 lg:hidden ${
                        isActive ? "" : "hamburger-active"
                    }`}
                    onClick={handleToggle}
                >
                    <span className="hamburger-line transition duration-300  origin-top-left"></span>
                    <span className="hamburger-line transition duration-300"></span>
                    <span className="hamburger-line transition duration-300 origin-bottom-left"></span>
                </button>
                <nav
                    id="nav-menu"
                    className={` absolute py-3 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-12 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none z-50 ${
                        isActive ? "hidden" : ""
                    }`}
                >
                    <ul className="block lg:flex">
                        <li className="group">
                            <a
                                href="/"
                                className="text-base text-dark py-2 mx-8 flex group-hover:text-neutral-focus hover:text-sm hover:bg-base-300 hover:pr-2 hover:pl-2 hover:rounded-full hover:transition-all"
                            >
                                Beranda
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="/profile"
                                className="text-base text-dark py-2 mx-8 flex group-hover:text-neutral-focus hover:text-sm hover:bg-base-300 hover:pr-2 hover:pl-2 hover:rounded-full hover:transition-all"
                            >
                                Profile
                            </a>
                        </li>
                        {!user ? (
                            <>
                                <li className="group">
                                    <Link
                                        href={route("login")}
                                        as="button"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-neutral-focus hover:text-sm hover:bg-base-300 hover:pr-2 hover:pl-2 hover:rounded-full hover:transition-all"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="group">
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-neutral-focus hover:text-sm hover:bg-base-300 hover:pr-2 hover:pl-2 hover:rounded-full hover:transition-all"
                                    >
                                        Tulisan Saya
                                        {/* <span className="badge">New</span> */}
                                    </Link>
                                </li>
                                <li className="group">
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="text-base text-dark py-2 mx-8 flex group-hover:text-neutral-focus hover:text-sm hover:bg-base-300 hover:pr-2 hover:pl-2 hover:rounded-full hover:transition-all"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar2;
