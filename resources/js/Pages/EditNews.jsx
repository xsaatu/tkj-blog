// import EditInput from "@/Components/Edit/EditInput";
import Navbar2 from "@/Components/Navbar2";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    // const [contents, setContents] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            // contents,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return <div className="min-h-screen bg-slate-50">
            <div>
                <Head title={props.title} />
                <Navbar2 user={props.auth.user} />
            </div>
            <div className="flex flex-col">
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-2 mt-24 lg:w-96">
                    <div className="collapse-title text-xl font-medium">
                        Rules Cara Mengedit Tulisan
                    </div>
                    <div className="collapse-content"> 
                        {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                        <ul>
                            <li>Jika 1 kolom saja yang di edit maka kolom yang lain harus di beri spasi lalu hapus spasinya lagi, agar tidak error</li>
                        </ul>
                    </div>
                </div>
                <div className="card inline-block w-full lg:w-96 bg-base-100 shadow-xl m-2 mt-5  ">
                    <div className="p-4 text-2xl">Edit Tulisan</div>
                        <div className="card-body m-2 ">
                            <input
                                type="text"
                                placeholder="Judul"
                                className="m-2 input input-bordered w-full"
                                onChange={(title) => setTitle(title.target.value)}
                                defaultValue={props.myNews.title}
                            />
                                {/* <textarea
                                    type="text"
                                    placeholder="Isi tulisan"
                                    className="m-2 input input-bordered w-full"
                                    onChange={(contents) => setContents(contents.target.value)}
                                    defaultValue={props.myNews.contents}
                                /> */}

                            <input
                                type="text"
                                placeholder="Kategori"
                                className="m-2 input input-bordered w-full"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                defaultValue={props.myNews.category}
                            />

                            <input
                                type="text"
                                placeholder="Deskripsi"
                                className="m-2 input input-bordered w-full"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                defaultValue={props.myNews.description}
                            />

                            <button
                                className="btn btn-primary m-2"
                                onClick={() => handleSubmit()}
                                >
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
}
