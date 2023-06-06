import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


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
            <Link to={`/showsummary/${name}`} className="btn btn-primary">View More</Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;