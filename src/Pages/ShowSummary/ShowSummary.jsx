import { useLoaderData } from "react-router-dom";


const ShowSummary = () => {

    const show = useLoaderData();
    console.log(show[0].show);
    const {name, image, summary, language, premiered, rating, status, schedule} = show[0].show;

    return (
        <div className="container px-5">
            <div className="shadow-lg my-5 p-3 mb-5 bg-body-tertiary rounded">
                <h1>{name}</h1>
                <div className="d-flex flex-column flex-lg-row">
                <img src={image.medium} alt="" />
                <div className="ms-lg-3 mt-3 mt-lg-0">
                    <p><span className="fw-bold" >Summary:</span> {summary.slice(3, summary.length - 4)}</p>
                    <div>
                        <p>Language: {language}</p>
                        <p>Premiered: {premiered}</p>
                        <p>Rating: {rating.average}</p>
                        <p>Status: {status}</p>
                        <p>Date: {schedule.days} at {schedule.time}</p>
                        <button className="btn btn-primary lg-w-25 w-100" >Book Ticket</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSummary;