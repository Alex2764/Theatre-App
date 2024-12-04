import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheatre } from "../../context/TheatreContext";
import * as authService from '../../services/authService';

/**
 * DetailPage Component
 * Отговаря за показването на детайлите за конкретен театър и предоставя опции за редактиране и изтриване.
 */
const DetailPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { currentTheatre, loadTheatre } = useTheatre();
    const theater = currentTheatre;
    
    const { theatreId } = useParams();
    

    /**
     * useEffect Hook
     * Зарежда данните за театъра при промяна на theatreId.
     */

    useEffect(() => {
        loadTheatre(theatreId); 
    }, [theatreId, loadTheatre]);



    /**
     * deleteHandler Function
     * Отговаря за изтриване на театър и пренасочване към началната страница.
     */
    const deleteHandler = async () => {
        try {
            await authService.destroy(theater._id, user.accessToken);
            navigate("/");
        } catch (error) {
            console.error("Failed to delete theatre:", error);
        }
    };


    /**
     * ownerButtons JSX
     * Кнопки за собственика на театъра (редактиране и изтриване).
     */
    const ownerButtons = (
        <>
            <button onClick={() => navigate(`/edit`)} className="btn-edit">Edit</button>
            <button onClick={deleteHandler} className="btn-delete">Delete</button>
        </>
    );


     /**
     * userButton JSX
     * Кнопка за харесване, налична за обикновени потребители.
     */
    const userButton = (
        <button className="btn-like">Like</button>
    );
    

    // Връщане на JSX за страницата
    return (
        <section id="detailsPage">
            <div id="detailsBox">
                <h1>Title: {theater.title}</h1>
                <img    src={theater.imageUrl}
                        alt={theater.title}
                        style={{
                            width: '90px',
                        }}
                 />
                <p>{theater.description}</p>
                <div className="buttons">
                    {user?._id === theater._ownerId ? ownerButtons : userButton}
                </div>
                <a className="btn-like" href="#">
                            <img 
                                style={{
                                    width: '40px',
                                }}
                                src="https://www.freeiconspng.com/uploads/heart-icon-valentine-2.png"/>
                        </a>
            </div>
        </section>
    );
};

export default DetailPage;
