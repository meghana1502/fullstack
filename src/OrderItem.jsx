import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';

function OrderItem() {
  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({
    flatno: '',
    city: '',
    pincode: '',
    state: '',
  });
  const fee = 99; // Fee for calculation
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchItemData();
  }, [id]);

  const fetchItemData = () => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        setItem(resp.data);
      })
      .catch((error) => {
        console.error("Failed to fetch item data:", error);
        // Optionally, handle error state or setItem to null
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!item || !item.userName || !item.userId || !item.description || !item.price || !item.title || !item.author || !item.genre || !item.itemImage) {
        throw new Error('Item data is missing required properties');
      }

      const { userName, description, price, title, author, genre, itemImage, userId } = item;
      const totalAmount = parseInt(price, 10) + fee;

      const updatedFormData = {
        ...formData,
        totalamount: totalAmount,
        seller: userName,
        sellerId: userId,
        description: description,
        booktitle: title,
        bookauthor: author,
        bookgenre: genre,
        itemImage: itemImage,
        paymentMethod: 'COD', // Hardcoded to COD as payment method
      };

      const userid = JSON.parse(localStorage.getItem('user')).id;
      const username = JSON.parse(localStorage.getItem('user')).name;
      updatedFormData.userId = userid;
      updatedFormData.userName = username;

      await axios.post('http://localhost:4000/userorder', updatedFormData);
      console.log(updatedFormData);
      alert('Ordered successfully');
      navigate('/myorders');
    } catch (error) {
      console.error('Error adding order:', error.message);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '' }}>
      <Unavbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="max-w-md mt-8 p-4 border rounded shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-center">Your order is almost Done!</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-center" style={{ paddingTop: "10px" }}>Address:</label>
              <div className="input-container relative">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                  name="flatno"
                  value={formData.flatno}
                  onChange={handleChange}
                  placeholder="Flat no"
                />
              </div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
              <div className="input-container relative w-1/2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>
              <div className="input-container relative w-1/2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />
              </div>
            </div>
            <br />
            <div>
              <div className="input-container relative">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
            </div>
            <br />

            {item && (
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end", height: "100%", width: "100%" }}>
                  <div style={{ height: "100px", width: "50px" }}>
                    <img src={`http://localhost:4000/${item?.itemImage}`} alt={`${item.itemtype} Image`} />
                    <p className='text-end'>{item.itemtype}-{item._id ? item._id.slice(3, 7) : ''}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Price:</p>
                  <p>{item.price}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Delivery:</p>
                  <p>Free</p>
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <p style={{ fontSize: "17px" }}>Total Amount:</p>
                  <p>₹ {parseInt(item.price, 10) + fee}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              style={{ width: "100%" }}
              className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
