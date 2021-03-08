import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        shelf : PropTypes.object.isRequired
    }

    render() {
        const {shelf, books, onUpdateBook} = this.props;

        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.value}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf === shelf.key).map(
                        book => (
                            <Book key={book.id} book = {book}
                            onUpdateBook ={onUpdateBook} />
                        )
                    )}
                </ol>
            </div>
        </div>
        )
    }
}

export default BookShelf;