import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const Literature = () => {
    // List of literature and fiction books with prices
    const literatureBooks = [
        { title: 'To Kill a Mockingbird', imageUrl: 'https://www.arts.gov/sites/default/files/To%20Kill%20a%20Mockingbird.jpg', link: '/uproducts', price: '$12.99' },
        { title: '1984', imageUrl: 'https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/014/103/9780141036144.jpg', link: '/uproducts', price: '$10.99' },
        { title: 'The Great Gatsby', imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_hr.jpg', link: '/uproducts', price: '$14.99' },
        { title: 'Moby Dick', imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681778488/moby-dick-9781681778488_xlg.jpg', link: '/uproducts', price: '$16.99' },
        // Add more literature and fiction books as needed
    ];

    // Function to handle the Buy button click
    const handleBuyClick = (book) => {
        console.log(`Order placed for: ${book.title} at ${book.price}`);
        alert(`You have ordered: ${book.title} for ${book.price}`);
        // Implement order placement logic if required
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="main-content">
                <h1 className="text-center" style={{ fontSize: '36px' }}>Literature & Fiction Books</h1>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {literatureBooks.map((book, index) => (
                        <Card key={index} style={{ margin: '20px', width: '18rem' }}>
                            <Link to={book.link}>
                                <Card.Img variant="top" src={book.imageUrl} alt={book.title} />
                            </Link>
                            <Card.Body>
                                <Card.Title className="text-center">{book.title}</Card.Title>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{book.price}</span>
                                    <Button variant="primary" onClick={() => handleBuyClick(book)}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Literature;
