import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    // componentDidMount() {
    //     API.savedBooks()
    //         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    //         .catch(err => console.error(err));
    // }

    saveBook = book => {
        book.preventDefault();
        API.saveBook(book)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
            .catch(err => console.error(err));
    }


    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map(book => (
                                <div className="card mb-3" key={book._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={book.title} src={book.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{book.title} by {book.authors}</h5>
                                                <p className="card-text">{book.description}</p>
                                                <div>
                                                    <a href={book.link} >View</a>
                                                    <button onClick={() => this.saveBook(book)}  >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;