const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/cartDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    quantity: Number,
});

const cartSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
});

const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post("/cart", async (req, res) => {
    const { productId, quantity } = req.body;
    const cartItem = await Cart.findOne({ productId });
    if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
    } else {
        const newCartItem = new Cart({ productId, quantity });
        await newCartItem.save();
    }
    res.json({ message: "Product added to cart" });
});

app.get("/cart", async (req, res) => {
    const cart = await Cart.find();
    res.json(cart);
});

app.post("/place-order", async (req, res) => {
    await Cart.deleteMany();
    res.json({ message: "Order placed successfully" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
