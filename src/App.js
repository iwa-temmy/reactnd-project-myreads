import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    bookShelf: []
  }

  componentDidMount() {

    BooksAPI.getAll()
      .then( books => {
        const booksShelf = books.reduce((shelf, book) => {
          shelf[book.title] = book.shelf;
          return shelf;
        }, {})
        this.setState({books:books})
        this.setState({bookShelf: booksShelf})
      }); 
      
  }
  

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(updateReturn => console.log(updateReturn))

    book.shelf = newShelf
    this.setState( previousState => ({
      books:[...previousState.books.filter(bookInList => bookInList.id !== book.id), book]
    }))
  }

  render() {
   
    return (
      <div className="app">
        <Route exact path="/">
            <ListBooks books={this.state.books} 
                onUpdateBook={this.updateBook} />
        </Route>
        <Route path="/search">
            <SearchBook books={this.state.books} onUpdateBook={this.updateBook}/>
        </Route>
        <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp;
