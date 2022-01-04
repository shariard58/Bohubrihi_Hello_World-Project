import React, { Component } from "react";

import Book from '../representational/Book';

class BookList extends Component {

    constructor(props) {
        super(props);
        console.log("BookList Constructor");
    }


    componentDidMount() {
        console.log("BookList Component Did Mount");
    }




    shouldComponentUpdate(nextProps, nextState) {
        console.log("Updated BookList shouldComponent Update", nextProps, nextState);
        return true;
    }


    componentDidUpdate() {
        console.log("U Booklist ComponentDidupdate");
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Booklist Component getDerivedStateFromProps ", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U Booklist getSnapShotBefore Update");
    }


    render() {

        console.log("BookList render");

        return (

            this.props.books.map((book, index) => {
                return (

                    <Book Writer={book.Writer}
                        BookName={book.bookName}
                        delete={this.props.deleteBookState.bind(this, index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}


                    />
                );
            })

        );

    }


}

export default BookList;