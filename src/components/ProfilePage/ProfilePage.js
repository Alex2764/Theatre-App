const ProfilePage = ({
    username,
}) => {
    return (
        <section id="profilePage">
            <div className="userInfo">
                <div className="avatar">
                    <img src="./images/profilePic.png" />
                </div>
                <h2>{username}</h2>
            </div>
            <div className="board">
                <div className="eventBoard">
                    <div className="event-info">
                        <img src="./images/Moulin-Rouge!-The-Musical.jpg" />
                        <h2>Moulin Rouge! - The Musical</h2>
                        <h6>July 10, 2018</h6>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <div className="no-events">
                    <p>This user has no events yet!</p>
                </div>
            </div>
        </section>
    );
};
export default ProfilePage;