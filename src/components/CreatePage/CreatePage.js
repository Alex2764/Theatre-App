import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../context/AuthContext';

const CreatePage = () => {
    const { user  } = useContext(AuthContext) ;
    const navigate = useNavigate();

    const onTheatreCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let date = formData.get('date');
        let author = formData.get('author');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        authService.create({
            title,
            date,
            author,
            description,
            imageUrl,
        }, user.accessToken )
            .then(result => {
                console.log(result);
                navigate('/')
            });
    }

    return (
        <section id="createPage">
            <form onSubmit={onTheatreCreate} className="create-form">
                <h1>Create Theater</h1>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label htmlFor="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" />
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </section>
    );
};
export default CreatePage;