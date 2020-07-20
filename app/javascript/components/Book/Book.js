import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Home = styled.div
`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div
`
    padding: 100px 100px 10px 100p;
    text-align: center;
    h1 {
        font-size: 42px;
    }
`
const SubHeader = styled.div
`
text-align: center;
    font-weight:300;
    font-size: 30px;
`
const Image = styled.div
`
    text-align: center;
    margin: 40px 0 30px 0;

    img {
        height: 300px;
        width: auto;
        border: 1px solid #efefef
    }
`
const BookTable = styled.div
`
    font-size: 20px;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background: #efefef;

`
const Row = styled.tr
`
    padding: 20px;
`
const LeftColumn = styled.td
`
    width: 20%;
    font-weight: bold;
`


const Book = (props) =>{
    const [book, setBook] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
            const url = `/books/${props.match.params.id}`
            axios.get(url)
            .then(resp => { 
                console.log(resp)
                setBook(resp.data.data.attributes)
                setLoaded(true)
            })
            .catch(resp => {console.log(resp)})
    }, [book.length])


    return(
            <Home>
                { 
                    loaded &&
                    <div>
                        <Header>
                            <h1>Library Management System</h1>
                            <SubHeader className="subheader">Your Book, Your Mind</SubHeader>
                        </Header>
                        <Image>
                            <img src={book.image} alt={book.title} />
                        </Image>
                        <BookTable>
                            <table>
                                <tbody>
                                    <Row>
                                        <LeftColumn>Title</LeftColumn>
                                        <td>:</td>
                                        <td>{book.title}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Author</LeftColumn>
                                        <td>:</td>
                                        <td>{book.author}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Publisher</LeftColumn>
                                        <td>:</td>
                                        <td>{book.publisher}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Language</LeftColumn>
                                        <td>:</td>
                                        <td>{book.language}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Description</LeftColumn>
                                        <td>:</td>
                                        <td>{book.description}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Total Books</LeftColumn>
                                        <td>:</td>
                                        <td>{book.totalBooks}</td>
                                    </Row>
                                    <Row>
                                        <LeftColumn>Available Books</LeftColumn>
                                        <td>:</td>
                                        <td>{book.availableBooks}</td>
                                    </Row>
                                </tbody>
                            </table>
                        </BookTable>
                    </div>
                }
            </Home>
        
    )
}

export default Book