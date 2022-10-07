import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }

        return;
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif && (
                        <div className="alert alert-success shadow-lg">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    )}
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        value={title}
                    />
                    {/* <input
                        type="text"
                        name="contents"
                        id="contents"
                        placeholder="Isi Tulisan"
                        className="m-2 input input-bordered w-full"
                        onChange={(isi) =>
                            setIsi(isi.target.value)
                        }
                        value={isi}
                    /> */}

                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        value={category}
                    />

                    {/* <input
                     id="description" 
                     placeholder="Isi Tulisan" 
                     className="m-2" 
                     type="hidden"
                     name="description" 
                    />
                    <trix-editor input="description" name="description" className="m-2" 
                     onChange={(description) =>
                        setDescription(description.target.value)
                    } 
                        value={description}></trix-editor> */}

                    <textarea
                        // rows="100"
                        type="text"
                        placeholder="Isi Tulisan"
                        className="m-2 input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        value={description}
                    />

                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="p-4">
                {props.myNews && props.myNews.length > 0 ? (
                    props.myNews.map((news, i) => {
                        return (
                            <div
                                key={i}
                                className="card w-full lg:w-96 bg-base-100 shadow-xl m-2 "
                            >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {news.title}
                                        {/* <div className="badge badge-secondary">NEW</div>s */}
                                    </h2>
                                    <p className="trct">{news.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">
                                            {news.category}
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route("edit.news")}
                                                method="get"
                                                data={{ id: news.id }}
                                                as="button"
                                            >
                                                edit
                                            </Link>
                                        </div>
                                        <div className="badge badge-outline">
                                        <Link
                                                href={route("delete.news")}
                                                method="post"
                                                data={{ id: news.id }}
                                                as="button"
                                            >
                                                delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="flex justify-center items-center italic">
                        Anda belum memiliki tulisan
                    </p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
