 const EdditPage = () => {
    return (
        <section id="editPage">
            <form className="theater-form">
                <h1>Edit Theater</h1>
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
                    <input id="author" name="author" type="text" placeholder="Author " />
                </div>
                <div>
                    <label htmlFor="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play is set to transfer to London's West End at the Gielgud Theatre in March 2022.</textarea>
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

export default EdditPage;