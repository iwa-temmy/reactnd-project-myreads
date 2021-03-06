# MyReads Project from Udacity Nanodegree

This is a simple app built with React that helps to manage books for the user. Books are categorized into 3 categories Read, Want To read, and currently reading.

├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styling for the app
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # Component Responsible for displaying each book.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend
    ├── BookShelf.js # This component is responsible filtering the books based on which shelf the book is located in.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # The parent component that renders the whole app.
    ├── ListBooks.js # Component that renders the home page
    ├── SearchBook.js # component that renders the search page.
    └── ShelfChanger.js # Component that renders the dropdown option to change shelf. 
    

## Installation

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash

```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.