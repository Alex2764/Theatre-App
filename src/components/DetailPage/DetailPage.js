import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as authService from '../../services/authService';


import { AuthContext } from "../../context/AuthContext";

const DetailPage = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const [theatres, setTheatre] = useState({});

    const { theatreId } = useParams();

    useEffect(() => {
        authService.getOne(theatreId)
            .then(result => {

                setTheatre(result);
            }) 
    }, []);

    const deleteHandler = () => {
        authService.destroy(theatreId, user.accessToken)
        .then(() => { 
            navigate('/')
        });
    }; 

    const editHandler = () => {

    };

    const ownerbuttons = (
        <>
            <Link className="btn-edit" to="edit" onClick={editHandler}>Edit</Link>
            <a className="btn-delete" href="#" onClick={deleteHandler}>Delete</a>
        </>
    );
    
    const userButton = (
        <>
            <a className="btn-like" href="#">Like</a> 
        </>
    );

    return (
        <section id="detailsPage">
            <div id="detailsBox">
                <div className="detailsInfo">
                    <h1>Title: {theatres.title}</h1>
                    <div>
                        <img src={theatres.imageUrl} alt={theatres.title} />
                    </div>
                </div>

                <div className="details">
                    <h3>Theater Description</h3>
                    <p>{theatres.description}</p>
                    <p>...</p>
                    <div className="buttons">
                        {user._id && (user._id == theatres._ownerId
                         ?   ownerbuttons
                          :  userButton    
                        )}
                        <a className="btn-like" href="#">
                            <img 
                                style={{
                                    width: '40px',
                                }}
                                src="https://www.freeiconspng.com/uploads/heart-icon-valentine-2.png"/>
                        </a>
                        <span>Likes: {theatres.likes?.length}</span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailPage;