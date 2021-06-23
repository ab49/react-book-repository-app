import React, { useRef } from 'react';
import axios from 'axios';
import {  withRouter } from 'react-router-dom';
import apiLink from '../apiLink';

const AddBooksList = ({history}) => {
    
    const inputBookName = useRef(null);
    const inputAuthorName = useRef(null);
    const inputpublishedDate = useRef(null);


    const handleFormSubmited = (e) => {
        e.preventDefault();

        console.log({
            bookName: inputBookName.current.value,
            author: inputAuthorName.current.value,
            publishedDate: inputpublishedDate.current.value
        });
        axios.post(apiLink, {
            bookName: inputBookName.current.value,
            author: inputAuthorName.current.value,
            publishedDate: inputpublishedDate.current.value
        })
            .then(function (response) {
                console.log(response);
                history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1 className="pb-5">Add To Do List</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="bookName">Book Name</label>
                    <input ref={inputBookName} type="text" className="form-control" id="bookName" placeholder="Book name" />
                </div>

                <div className="form-group">
                    <label htmlFor="bookName">Author Name</label>
                    <input ref={inputAuthorName} type="text" className="form-control" id="authorName" placeholder="Author name" />
                </div>

                <div className="form-group">
                    <label htmlFor="bookName">Publication Date</label>
                    <input ref={inputpublishedDate} type="text" className="form-control" id="publishedDate" placeholder="Publication Date" />
                </div>

                <button onClick={(e) => { handleFormSubmited(e) }} type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    );
}

export default withRouter(AddBooksList);