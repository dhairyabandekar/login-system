# 🔐 MERN Login & Registration System

A full-stack **MERN Authentication System** built using **React, Tailwind CSS, Node.js, Express.js, and MongoDB**. This application provides secure user registration, login, JWT-based authentication, password hashing, protected routes, and input validation following modern web development best practices.

---

## 🚀 Features

- 👤 User Registration
- 🔑 Secure User Login
- 🔒 Password Hashing using bcryptjs
- 🛡️ JWT Authentication
- 🔐 Protected Profile Route
- 📧 Email Validation
- 🔑 Strong Password Validation
- 🚫 Duplicate User Detection
- 🌐 RESTful API
- ☁️ MongoDB Atlas Integration
- 📱 Responsive User Interface using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

### Development Tools
- Visual Studio Code
- Git & GitHub
- Postman / Thunder Client

---

## 📁 Project Structure

```
LOGIN-SYSTEM/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## 🔐 Authentication Workflow

1. User registers with a username, email, and password.
2. Backend validates all user inputs.
3. Password is securely hashed using **bcryptjs**.
4. User details are stored in **MongoDB Atlas**.
5. User logs in with valid credentials.
6. Server generates a **JWT Token**.
7. Protected routes verify the JWT before granting access.

---

## ✅ Input Validation

### Username
- Minimum 3 characters

### Email
- Must be a valid email format

### Password
- Minimum 6 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Fetch authenticated user's profile |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-github-username/login-system.git
```

### 2. Navigate to the Project

```bash
cd login-system
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm start
```

Backend runs on:

```
http://localhost:3000
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---


## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Building Full-Stack MERN Applications
- Designing REST APIs
- JWT Authentication
- Password Hashing using bcryptjs
- MongoDB Database Integration
- Mongoose ODM
- React Routing
- API Integration using Axios
- Responsive UI Design with Tailwind CSS
- Environment Variable Management
- Git & GitHub Workflow
- Backend Deployment on Render
- Frontend Deployment on Vercel

---

## 🔮 Future Enhancements

- Forgot Password
- Reset Password via Email
- Email Verification
- Google OAuth Login
- Refresh Token Authentication
- User Profile Update
- Remember Me Functionality
- Dark Mode
- Role-Based Authentication (Admin/User)

---

## 👨‍💻 Author

**Dhairya Bandekar**

- GitHub: https://github.com/dhairyabandekar
- LinkedIn: https://www.linkedin.com/in/dhairya-bandekar-709bb9257/
---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
