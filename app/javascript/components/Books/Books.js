import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import BookThumbnail from './BookThumbnail'
import styled from 'styled-components'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100p;
    h1 {
        font-size: 42px;
    }
`
const SubHeader = styled.div`
    font-weight:300;
    font-size: 30px;
`
const AddLink = styled.div`
    margin: 20px 0 20px 0;
    height: 70px;

    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 30px;
        text-decoration: none;
        width: 40%;
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    width: 100%;
    padding: 20px;
`

const Books = () =>{
    const [books, setBooks] = useState([])

    useEffect(()=>{
        axios.get('/books.json')
        .then(resp => {
            setBooks(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [books.length])

    const list = books.map( item =>{
        return(
            <BookThumbnail 
                key={item.attributes.title}
                attributes ={item.attributes}
             />
        )
    })
    return(
        <Home>
            <Header>
                <h1>Library Management System</h1>
                <SubHeader className="subheader">Your Book, Your Mind</SubHeader>
                <AddLink>
                    <Link to={`/book/new`} >Add new Book</Link>
                </AddLink>
            </Header>
            <Grid>
                {list}
            </Grid>
        </Home>
    )
}

export default Books