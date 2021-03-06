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
    books: []
  }

  componentDidMount() {

    BooksAPI.getAll()
      .then( books => {
        console.log("books from BookApi", books)
        this.setState({books:books})
      }); 
    console.log("Books", this.state.books); 
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
            <SearchBook onUpdateBook={this.updateBook}/>
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
