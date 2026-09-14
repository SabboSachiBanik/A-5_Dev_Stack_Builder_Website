# Development Stack

## 📌 A little description

Easily can add and remove stack and learn this technology.

## 🛠️ Technology that you use

- React
- TypeScript
- JavaScript
- TailwindCSS

## ✨ 3 Features about your project

- Add Stack
- Remove Stact (Single, All)
- Sticky Header

---

# ❓ Questions & Answers

## 1. What is JSX, and why is it used in React?

Syntax like html, it is used in react because supported syntax

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage changing data inside a component.

## 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in React. I used it in this project to store and manage the selected technologies in the stack.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

I did not use the `useEffect` hook in this project. I used `fetch()` to load the JSON data and React `use()` to read the data promise.

## 5. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list and efficiently update the UI when items change.

## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing something in the UI based on a condition. I used it to show the empty stack message when no technology is selected.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. A child can send something back to the parent by calling a function passed through props.

---

# ⚙️ Technology I Use

- React.js
- Tailwind CSS
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)