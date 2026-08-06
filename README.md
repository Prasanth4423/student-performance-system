# 🎓 Student Performance & Career Guidance System

A full-stack web application developed using **React.js**, **Django REST Framework**, and **MySQL** to help students manage their academic performance, attendance, and receive personalized career guidance based on their performance.

---

## 📌 Project Overview

The **Student Performance & Career Guidance System** is designed to simplify academic management for students. It allows students to register, log in securely, manage their profiles, record subject-wise marks and attendance, analyze academic performance, and receive career recommendations based on their overall results.

---

## ✨ Features

- 🏠 Modern Home Page
- 👤 Student Registration
- 🔐 Secure Student Login
- 🔑 Forgot Password
- 📊 Student Dashboard
- 👨‍🎓 Profile Management
- 📝 Add Subject-wise Marks
- 📅 Add Attendance
- 📈 Performance Analysis
- 💼 Career Guidance
- 📱 Responsive Design
- 🔒 Password Encryption using Django Hashing

---

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Bootstrap 5
- Axios
- HTML5
- CSS3

### Backend
- Python
- Django
- Django REST Framework

### Database
- MySQL

### Tools
- Visual Studio Code
- Git
- GitHub
- Postman

---

## 📂 Project Structure

```text
student-performance-system/
│
├── backend/
│   ├── api/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Prasanth4423/student-performance-system.git

cd student-performance-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

### 3️⃣ Frontend Setup

Open a new terminal.

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173/
```

---

## 💻 Modules

### Student

- Registration
- Login
- Forgot Password
- Profile Management

### Academic

- Add Marks
- Add Attendance
- Performance Analysis

### Career

- Career Suggestions
- Recommended Skills

---

## 🔒 Security Features

- Password hashing using Django
- Input validation
- Secure REST APIs
- Environment variables using `.env`

---

## 📊 Dashboard Features

- Average Marks
- Attendance Percentage
- Overall Performance
- Career Recommendation


## 🔮 Future Enhancements

- Admin Dashboard
- Student Profile Picture Upload
- Performance Charts
- Email Notifications
- PDF Report Generation
- Placement Recommendation System
- AI-based Career Prediction

---

## 👨‍💻 Author

**Nakkana Leela Prasanth**

- GitHub: https://github.com/Prasanth4423

---

## ⭐ Repository

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is developed for educational and learning purposes.
