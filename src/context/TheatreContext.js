import { createContext, useState, useContext } from "react";
import * as authService from "../services/authService";

export const TheatreContext = createContext();

export const TheatreProvider = ({
     children,
}) => {
    const [currentTheatre, setCurrentTheatre] = useState({});
    const [userTheatres, setUserTheatres] = useState([]);
    
    const loadTheatre = (theatreId) => {
        authService.getOne(theatreId)
            .then(theatreData => {
                setCurrentTheatre(theatreData); // Запазваме данните за театъра
            })
            .catch(error => {
                console.error("Failed to load theatre:", error);
            });
    };

    const loadUserTheatres = (userId) => {
        authService.getAllByUser(userId)
            .then(theatres => {
                setUserTheatres(theatres);
            })
            .catch(error => {
                console.error("Failed to load user's theatres:", error);
            });
    };

    return (
        <TheatreContext.Provider value={{ currentTheatre, loadTheatre, userTheatres, loadUserTheatres }}>
            {children}
        </TheatreContext.Provider>
    );
};


export const useTheatre = () => {
    return useContext(TheatreContext);
};


