# Express.js + PostgreSQL CRUD API

This project is a simple Express.js REST API that connects to a PostgreSQL database and performs basic CRUD operations on a `users` table.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

---

## ✅ Features

- Create a new user
- Retrieve all users
- Retrieve a specific user
- Update an existing user
- Delete a user
- Basic error handling

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- npm (comes with Node.js)

---

## 🚀 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Topsyfash/3mtt-express-postgres.git
   cd 3mtt-express-postgres
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure your PostgreSQL database**

   Create a table using the following SQL:

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       age INTEGER
   );
   ```

4. **Update the database configuration**

   Modify the database config in your code (or use environment variables):

   ```js
   const connection = new Client({
     user: "your_db_user",
     host: "localhost",
     database: "your_db_name",
     password: "your_db_password",
     port: 5432,
   });
   ```

5. **Start the server**

   ```bash
   node index.js
   ```

   The server will run at: `http://localhost:5000`

---

## 📡 API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/users`       | Get all users         |
| GET    | `/users/:id`   | Get user by ID        |
| POST   | `/users`       | Create a new user     |
| PUT    | `/users/:id`   | Update user by ID     |
| DELETE | `/users/:id`   | Delete user by ID     |

---

## 🧪 Testing the API

You can use [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the endpoints.

Example using cURL:

```bash
curl -X POST http://localhost:5000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```

---


## File Structure
- `index.js`: Main application entry
- `config/index.js`: DB connection setup using `pg`
- `routes/userRoutes.js`: User-related route definitions
- `controllers/userController.js`: Handler functions for user routes

---
## 📄 License

This project is licensed under the MIT License.