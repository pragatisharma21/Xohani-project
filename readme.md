# Webinar Management App

## 📌 Overview
The Webinar Management App is a full-stack web application that allows users to **create, manage, and enroll** in webinars. It features user authentication, secure webinar hosting, and image storage integration.

## 🚀 Features
- **User Authentication** (Sign up, Login, JWT-based Authentication)
- **Webinar Management** (Create, Update, and Retrieve Webinars)
- **User Enrollment System** (Enroll users in webinars)
- **Secure Image Uploading** (Using ImageKit)
- **Token-based Authorization**
- **MongoDB Database Integration**

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **File Storage:** ImageKit
- **Middleware:** Error handling, Authentication Middleware

## 📂 Folder Structure
```
📦 webinar-management-app
├── 📂 config
│   ├── connectDB.js          # MongoDB connection setup
├── 📂 controllers
│   ├── user.controller.js    # User authentication & profile logic
│   ├── webinar.controller.js # Webinar CRUD operations
│   ├── enrollment.controller.js # User enrollment in webinars
├── 📂 models
│   ├── user.model.js         # User Schema
│   ├── webinar.model.js      # Webinar Schema
│   ├── enrollment.model.js   # Enrollment Schema
├── 📂 middleware
│   ├── authMiddleware.js     # Authentication Middleware
│   ├── errorHandler.js       # Global error handling middleware
├── 📂 utils
│   ├── imagekitService.js    # ImageKit upload service
│   ├── jwtUtil.js            # JWT Token generation utility
├── 📂 routes
│   ├── user.routes.js        # User-related API routes
│   ├── webinar.routes.js     # Webinar-related API routes
│   ├── enrollment.routes.js  # Enrollment-related API routes
├── 📂 public
│   ├── uploads/              # Stores uploaded images (if applicable)
├── 📄 .env                    # Environment variables
├── 📄 server.js               # Main entry point of the application
├── 📄 package.json            # Dependencies and scripts
```

## 🔧 Installation

1. **Install Dependencies**
   ```sh
   npm install
   ```
2. **Set Up Environment Variables**
   Create a `.env` file and add the required values:
   ```env
   MONGO_URI=your_mongo_database_url
   JWT_SECRET=your_secret_key
   IMAGEKIT_API=your_imagekit_api_key
   PRIVATE_KEY=your_private_key
   IMAGKIT_URLENDPOINT=your_imagekit_url
   ```
3. **Start the Server**
   ```sh
   npm start
   ```
   The app will run on `http://localhost:5000`

## 📡 API Endpoints
### **User Routes**
- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Login user
- `GET /api/user/:id` – Get user profile

### **Webinar Routes**
- `POST /api/webinar` – Create a webinar
- `GET /api/webinar` – Get all webinars
- `PUT /api/webinar/:id` – Update a webinar

### **Enrollment Routes**
- `POST /api/enroll/:webinarId` – Enroll user in a webinar

## 📌 Deployment
- **Frontend Hosting:** Vercel / Netlify (if applicable)
- **Backend Hosting:** Render / Railway / AWS
- **Database:** MongoDB Atlas



---
Made  by PRAGATI

