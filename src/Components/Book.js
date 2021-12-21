import React from "react";


const Book = (props) => {

    return (
        <div>
            <h3 onClick={props.delete}>Writer:{props.Writer}</h3>
            <h4> BookName:{props.BookName}</h4>
            <input type="text" onChange={props.inputName} />
        </div>
    );



}

export default Book;