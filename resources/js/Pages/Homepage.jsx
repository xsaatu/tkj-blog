import Footer from "@/Components/Footer";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar2 from "@/Components/Navbar2";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Homepage(props) {
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar2 user={props.auth.user}/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch item-center gap-4 p-4">
                <NewsList news={props.news.data}/>
            </div> 
            <div className="flex justify-center items-center mb-5 mt-5">
            <Paginator meta={props.news.meta}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
