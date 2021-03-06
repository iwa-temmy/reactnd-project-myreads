import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class SearchBook extends Component {

    state = {
        query: '',
        books: []
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ query: event.target.value });

        if (event.target.value !== '') {
            BooksAPI.search(event.target.value)
                .then(books => {
                    this.setState({ books: books });
                });
        }else{
            this.setState({ books: [] });
        }
    }

    render() {
        const { onUpdateBook } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"
                        className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 &&
                            this.state.books.map(
                                book => (
                                    <Book key={book.id} book={book}
                                        onUpdateBook={onUpdateBook} />
                                )
                            )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBook;