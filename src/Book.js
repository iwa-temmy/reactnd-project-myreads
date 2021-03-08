import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    handleChange = moveTo => {
        const book = this.props.book;
        if (book.shelf !== moveTo) {
            this.props.onUpdateBook(
                book,
                moveTo
            )
        }
    }



    render() {
        const { book } = this.props
        let imageURL = book && book.imageLinks ? book.imageLinks.thumbnail : "white";
        console.log(book.shelf)

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" id='cover' style={
                            { width: 128, height: 193, background: `url(${imageURL})` }
                        }>

                        </div>
                        <ShelfChanger handleChange={this.handleChange} shelf={book.shelf} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book;