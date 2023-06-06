import { Button, Card } from "react-bootstrap";


const ShowCard = ({show}) => {
    console.log(show);
    const {image, name, language, rating, premiered} = show;
    return (
        <div>
            
            <Card>
            <Card.Img variant="top" src={image.medium} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="d-flex justify-content-between">
                <p>Language: {language}</p>
                <p>Rating: {rating.average}</p>
            </div>
            <p>Premiered: {premiered}</p>
            <Button variant="primary">View More</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;