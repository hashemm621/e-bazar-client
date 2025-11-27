# E-Bazar

## Project Description

E-Bazar is a simple e-commerce backend server built with **Express.js** and **MongoDB**. It provides RESTful API endpoints for managing products, allowing users to create, read, update, and delete product entries. The server is designed to be easily deployable on platforms like **Vercel**.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd e-bazar-server
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Variables**
   Create a `.env.local` file in the root folder and add:

```env
DB_NAME=<your-mongodb-username>
DB_PASS=<your-mongodb-password>
PORT=5000
```

4. **Start the server**

```bash
npm run dev
# or
node index.js
```

Server will run on `http://localhost:5000`.

---

## Routes Summary

| Method | Endpoint        | Description                                | Request Body                 |
| ------ | --------------- | ------------------------------------------ | ---------------------------- |
| GET    | `/`             | Test route; returns welcome message        | None                         |
| GET    | `/products`     | Get all products (optional query by email) | None                         |
| GET    | `/products/:id` | Get single product by ID                   | None                         |
| POST   | `/products`     | Create a new product                       | JSON: `{name, price, email}` |
| PUT    | `/products/:id` | Update a product by ID                     | JSON: `{field1, field2}`     |
| DELETE | `/products/:id` | Delete a product by ID                     | None                         |

---

## Deployment

* Set up environment variables in **Vercel Dashboard**.
* Deploy using:

```bash
vercel
```

* Make sure the MongoDB connection URI is correctly configured via environment variables.

---

## Notes

* Keep MongoDB client connected for the entire server lifecycle to avoid 500 errors.
* Use CORS middleware for cross-origin requests.
* Designed for backend API usage; frontend can connect via fetch or axios.
