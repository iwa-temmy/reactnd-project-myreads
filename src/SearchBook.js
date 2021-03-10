import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class SearchBook extends Component {

    state = {
        query: '',
        books: []
    }
    baseState = this.state;

handleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });

    if (event.target.value !== '') {
        BooksAPI.search(event.target.value)
            .then(books => {
                if(!!books){
                    if(books.length>0){
                        const results = books.map(book => {
                            const existingBook = this.props.books.find((b) => b.id === book.id)
                            console.log(this.props.books, books);
                            book.shelf = !!existingBook ? existingBook.shelf : 'none'
                            return book
                        })
                        this.setState({ books: results });
                    } else {
                        this.setState({books: []})
                    }
                }
            });
    } else if (event.target.value === '') {
        this.setState(this.baseState);
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
                        <input autoFocus type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 &&
                            this.state.books.map(
                                book => (
                                    <Book key={book.id} book={book}
                                        onUpdateBook={onUpdateBook} onUpdateShelf={this.onUpdateShelf} />
                                )
                            )
                            }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBook;