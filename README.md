# Product Store with Cart and Order Placement

This project is a basic e-commerce application that allows users to view products, add them to their cart, update quantities, calculate the total price, and place an order. It uses React.js for the frontend and Node.js with MongoDB for the backend.

## Technologies Used

- **Frontend**: 
  - React.js
  - Axios for HTTP requests
  - CSS (Custom Styling)

- **Backend**: 
  - Node.js
  - Express.js for API endpoints
  - MongoDB for data storage

## Features

- Display a list of products.
- Add products to the cart and adjust quantities.
- Display cart items with the total price.
- Place an order and clear the cart.
- Responsive and user-friendly interface.

## Setup Instructions

### Backend Setup (Node.js & Express)

1. **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd <your-repository-folder>
    ```

2. **Install Backend Dependencies**:
    Navigate to the `backend` folder and install the required dependencies:
    ```bash
    cd backend
    npm install
    ```

3. **Set up MongoDB**:
    - Make sure MongoDB is installed and running on your local machine or use a cloud database (like MongoDB Atlas).
    - The backend is configured to use `mongodb://localhost:27017/cartDB` by default. If you are using MongoDB Atlas, update the connection string in `server.js`.

4. **Start the Backend**:
    To start the backend server, run:
    ```bash
    npm start
    ```

    The backend will be running on `http://localhost:5000`.

### Frontend Setup (React.js)

1. **Install Frontend Dependencies**:
    Navigate to the `frontend` folder and install the required dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. **Configure API URL**:
    - By default, the frontend is configured to send requests to `http://localhost:5000` for product and cart data. 
    - Ensure that the backend server is running before starting the frontend.

3. **Start the Frontend**:
    To start the frontend, run:
    ```bash
    npm start
    ```

    The frontend will be running on `http://localhost:3000`.

### Running Both Frontend and Backend Concurrently

With the following configuration in your `package.json`, you can run both the frontend and backend servers concurrently:

1. **Install `concurrently`**:
    - `concurrently` is used to run multiple commands in parallel. You already have it as a devDependency in the `package.json` file.

2. **Run Both Servers**:
    To run both the backend and frontend at the same time, you can run the following command from the root directory of your project:
    ```bash
    npm start
    ```

    This will automatically run:
    - `npm run start-backend` to start the backend server on `http://localhost:5000`.
    - `npm run start-frontend` to start the frontend server on `http://localhost:3000`.

    Both servers will run concurrently, and you will see their logs in the same terminal window.

### Build and Deploy

To build both the frontend and backend for production, you can use the following commands:

1. **Build the Frontend**:
    ```bash
    npm run build-frontend
    ```

2. **Build the Backend**:
    This assumes you have a `build` command set up for your backend (you might use `webpack`, or `express` with some build process):
    ```bash
    npm run build-backend
    ```

3. **Build Both Frontend and Backend**:
    Run the following command to build both frontend and backend simultaneously:
    ```bash
    npm run build
    ```

### Connecting Frontend and Backend

The frontend makes API calls to the backend using the following endpoints:

- **GET /products**: Fetches all the products to display on the product listing page.
- **POST /cart**: Adds a product to the cart or updates the quantity if it already exists.
- **GET /cart**: Fetches the current items in the user's cart.
- **POST /place-order**: Clears the cart after the user places an order.

By default, the frontend sends requests to `http://localhost:5000`, which is where the backend API is hosted. This connection is handled using Axios in the frontend.

### Database Schema

The backend uses MongoDB to store product and cart data. Here are the schemas:

- **Product Schema**: Stores product details such as name, price, and image URL.
- **Cart Schema**: Stores the product ID and quantity for each item in the user's cart.

### API Endpoints

- **GET /products**: Fetches all the products.
- **POST /cart**: Adds a product to the cart (or updates the quantity if it already exists).
- **GET /cart**: Fetches the current cart items.
- **POST /place-order**: Clears the cart after placing an order.

### Frontend Functionality

- **Product List**: Displays available products with their price and an option to add them to the cart.
- **Cart Sidebar**: Displays the items added to the cart, their quantities, and the total price. Users can place the order to clear the cart.
- **Quantity Management**: Allows users to modify the quantity of products before adding them to the cart.

## Project Structure

```plaintext
├── backend/
│   ├── server.js
│   ├── package.json
│   └── (other backend-related files)
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── (other frontend-related files)
│   ├── package.json
│   └── (other frontend-related files)
└── package.json
