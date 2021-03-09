import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {

    Shelves = [
        {
            key: 'currentlyReading',
            value: 'Currently Reading'
        },
        {
            key: 'wantToRead',
            value: 'Want to Read'
        },
        {
            key: 'read',
            value: 'Read'
        }
    ]

    render() {

        const { books, onUpdateBook } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    {this.Shelves.map(shelf => {
                        return (
                            <BookShelf key={shelf.key} shelf={shelf}
                                books={books} onUpdateBook={onUpdateBook} />
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default ListBooks