import React, { Component } from 'react';
import booklist from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Route , Routes} from 'react-router-dom';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            books: booklist,
        }
    }

    changeWithInputState = (e, index) => {

        const book = {

            ...this.state.books[index]
        }

        book.bookName = e.target.value;

        const book1 = [...this.state.books];

        book1[index] = book;

        this.setState({

            books: book1
        });
    }


    deleteBookState = (index) => {

        const book = this.state.books.slice();
        // sob gula boi books er modhe anlam 

        book.splice(index, 1);

        // eta java Script er built in function kno kisu delete korar jnno 

        this.setState({

            books: book
        })
    }


    render() {

           const books = <BookList books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            />

        console.log(books);

        return (
        <div className="App">
            <div className='nav-bar'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/new-book">NewBook</a>
                    </li>
                </ul>
            </div>

            {/* <Route path="/" render={() => <h1>Home</h1>}/> */}

            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/new-book" element={<h1>New Book</h1>}/>

            </Routes>
           

        </div>
        );
    }

}



export default MainComponent;