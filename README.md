# 📚 Minimal Library Management System - Backend

A RESTful API backend for the **Minimal Library Management System**, built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**. This backend handles CRUD operations for books and borrowing, including inventory management and borrow summaries.

---

## 🚀 Features

- ✅ Book CRUD (Create, Read, Update, Delete)
- ✅ Borrow books (with due date & quantity check)
- ✅ Aggregated Borrow Summary
- ✅ MongoDB with Mongoose schemas
- ✅ Modular MVC architecture
- ✅ TypeScript support
- ✅ Pagination support for book listing
- ✅ Environment-based config

---

## 🧱 Technologies Used

| Layer       | Stack                        |
|-------------|------------------------------|
| Server      | Node.js + Express.js         |
| Language    | TypeScript                   |
| Database    | MongoDB + Mongoose           |
| Tools       | dotenv, cors, express-async-handler, etc |

---

## 📁 Folder Structure

src/
├── controllers/ # Logic for each route
├── models/ # Mongoose schemas
├── routes/ # Express route handlers
├── config/ # DB & environment setup
├── utils/ # Utility functions
├── middlewares/ # Error handling middleware
├── app.ts # Express app setup
└── server.ts # Entry point


---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-management-backend.git
cd library-management-backend
2. Install dependencies

npm install
3. Setup Environment Variables
Create a .env file in the root:


PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-management
4. Start the server (Development)

npm run dev
5. Start the server (Production)


npm run build
npm start
🔗 API Endpoints
📚 Books
Method	Endpoint	Description
GET	/api/books	Get all books (paginated)
GET	/api/books/:id	Get a single book
POST	/api/books	Add a new book
PUT	/api/books/:id	Update book info
DELETE	/api/books/:id	Delete a book

📖 Borrow
Method	Endpoint	Description
POST	/api/borrow/:bookId	Borrow a book (with checks)
GET	/api/borrow-summary	Get total quantity borrowed per book

🧪 Book Schema (Mongoose)
ts
Copy
Edit
{
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}
📑 Borrow Schema
ts
Copy
Edit
{
  bookId: ObjectId;
  quantity: number;
  dueDate: Date;
  borrowedAt: Date;
}
🔐 Optional: Middleware
Add optional middleware for:

Error handling

Logging

Authentication (if needed in future)

🛠 Scripts

npm run dev       # Start server in dev mode
npm run build     # Compile TypeScript
npm start         # Start compiled server
📬 Postman Collection (Optional)
You can import a Postman collection to test all endpoints manually.

👨‍💻 Contributors
Mahabub-Alam

