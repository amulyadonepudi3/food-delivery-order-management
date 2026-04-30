# 🍔 Food Ordering System (Full Stack Web Application)

A modern full-stack Food Ordering System built using **Spring Boot (Java)** for the backend and **React (Vite + Material UI)** for the frontend. The system allows users to browse food items, add them to a cart, place orders, and track order status in a smooth and responsive UI.

---

## 🚀 Features

### 🍕 Menu Module
- Displays list of food items
- Each item includes name, description, price, and image
- Clean card-based UI with hover effects

### 🛒 Cart Module
- Add items to cart
- Update quantity dynamically
- Remove items from cart
- Real-time total price calculation

### 📦 Order Module
- Place order from cart
- Order confirmation screen
- Track order status (PENDING / COMPLETED)

### 🎨 UI/UX Highlights
- Material UI (MUI) components
- Responsive design (mobile + desktop)
- Smooth hover animations and clean layout
- Professional card-based interface

---

## 🧱 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 / MySQL
- Maven

### Frontend
- React (Vite)
- Material UI (MUI)
- Axios
- JavaScript (ES6+)

---

## 📁 Project Structure

```bash
backend/
└── src/main/java/com/example/ordermanagement
    ├── controller
    ├── service
    ├── repository
    ├── entity
    └── OrderManagementApplication.java

frontend/
└── src/
    ├── components
    ├── pages
    ├── api
    └── App.jsx


---

## ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Prerequisites
- Java 17+
- Maven installed

### 2️⃣ Run Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run

Backend url : http://localhost:8080

## 💻 Frontend Setup (React + Vite + Material UI)

The frontend is built using **React (Vite)** and styled with **Material UI (MUI)** for a modern and responsive UI.

---

### 📌 Prerequisites
Make sure you have installed:
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

---

### 📥 1. Clone the Project (if not already done)
```bash
git clone <your-repo-url>
cd food-order-management/frontend

npm install
npm run dev

Frontend url : http://localhost:5173
