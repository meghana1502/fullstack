import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const EntranceExamBooks = () => {
    // List of entrance exam books
    const entranceExamBooks = [
        { title: 'The Official Guide to the GRE', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pAGh6gDWL.jpg', link: '/uproducts' },
        { title: 'Cracking the SAT', imageUrl: 'https://2f96be1b505f7f7a63c3-837c961929b51c21ec10b9658b068d6c.ssl.cf2.rackcdn.com/products/011135.jpg', link: '/uproducts' },
        { title: 'Barron\'s TOEFL iBT', imageUrl: 'https://ecx.images-amazon.com/images/I/51D1vp306cL.jpg', link: '/uproducts' },
        { title: 'Kaplan MCAT Complete 7-Book Subject Review', imageUrl: 'https://media.karousell.com/media/photos/products/2017/11/04/kaplan_mcat_complete_7book_subject_review_1509771535_4fd1e226.jpg', link: '/uproducts' },
    
        // Add more entrance exam books as needed
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="main-content">
                <h1 className="text-center" style={{ fontSize: '36px' }}>Entrance Exam Books</h1>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {entranceExamBooks.map((book, index) => (
                        <Card key={index} style={{ margin: '20px', width: '18rem' }}>
                            <Link to={book.link}>
                                <Card.Img variant="top" src={book.imageUrl} alt={book.title} />
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

export default EntranceExamBooks;
