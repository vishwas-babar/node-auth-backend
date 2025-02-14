
## Overview
This is a backend web application built with **Express.js** and **MongoDB** that allows users to:
1. Register with their username, email, full name, and password.
2. Log in using their email and password to receive a JWT token.
3. Search for users by username or email.

## Deployment

The application is deployed on an **AWS EC2 instance** and is accessible at:

🔗 **[EC2 Server URL](http://52.71.151.89:5000/)**
http://52.71.151.89:5000/


## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Tokens) for Authentication**
- **Bcrypt.js for Password Hashing**
- **Zod for Data Validation**
- **Dotenv for Environment Variables**

## Features
- **User Registration** (Stores username, email, full name, and hashed password in MongoDB)
- **User Login** (Generates JWT token upon successful authentication)
- **Search User** (Retrieve user details by username or email)
- **Secure Authentication** (JWT-based auth with password hashing)
- **Server-side Validation** (Using Zod for request body validation)

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)

### Clone Repository
```sh
git clone https://github.com/your-username/nodejs-intern-assignment.git
cd nodejs-intern-assignment
```

### Install Dependencies
```sh
npm install
```

### Setup Environment Variables
Create a **.env** file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Server
```sh
npm start
```
Or use nodemon for development:
```sh
npm run dev
```

## API Endpoints

### 1. User Registration
**Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "vishwas123",
    "email": "vishwas@example.com",
    "password": "securepassword",
    "fullName": "Vishwas Babar"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 2. User Login
**Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "vishwas@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your.jwt.token"
  }
  ```

### 3. Search User
**Endpoint:** `GET /api/auth/search?username=vishwas123`
- **Response:**
  ```json
  {
    "username": "vishwas123",
    "email": "vishwas@example.com",
    "fullName": "Vishwas Babar"
  }
  ```

## Testing with Postman
1. Use **Postman** to test API endpoints.
2. For protected routes, pass the JWT token in the `Authorization` header as `Bearer <token>`.


## Author
[Vishwas Babar](https://www.linkedin.com/in/vishwas-babar-6a2005229/)

