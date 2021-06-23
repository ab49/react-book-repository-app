import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import apiLink from '../apiLink';

const BooksList = ({history}) => {

    const [BooksListData, setBooksListData] = useState([]);

    useEffect(() => {
        // console.log( apiLink );
        // Make a request for a user with a given ID
        axios.get(apiLink)
            .then(function (response) {
                // handle success
                console.log(response.data);
                console.log(response.data.body.Items);
                if( response.data.body.Count > 0 ){
                    setBooksListData(response.data.body.Items)
                }
                // setBooksListData(response.data.Items)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },[]);

    const deleteItems = (e, bookName, author) => {
        e.preventDefault();

        console.log(bookName);
        console.log(author);

        axios.delete('https://v61lntesqa.execute-api.us-east-1.amazonaws.com/default/bookDepoAPIFunction', {
            bookName: bookName,
            authorName: author
        })
            .then(function (response) {
                console.log(response);
                history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <h1 className="py-5">Books List</h1>
            <Link to="/add-books" className="btn btn-primary mb-5">Add Books</Link>

            <div className="card-section">
                
                    {BooksListData.map( (data, indexData) => 
                    (
                    <div className="card mb-5" key={indexData}>
                        <div className="card-header">
                            Book #{data.bookName}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{data.bookName}</h5>
                            <p className="card-text">Author: {data.author}</p>
                            { (data.publicationDate) && <p className="card-text">PublicationDate: {data.publicationDate}</p> }

                            <div className="row">
                                <div className="col-sm-2">
                                    <Link to="/" onClick={(e) => {deleteItems(e, data.bookName, data.author)}} className=" w-100 btn btn-danger" >Delete</Link>
                                </div>
                                <div className="col-sm-2" >
                                    <Link to="/" onClick={(e) => {deleteItems(e, data.bookName, data.author)}} className="w-100 btn btn-primary">Edit</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    ))}
                
            </div>
        </div>
    );
}

export default BooksList;