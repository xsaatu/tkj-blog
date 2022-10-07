import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Navbar2 from "@/Components/Navbar2";
import NavRead from "@/Components/navRead";
import Carausel from "@/Components/Profile/Carausel";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Profile(props) {
    return (
        <div className="flex">
            <Head title={props.title} />
            <NavRead />
            <div className="mt-28">
                <div className="flex justify-center items-center z-50 min-h-screen -mt-20">
                    <div className="m-5">
                        <span className="w-full text-lg font-semibold">
                            Please Rotate to landscape if you using Phone
                        </span>{" "}
                        <br />{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-arrow-narrow-up"
                            width="40"
                            height="100"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-full mt-5"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="16" y1="9" x2="12" y2="5"></line>
                            <line x1="8" y1="9" x2="12" y2="5"></line>
                        </svg>{" "}
                        <br />{" "}
                        <span className="text-xl ml-28 sm:ml-36 w-full -mt-10">Swipe Up</span>{" "}
                    </div>
                </div>

                <Carausel />
            </div>
        </div>
    );
}
