

# Library Management System Backend

This is the backend for the Library Management System, built with Node.js, Express, and MySQL.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RahulRS15/library-management-system.git
   cd library-management-system
Install dependencies:

bash
npm install
Configuration
Create a .env file in the root directory and add your environment variables:

plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library_management
JWT_SECRET=yourjwtsecret
PORT=3000
Set up the database:

Create a MySQL database named library_management.

Run the SQL scripts in the config/db.js file to create the necessary tables.

Running the Application
Start the backend server:

bash
node app.js
The server will run on http://localhost:3000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user

POST /api/auth/login: Login a user

Books
GET /api/books: Get all books

POST /api/books: Add a new book

Borrow Requests
POST /api/borrow-requests: Submit a borrow request

PUT /api/borrow-requests/:id/approve: Approve a borrow request

PUT /api/borrow-requests/:id/deny: Deny a borrow request

GET /api/users/:id/history: Get user borrow history

Folder Structure
library-management-system/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   └── borrowController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── userModel.js
│   ├── bookModel.js
│   └── borrowModel.js
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   └── borrowRoutes.js
├── utils/
│   └── csvUtils.js
├── .env
├── app.js
├── package.json
└── README.md
Technologies Used
Node.js

Express

MySQL

JWT (JSON Web Token)

bcryptjs

Axios
   
