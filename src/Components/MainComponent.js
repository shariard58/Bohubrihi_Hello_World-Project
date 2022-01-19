import React, { Component } from 'react';
import booklist from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Route, Routes, Link, NavLink, nav } from 'react-router-dom';
import { render } from "react-dom";
import BookDetail from './representational/BookDetail';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            books: booklist,
            selectedBook: null
        }
    }

    selectedBookHandeler = book => {
        this.setState(
            {
                selectedBook: book
            }

        )


    }

    // changeWithInputState = (e, index) => {

    //     const book = {

    //         ...this.state.books[index]
    //     }

    //     book.bookName = e.target.value;

    //     const book1 = [...this.state.books];

    //     book1[index] = book;

    //     this.setState({

    //         books: book1
    //     });
    // }


    // deleteBookState = (index) => {

    //     const book = this.state.books.slice();
    //     // sob gula boi books er modhe anlam 

    //     book.splice(index, 1);

    //     // eta java Script er built in function kno kisu delete korar jnno 

    //     this.setState({

    //         books: book
    //     })
    // }


    render() {

        const books = <BookList books={this.state.books}
            // deleteBookState={this.deleteBookState}
            // changeWithInputState={this.changeWithInputState}
            selectedBookHandeler={this.selectedBookHandeler}

        />

        // console.log(books);

        return (
            <div className="App">
                <nav className='nav-bar'>
                    <ul>
                        <li>
                            {/* <a href="/">Home</a> */}

                            <NavLink to="/"> Home</NavLink>
                        </li>

                        <li>
                            {/* <a href="/new-book">NewBook</a> */}

                            <NavLink to="/new-book">New Book</NavLink>
                        </li>
                    </ul>
                </nav>
                <BookDetail book={this.state.selectedBook} />

                {/* <Route path="/" render={() => <h1>Home</h1>}/> */}

                <Routes>
                    {/* <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/new-book" element={<h1>New Book</h1>} /> */}

                    <Route path="/" element={books} />
                    <Route path="/new-book" element={<NewBook />} />






                </Routes>



            </div>
        );
    }

}



export default MainComponent;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     