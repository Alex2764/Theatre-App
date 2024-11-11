import { Link } from "react-router-dom";

const TheatreCard = ({tehatre }) => {
    return (
        <div className="eventsInfo">
            <div className="home-image">
                <img src={tehatre.imageUrl} />
            </div>
            <div className="info">
                <h4 className="title">{tehatre.title}</h4>
                <h6 className="date">{tehatre.date}</h6>
                <h6 className="author">{tehatre.author}</h6>
                <div className="info-buttons">
                    <Link className="btn-details" to={`theaters/${tehatre._id}`}>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TheatreCard;