import { Link } from "@inertiajs/inertia-react";

const isNews = (news) => {
    return news.map((data, i) => {
        return    <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl mt-20 ">
        <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                {data.title}
                {/* <div className="badge badge-secondary">NEW</div>s */}
            </h2>
            <p className="trct">{data.description}</p>
            <div className="card-actions justify-end">
                <div className="badge badge-inline">{data.category}</div>
                <div className="badge badge-outline">{data.author}</div>
            </div>
            <Link href="read" data={{id: data.id}} as="button" className="btn">Baca sekarang</Link>
        </div>
    </div>
    })
}

const noNews = () => {
    return (
        <div className="flex justify-center items-center italic min-h-screen">Saat ini belum ada drama tersedia</div>
    )
}

const NewsList = ({news}) => {
    return !news ? noNews() : isNews(news);
}

export default NewsList