# ChirppChat 💬

**ChirppChat** is a full-stack real-time chat application built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and **Socket.IO**. It supports real-time communication between users with individual chat features, authentication, online status, and more.

## 🚀 Features

- 🔐 **User Authentication**
  - Secure sign-up and login using **JWT** and **bcrypt**
  
- 💬 **Real-Time Chat**
  - One-on-one chat using **Socket.IO**
  - Instant message delivery and reception

- 🟢 **Online Status**
  - Shows which users are currently online

- 🗃️ **Data Persistence**
  - **MongoDB** for storing user data and messages

- 🔔 **Real-Time Notifications**
  - Receive alerts for incoming messages while active

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **MongoDB** | NoSQL database for storing users and chat messages |
| **Express.js** | Backend framework for building REST APIs |
| **React.js** | Frontend framework for building interactive UI |
| **Node.js** | Runtime environment for backend services |
| **Socket.IO** | Library for real-time, bi-directional communication |
| **JWT** | JSON Web Token for secure authentication |
| **bcrypt** | For hashing user passwords securely |

## 📂 Project Structure
```bash
ChirppChat/
├── backend/        # Express + Socket.IO + MongoDB
├── frontend/       # React app
├── package.json    # Project dependencies
└── README.md       # Project documentation
```


## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rustamraj2546/ChirppChat.git
cd ChirppChat
```

### 2. Set up the backend
```bash
cd backend
npm install   # Add your environment variables in a `.env` file
npm start
```

### 3. Set up the frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Environment Variables
You will need to add a .env file in your backend directory with the following:
```bash
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```