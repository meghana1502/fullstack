import React, { useState } from 'react';
import Unavbar from './Unavbar';
import './uhome.css';
import { Card, Carousel, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Componenets/Footer'; // Adjust path as needed

const carouselImages = [
  '3.jpg', // Ensure these images are correctly placed
  'wp2297934.jpg',
  '5.jpg',
];

const Uhome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const books = [
    { id: 1, title: 'RICH DAD POOR DAD', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg', price: 399 },
    { id: 2, title: 'THINK AND GROW RICH', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg', price: 299 },
    { id: 3, title: 'TO KILL A MOCKINGBIRD', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg', price: 499 },
    
    
    { id: 6, title: 'THE HOBBIT', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg', price: 449 },
    { id: 7, title: 'PRIDE AND PREJUDICE', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg', price: 299 },
    { id: 8, title: 'HARRY POTTER AND THE SORCERER\'S STONE', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg', price: 599 },
    { id: 9, title: 'THE ALCHEMIST', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865.jpg', price: 349 },
    
    { id: 12, title: 'THE BOOK THIEF', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg', price: 429 },
    { id: 13, title: 'ANIMAL FARM', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1424037542i/7613.jpg', price: 199 },
    { id: 14, title: 'THE CATCHER IN THE RYE', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg', price: 299 },
    { id: 15, title: 'BRAVE NEW WORLD', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg', price: 399 },
    { id: 16, title: 'THE HUNGER GAMES', imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447303603i/2767052.jpg', price: 499 },
    
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBuyClick = (bookId) => {
    navigate(`/orderitem/${bookId}`); // Navigate to the OrderItem component with the book ID
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Unavbar />
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Carousel interval={2000} pause={false} className="carousel">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index}`}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="main-content">
        <div className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/non-fiction">Non-Fiction</Link></li>
            <li><Link to="/children">Children's & Young Adult</Link></li>
            <li><Link to="/literature">Literature & Fiction</Link></li>
            <li><Link to="/comics">Comics & Graphic Novels</Link></li>
            <li><Link to="/entrance-exam">Entrance Exam</Link></li>
            <li><Link to="/history">History & Politics</Link></li>
          </ul>
        </div>

        <div className="content">
          <h1 className="text-center" style={{ fontSize: '50px' }}>Books</h1>
          <div className="card-container">
            {filteredBooks.map((book, index) => (
              <Card key={index} style={{ margin: '20px' }}>
                <Link to={`/product/${book.id}`}>
                  <Card.Img variant="top" src={book.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">{book.title}</Card.Title>
                  <div className="text-center">
                    <p>Price: ₹{book.price}</p>
                    <Button 
                      variant="primary" 
                      onClick={() => handleBuyClick(book.id)}
                      className="buy-button"
                    >
                      Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Uhome;
