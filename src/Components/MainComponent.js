import React, { Component } from 'react';
import booklist from '../assets/books';
import BookList from './lists/BookList';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            books: booklist,
            showBooks: true
        }

        console.log("Main Component Life Cycle");



    }




    // changeBookState = (newBookName) => {

    //   this.setState(
    //     {

    //       books: [
    //         { bookName: newBookName, Writer: "George Orwell" },
    //         {
    //           bookName: " Kothao Keu Nei ", Writer: "Dan Brown"
    //         },
    //         {
    //           bookName: "Deyal ", Writer: "Humayan Ahmed"
    //         },

    //       ]
    //     }
    //   );

    // }

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

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })
    }

    UNSAFE_componentWillMount() {
        console.log("MainComponent WillMount ");
    }

    componentDidMount() {
        console.log("Maiin Component Did Mount");
    }

    render() {

        console.log("MainComponent render");



        // const booksState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            />

        }



        console.log(books);






        return (<div className="App">

            <h1> Book List  </h1>


            <button onClick={this.toggleBooks}> Toggle Books </button>

            {books}

            {/* <input type="text" onChange={this.changeWithInputState} />
      <br></br>
      <button onClick={this.changeBookState.bind(this, "2021 is the biggest year for me ")}> Change State </button>
  
      <Book Writer={this.state.books[0].bookName}
        BookName={this.state.books[0].Writer}
        changeBookName={this.changeWithInputState} />
      <Book Writer={this.state.books[1].bookName}
        BookName={this.state.books[1].Writer} change={this.changeBookState.bind(this, "2021 has taught me a lot  ")} />
      <Book Writer={this.state.books[2].bookName}
        BookName={this.state.books[2].Writer}
        changeBookName={this.changeWithInputState} /> */}

            {/* // {books} */}




        </div>);


    }

}



export default MainComponent;