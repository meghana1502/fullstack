import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const Comics = () => {
    // List of comics and graphic novels with prices
    const comics = [
        { title: 'Watchmen', imageUrl: 'https://i0.wp.com/www.thenerddaily.com/wp-content/uploads/2018/12/Watchmen-Movie-Poster.jpg', link: '/uproducts', price: '$19.99' },
        { title: 'Maus', imageUrl: 'https://iwt.sfo2.cdn.digitaloceanspaces.com/cbr-covers/92d9d40f87afedff17f8d6b9640891f7_xl.jpg', link: '/uproducts', price: '$15.99' },
        { title: 'Batman: The Killing Joke', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL.jpg', link: '/uproducts', price: '$12.99' },
        { title: 'Saga', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg', link: '/uproducts', price: '$14.99' },
        // Add more comics and graphic novels as needed
    ];

    // Function to handle the Buy button click
    const handleBuyClick = (comic) => {
        console.log(`Order placed for: ${comic.title} at ${comic.price}`);
        alert(`You have ordered: ${comic.title} for ${comic.price}`);
        // Implement order placement logic if required
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="main-content">
                <h1 className="text-center" style={{ fontSize: '36px' }}>Comics & Graphic Novels</h1>
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {comics.map((comic, index) => (
                        <Card key={index} style={{ margin: '20px', width: '18rem' }}>
                            <Link to={comic.link}>
                                <Card.Img variant="top" src={comic.imageUrl} alt={comic.title} />
                            </Link>
                            <Card.Body>
                                <Card.Title className="text-center">{comic.title}</Card.Title>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{comic.price}</span>
                                    <Button variant="primary" onClick={() => handleBuyClick(comic)}>Buy</Button>
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

export default Comics;
