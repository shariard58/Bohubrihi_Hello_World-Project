import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Components/Book'


// function App() {
//   return (
//     <div className="App">

//       <h1> Hello World </h1>
//       <Person />

//     </div>
//   );
// }

class App extends Component {

  state =
    {
      books: [
        { bookName: "1984", Writer: "George Orwell" },
        {
          bookName: "The Da Vinci Code ", Writer: "Dan Brown"
        },
        {
          bookName: "The Alchemist ", Writer: "Paulo Ceolho"
        },

      ]
    }



  changeBookState = (newBookName) => {

    this.setState(
      {

        books: [
          { bookName: newBookName, Writer: "George Orwell" },
          {
            bookName: " Kothao Keu Nei ", Writer: "Dan Brown"
          },
          {
            bookName: "Deyal ", Writer: "Humayan Ahmed"
          },

        ]
      }
    );

  }

  changeWithInputState = (e) => {
    this.setState(
      {

        books: [
          { bookName: e.target.value, Writer: "George Orwell" },
          {
            bookName: e.target.value, Writer: "Dan Brown"
          },
          {
            bookName: e.target.value, Writer: "Humayan Ahmed"
          },

        ]
      }
    );
  }


  render() {
    return (<div className="App">

      <h1> Book List  </h1>
      <input type="text" onChange={this.changeWithInputState} />
      <br></br>
      <button onClick={this.changeBookState.bind(this, "2021 is the biggest year for me ")}> Change State </button>
      {/* changeBookState er por () use kore felle function ta call hobe ..amra function call korte chai na function take pass korte chai  */}
      <Book Writer={this.state.books[0].bookName}
        BookName={this.state.books[0].Writer}
        changeBookName={this.changeWithInputState} />
      <Book Writer={this.state.books[1].bookName}
        BookName={this.state.books[1].Writer} change={this.changeBookState.bind(this, "2021 has taught me a lot  ")} />
      <Book Writer={this.state.books[2].bookName}
        BookName={this.state.books[2].Writer}
        changeBookName={this.changeWithInputState} />




    </div>);


  }

}

export default App;
