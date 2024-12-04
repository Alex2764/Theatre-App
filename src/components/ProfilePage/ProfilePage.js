import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheatre } from "../../context/TheatreContext";
import UserTheatreCard from "./components/UserTheatreCard";

const ProfilePage = () => {
    const { user } = useAuth();
    const { userTheatres, loadUserTheatres } = useTheatre();

    useEffect(() => {
        if (user?._id) {
            loadUserTheatres(user._id);
        }
    }, [user?._id, loadUserTheatres]);

    const emptyItem = (
        <div className="no-events">
            <p>This user has no events yet!</p>
        </div>
    );

    return (
        <section id="profilePage">
            <div className="userInfo">
                <div className="avatar">
                    <img src={user?.userPic} alt="User avatar" />
                </div>
                <h2>{user?.name}</h2>
            </div>

            <div className="board">
                {userTheatres.length > 0
                    ? userTheatres.map((theatre) => (
                        <UserTheatreCard key={theatre._id} theatre={theatre} />
                    ))
                    : emptyItem
                }
            </div>
        </section>
    );
};

export default ProfilePage;