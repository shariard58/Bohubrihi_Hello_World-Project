import React, { Component } from "react";

import Book from '../representational/Book';

class BookList extends Component {

    constructor(props) {
        super(props);

    }





    render() {


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