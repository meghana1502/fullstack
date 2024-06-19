import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const Children = () => {
    // List of children's and young adult books with prices
    const childrenBooks = [
        { title: "Harry Potter and the Sorcerer's Stone", imageUrl: 'https://www.movienewsletters.net/photos/321703R1.jpg', link: '/uproducts', price: '$19.99' },
        { title: 'The Hunger Games', imageUrl: 'https://images5.fanpop.com/image/photos/29700000/New-Hunger-games-HQ-poster-the-hunger-games-29713045-1200-1768.jpg', link: '/uproducts', price: '$14.99' },
        { title: 'Percy Jackson & the Olympians: The Lightning Thief', imageUrl: 'https://img.moviesrankings.com/t/p/w1280/xQazS5kqxp9Wpsll3KYs5z4Prqh.jpg', link: '/uproducts', price: '$12.99' },
        { title: 'The Fault in Our Stars', imageUrl: 'https://www.newdvdreleasedates.com/images/posters/large/the-fault-in-our-stars-2014-03.jpg', link: '/uproducts', price: '$10.99' },
        // Add more children's and young adult books as needed
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
                <h1 className="text-center" style={{ fontSize: '36px' }}>Children's & Young Adult Books</h1>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {childrenBooks.map((book, index) => (
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

export default Children;
