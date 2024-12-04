import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheatre } from "../../context/TheatreContext";
import * as authService from "../../services/authService";

const EditPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const token = user.accessToken;

    const { currentTheatre } = useTheatre(); // Вземаме текущия театър от контекста

    const [theatreData, setTheatreData] = useState(currentTheatre);

    const changeHandler = (e) => {
        setTheatreData((state) => ({
            ...state,
            // This change input, and value
            // e.target.name - name input
            // e.target.value - value input
            [e.target.name]: e.target.value,
            
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        authService.update(theatreData._id, theatreData, token)
            .then(() => {
                navigate(`/theaters/${theatreData._id}`);
            })
            .catch((err) => {
                console.error("Error updating theater:", err);
            });
    };

    return (
        <section id="editPage">
            <form className="theater-form" onSubmit={submitHandler}>
                <h1>Edit Theater</h1>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Theater name"
                        value={theatreData.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        id="date"
                        name="date"
                        type="text"
                        placeholder="Month Day, Year"
                        value={theatreData.date}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Author"
                        value={theatreData.author}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="description">Theater Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={theatreData.description}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        placeholder="Image URL"
                        value={theatreData.imageUrl}
                        onChange={changeHandler}
                    />
                </div>
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default EditPage;
