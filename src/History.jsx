import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const History = () => {
    // List of history and politics books
    const historyBooks = [
        { title: 'Guns, Germs, and Steel', imageUrl: 'https://flxt.tmsimg.com/assets/p242011_b_v8_ag.jpg', link: '/uproducts' },
        { title: 'The History of the Ancient World', imageUrl: 'https://pixhost.icu/avaxhome/c1/4c/00624cc1.jpg', link: '/uproducts' },
        { title: 'Team of Rivals: The Political Genius of Abraham Lincoln', imageUrl: 'https://d3525k1ryd2155.cloudfront.net/h/968/915/844915968.0.x.jpg', link: '/uproducts' },
        { title: 'The Wright Brothers', imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781647392390/the-story-of-the-wright-brothers-9781647392390_hr.jpg', link: '/uproducts' },
        // Add more history and politics books as needed
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="main-content">
                <h1 className="text-center" style={{ fontSize: '36px' }}>History & Politics Books</h1>
                <div className="card-container">
                    {historyBooks.map((book, index) => (
                        <Card key={index} style={{ margin: '20px' }}>
                            <Link to={book.link}>
                                <Card.Img variant="top" src={book.imageUrl} />
                            </Link>
                            <Card.Body>
                                <Card.Title className="text-center">{book.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default History;
