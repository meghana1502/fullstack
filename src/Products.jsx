import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundImage from '/2.jpg'; // Adjust the path to the image

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          const wishlistData = response.data;
          setWishlist(wishlistData);
        })
        .catch((error) => {
          console.error('Error fetching wishlist items: ', error);
        });
    } else {
      console.log('ERROR');
    }

  }, []);

  const addToWishlist = async (itemId) => {
    try {
      // Find the selected item by itemId
      const selectedItem = items.find((item) => item._id === itemId);

      if (!selectedItem) {
        throw new Error('Selected item not found');
      }

      // Destructure the needed properties
      const { title, itemImage, _id: itemId2 } = selectedItem;
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;

      // Add item to the wishlist
      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage, userId, userName });

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        axios.get(`http://localhost:4000/wishlist/${user.id}`)
          .then((response) => {
            const wishlistData = response.data;
            setWishlist(wishlistData);
          })
          .catch((error) => {
            console.error('Error fetching wishlist items: ', error);
          });
      } else {
        console.log('ERROR');
      }
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };


  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
        setWishlist(response.data);
      } else {
        console.log('ERROR');
      }
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">Books List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="rounded-t-lg"
                style={{ height: '350px', width: '500px' }}
              />
              <div>
                <p className="text-xl font-bold mb-2">{item.title}</p>
                <p className="text-gray-700 mb-2">Author: {item.author}</p>
                <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                <p className="text-blue-500 font-bold">Price: ${item.price}</p>

                {isItemInWishlist(item._id) ? (
                  <Button
                    style={{ backgroundColor: 'red', border: 'none' }}
                    onClick={() => removeFromWishlist(item._id)}
                  >
                    Remove from Wishlist
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: 'rebeccapurple', border: 'none' }}
                    onClick={() => addToWishlist(item._id)}
                  >
                    Add to Wishlist
                  </Button>
                )}

                <Button style={{ backgroundColor: 'rebeccapurple', border: 'none', marginLeft: "100px" }}>
                  <Link to={`/uitem/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    View
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
