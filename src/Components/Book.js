import React from "react";


const Book = (props) => {

    return (
        <div>
            <h3 onClick={props.change}>Writer:{props.Writer}</h3>
            <h4> BookName:{props.BookName}</h4>
            <input type="text" onChange={props.changeBookName} />
        </div>
    );



}

export default Book;