import * as authService from '../../services/authService';
import { useState, useEffect } from 'react';
import TheatreCard from '../TheatreCard/TheatreCard';


const  WelcomePage = () => {
    const [theatre, setTheatre] = useState([]);

    useEffect(()=>{
        authService.theatresData()
        .then(result => {
            setTheatre(Object.values(result));             
        });
    },[]);

    

    return (
        <section className="welcomePage">
            <div id="welcomeMessage">
                <h1>My Theater</h1>
                <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
                    professionals, theatre organizations, theatre universities and theatre lovers all over the world on
                    the 27th of March. This day is a celebration for those who can see the value and importance of the
                    art
                    form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
                    not
                    yet recognised its value to the people and to the individual and have not yet realised its potential
                    for
                    economic growth.</p>
            </div>
            <div id="events">
                <h1>Future Events</h1>
                <div className="theaters-container">
                   {theatre.length > 0 
                        ? theatre.map(x =>
                            <TheatreCard
                                key={x._id}
                                tehatre={x}
                            />)
                        :  <h4 className="no-event">No Events Yet...</h4>
                    };
                </div>
            </div>
        </section>
    );
};
export default WelcomePage;