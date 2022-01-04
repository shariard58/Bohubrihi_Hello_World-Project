import React, { Component } from "react";

import Book from '../representational/Book';

class BookList extends Component {

    constructor(props) {
        super(props);
        console.log("BookList Constructor");
    }
    UNSAFE_componentWillMount() {
        console.log(" BookList Component will Mount")
    }

    componentDidMount() {
        console.log("BookList Component Did Mount");
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Upadted  BookList componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Updated BookList shouldComponent Update", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Update BookList componentWill Update");

    }

    componentDidUpdate() {
        console.log("U Booklist ComponentDidupdate");
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