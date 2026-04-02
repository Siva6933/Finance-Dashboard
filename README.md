# 💰 Finance Dashboard UI

## 📌 Objective

This project is a **Finance Dashboard UI** developed to demonstrate frontend development skills such as UI design, component structuring, and state management.

The goal is to build a clean, interactive interface that helps users:

* Track financial activity
* Explore transactions
* Understand spending patterns

---

## 🚀 Project Overview

The application simulates a simple financial dashboard where users can view their balance, analyze spending, and manage transactions.

This project focuses entirely on the **frontend**, using mock data and simulated API behavior.

---

## ✨ Features Implemented

---

### 📊 1. Dashboard Overview

* Summary cards:

  * Total Income
  * Total Expenses
  * Current Balance
* Visualizations:

  * Spending breakdown (categorical chart)
  * Time-based insights (basic trend logic)
* Responsive layout using grid system

---

### 📋 2. Transactions Section

* Displays transaction details:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)

#### Functionalities:

* Filter by:

  * All
  * Income
  * Expense
* Search by category
* Hover interactions for better UX

---

### 👥 3. Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can only view data

* **Admin**

  * Can edit/delete transactions (UI simulation)

* Role switching implemented via toggle button

---

### 💡 4. Insights Section

* Displays:

  * Highest spending category
  * Total amount spent in that category
* Provides simple financial observations based on data

---

### 🧠 5. State Management

State is managed using **React Context API**.

#### Managed States:

* Transactions data
* Filters (income/expense/all)
* Selected role (admin/viewer)

#### Benefits:

* Centralized state management
* Avoids prop drilling
* Clean and scalable structure

---

## 🎨 6. UI / UX Design

* Clean and minimal layout
* Responsive design (mobile + desktop)
* Smooth transitions and hover effects
* Proper spacing and readability
* Handles empty data cases gracefully

---

## 🌙 Optional Enhancements Implemented

### 🌙 Dark Mode

* Toggle between light and dark themes
* Improves accessibility and user experience

---

### 💾 Data Persistence (Local Storage)

* Transactions saved in browser storage
* Data remains after page refresh

---

### 🔌 Mock API Integration

* Simulated API calls using `setTimeout`
* Mimics real-world backend behavior

---

### 📤 Export Functionality

* Export transactions as:

  * JSON file
  * CSV file

---

### 🔍 Advanced Filtering

* Filter by transaction type
* Search by category name

---

### ✨ Animations & Transitions

* Card hover effects (scale + shadow)
* Button hover transitions
* Smooth page switching

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **State Management:** Context API
* **Data Handling:** LocalStorage + Mock Data

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Charts.jsx
│
├── context/
│   └── AppContext.jsx
│
├── data/
│   └── mockdata.js
│
├── pages/
│   ├── Dashboard.jsx
│   └── Transactions.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone <(https://github.com/Siva6933/Finance-Dashboard)>
```

2. Navigate to project folder:

```
cd finance-dashboard
```

3. Install dependencies:

```
npm install
```

4. Run the project:

```
npm run dev
```

---

## 📱 Responsiveness

* Fully responsive layout
* Works on:

  * Desktop
  * Tablet
  * Mobile devices

---

## 🎯 Design Approach

* Component-based architecture
* Reusable UI components
* Simple and intuitive navigation
* Focus on user-friendly interactions

---

## 🧠 Key Learnings

* Implementing state management using Context API
* Handling UI logic based on roles
* Working with localStorage for persistence
* Designing responsive layouts using Tailwind CSS
* Enhancing UX using animations and transitions

---

## 🔮 Future Improvements

* Backend integration (Node.js / Firebase)
* Authentication system
* Real-time transaction updates
* Advanced analytics and reports

---

## 📌 Conclusion

This project demonstrates the ability to design and build a functional, interactive, and user-friendly finance dashboard using modern frontend technologies.

It showcases strong understanding of:

* UI/UX design
* State management
* Component architecture
* Real-world feature implementation

---

## 🙌 Author

MUNAGALA SIVA BALAJI
