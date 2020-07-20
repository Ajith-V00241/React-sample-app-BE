import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const AddBook = () => {
    return(
        <div>
            <form>
                <div className="field">
                    <input type="text" name="title" placeholder="title" required="true"/>
                </div>
                <div className="field">
                    <input type="text" name="author" placeholder="author" required="true"/>
                </div>
                <div className="field">
                    <input type="text" name="publisher" placeholder="publisher" required="true"/>
                </div>
                <div className="field">
                    <input type="text" name="language" placeholder="language" required="true"/>
                </div>
                <div className="field">
                    <input type="text-area" name="description" placeholder="description" required="true"/>
                </div>
                <div className="field">
                    <input type="text" name="totalBooks" placeholder="TotalBooks" required="true"/>
                </div>
                <div className="field">
                    <input type="text" name="image" placeholder="image" required="true" value="/assets/images/bookLogo.jpg"/>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook