import { Link } from "react-router-dom";

const UserTheatreCard = ({ theatre }) => {
    return (
        <div className="eventBoard">
            <div className="event-info">
                <img src={theatre.imageUrl} alt={theatre.title} />
                <h2>{theatre.title}</h2>
                <h6>{theatre.date}</h6>
                <Link to={`/theaters/${theatre._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default UserTheatreCard;