import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Ensure this path is correct

const NonFiction = () => {
  // Initial list of non-fiction books with image URLs and prices
  const initialBooks = [
    { title: 'Sapiens: A Brief History of Humankind', imageUrl: 'https://i5.walmartimages.com/asr/e8b5c724-b7c1-4c8f-97c2-4e3ae8bfce8b_1.5870575db94cbd1528611d7e6a8e8c8f.jpeg', link: '/uproducts', price: '$14.99' },
    { title: 'Educated', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg', link: '/uproducts', price: '$13.49' },
    { title: 'Becoming', imageUrl: 'https://bpb-us-e1.wpmucdn.com/wordpressua.uark.edu/dist/d/714/files/2020/08/91m5vlC0niL-980x1513.jpg', link: '/uproducts', price: '$16.99' },
    { title: 'The Immortal Life of Henrietta Lacks', imageUrl: 'https://www.webdelico.com/wp-content/uploads/2021/03/81E1q-oBd6L-1378x2048.jpg', link: '/uproducts', price: '$12.99' },
    // Add more non-fiction books with prices as needed
  ];

  // State to manage the list of books
  const [books] = useState(initialBooks);

  // Function to handle the Buy button click
  const handleBuyClick = (book) => {
    console.log(`Order placed for: ${book.title} at ${book.price}`);
    alert(`You have ordered: ${book.title} for ${book.price}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="main-content">
        <h1 className="text-center" style={{ fontSize: '36px' }}>Non-Fiction Books</h1>
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {books.filter(book => book.imageUrl).map((book, index) => (
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

export default NonFiction;
