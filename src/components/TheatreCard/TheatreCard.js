import { Link } from "react-router-dom";

const TheatreCard = ({ tehatre: theatre }) => {
    return (
        <div className="eventsInfo">
            <div className="home-image">
                <img src={theatre.imageUrl} />
            </div>
            <div className="info">
                <h4 className="title">{theatre.title}</h4>
                <h6 className="date">{theatre.date}</h6>
                <h6 className="author">{theatre.author}</h6>
                <div className="info-buttons">
                    <Link className="btn-details" to={`/theaters/${theatre._id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TheatreCard;