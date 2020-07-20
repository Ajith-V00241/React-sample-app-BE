import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Books from './Books/Books'
import Book from './Book/Book'
import AddBook from './AddBook/AddBook'

const App = () => {
    return(
        <Switch>
            <Route exact path="/book/:id" component={Book}/>
            <Route exact path="/" component={Books}/>
            <Route exact path="/book/new" component={AddBook}/>
        </Switch>
    )
}

export default App