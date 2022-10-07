import Footer from "@/Components/Footer";
import NavRead from "@/Components/navRead";

export default function Read(props) {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="flex">
                <NavRead/>
            </div>
            <div className="">
                <div className="mt-28">
                    <div className="flex flex-wrap flex-col">
                        <div className="flex text-2xl m-5 mb-10 font-bold justify-center items-center">
                            {props.readNews.title}
                        </div>
                        <div className="ml-5 sm:-mb-4 md:ml-10 lg:ml-[165px] justify-start items-start text-sm -mb-3">
                            Created by {props.readNews.author}
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="m-5 text-secondary max-w-5xl text-lg lg:text-xl">
                                {props.readNews.description}
                            </div>
                        </div>
                        
                        <hr className="font-bold m-5"/>

                        <div className="mb-7 ml-3 lg:ml-40" >Category : <span className="badge badge-inline">{props.readNews.category}</span></div>

                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    ) 
}