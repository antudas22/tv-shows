import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";


const ShowSummary = () => {

    const [displayModal, setDisplayModal] = useState(false);
    
    const handleOpenModal = () => setDisplayModal(true);
    const handleCloseModal = () => setDisplayModal(false);

    const show = useLoaderData();
    console.log(show[0].show);
    const {name, image, summary, language, premiered, rating, status, schedule} = show[0].show;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const movie = form.movie.value;
        const release = form.release.value;
        const date = form.date.value;
        const buyer = form.buyer.value;
        const email = form.email.value;
        const tickets = form.tickets.value;

        // Set Item in Local Storage
        localStorage.setItem(email, JSON.stringify({ buyer: buyer, movie: movie, release: release, date: date, tickets: tickets}))
        form.reset()
        toast.success(`${buyer} tickets have been successfully added to localstorage.`)
    }


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
                        <button className="btn btn-primary lg-w-25 w-100" onClick={handleOpenModal} >Book Ticket</button>
                    </div>
                </div>
                </div>

                {/* Ticket Booking Modal */}
                <div>
                    <Modal show={displayModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                            <Form.Control name="movie" placeholder="Disabled input" value={name} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Control name="release" placeholder="Disabled input" value={premiered} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Control name="date" placeholder="Disabled input" value={`${schedule.days} at ${schedule.time}`} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Control name="buyer" type="text" placeholder="Your Full Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Control name="email" type="email" placeholder="Your Email" required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Control name="tickets" type="text" placeholder="How Many Tickets Do You Want?" required />
                            </Form.Group>

                            
                        <div className="d-flex justify-content-end">
                        <Button className="me-2" variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                            </Form>

                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ShowSummary;