import React from "react";
import '../../../src/assets/stylesheets/Book.css'



const Book = (props) => {

    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            {/* <h3 onClick={props.delete}>Writer:{props.Writer}</h3> */}

            <h3 >Writer:{props.Writer}</h3>
            <h4> BookName:{props.BookName}</h4>
            {/* <input type="text" onChange={props.inputName} value={props.BookName} /> */}
        </div>
    );



}

export default Book;

// something changes