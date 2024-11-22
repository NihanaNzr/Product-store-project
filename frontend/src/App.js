import React, { useState } from "react";
import "./App.css";

function App() {
    // Sample product data
    const [products] = useState([
        {
            _id: "1",
            name: "Samsung Galaxy S23+",
            price: 999.99,
            image: "/images/sm1.webp", // Replace with the correct image path
        },
        {
            _id: "2",
            name: "Samsung Galaxy S23",
            price: 899,
            image: "/images/sm2.webp", // Replace with the correct image path
        },
        {
            _id: "3",
            name: "Samsung Galaxy S22 Ultra",
            price: 888.99,
            image: "/images/sm3.webp", // Replace with the correct image path
        },
    ]);

    const [cart, setCart] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [quantities, setQuantities] = useState({});

    // Set default quantity to 1 if not set already
    const handleQuantityChange = (productId, quantity) => {
        setQuantities({ ...quantities, [productId]: quantity || 1 });
    };

    const addToCart = (productId) => {
        const quantity = parseInt(quantities[productId]) || 1; // Default to 1 if not set
        const product = products.find((p) => p._id === productId);
        const existingCartItem = cart.find((item) => item._id === productId);

        if (existingCartItem) {
            // Update the quantity if the item is already in the cart
            const updatedCart = cart.map((item) =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            // Add new item to the cart
            const cartItem = { ...product, quantity };
            setCart([...cart, cartItem]);
        }

        alert("Added to cart!");
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const placeOrder = () => {
        setCart([]);
        alert("Order placed successfully!");
        setCartOpen(false);
    };

    return (
        <div className="App">
            {/* Header */}
            <header className="header">
                <h1>Product Store</h1>
                <div className="cart-icon" onClick={() => setCartOpen(true)}>
                    🛒 <span className="cart-badge">{cart.length}</span>
                </div>
            </header>

            {/* Product Listing */}
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <input
                            type="number"
                            min="1"
                            value={quantities[product._id] || 1} // Default to 1 if no quantity set
                            onChange={(e) =>
                                handleQuantityChange(product._id, e.target.value)
                            }
                            className="quantity-input"
                        />
                        <button className="add-to-cart" onClick={() => addToCart(product._id)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="cart-sidebar">
                    <h2>Cart Items</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calculateTotalPrice()}</h3>
                    <div className="cart-actions">
                        <button className="close-cart" onClick={() => setCartOpen(false)}>
                            Close
                        </button>
                        <button className="place-order" onClick={placeOrder}>
                            Place Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
