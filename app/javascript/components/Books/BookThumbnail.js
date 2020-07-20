import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
   border: 1px solid #efefef;
   background: #fff;
`
const BookImage = styled.div`

    width: 100%;
    img {
        height: 100%;
        width : 100%;
        border: 1px solid #efefef;
    }
`
const BookTitle = styled.div`
    
    padding: 10px 0 10px 0;
    font-size: 20px;
`
const BookAuthor = styled.div`
    padding: 3px 0 3px 0;
    font-size: 15px;
`
const BookLink = styled.div`
    margin: 15px 0 10px 0;
    height: 50px;

    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 30px;
        text-decoration: none;
        width: 50%;
    }
`
const BookThumbnail =(props)=>{
    return(
        <Card>
            <BookImage>
                <img src={props.attributes.image} alt={props.attributes.title}/>
            </BookImage>
            <BookTitle className="book-title">{props.attributes.title}</BookTitle>
            <BookAuthor>{props.attributes.author}</BookAuthor>
            <BookLink>
                <Link to={`/book/${props.attributes.id}`}>View Book</Link>
            </BookLink>
        </Card>
    )
}

export default BookThumbnail