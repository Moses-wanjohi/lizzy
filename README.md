# Lizzy — Luxury Fashion E-Commerce

A modern, high-fashion e-commerce web application built with **React**, **Tailwind CSS**, and **React Context API**. Lizzy provides a seamless luxury shopping experience featuring dynamic department categorization, live inventory state management, quick cart interaction, and a dedicated seller upload workflow.

🌐 **Live Demo:** [https://lizzy-seven.vercel.app](https://lizzy-seven.vercel.app)

---

## ✨ Key Features

* **Dynamic Catalog & Department Filtering:** Switch effortlessly between Women, Men, and Children collections with real-time UI state updates.
* **Interactive Shopping Cart:** Full cart management (`useCart`) supporting instant "Quick Add", quantity adjustments, and persistent state across page reloads.
* **Global Product Context:** Centralized state management (`useProducts`) powered by React Context and `localStorage` to handle both initial static collections and user-uploaded products.
* **Seller Portal Integration:** Allows vendors and admins to publish new garments with custom titles, images, categories, prices, and department tagging directly to the catalog.
* **Editorial Dark Theme Design:** Hand-crafted UI using Tailwind CSS with gold accent colors (`#D4AF37`), sleek grid systems, and smooth hover micro-interactions.
* **Single-Page Application (SPA) Routing:** Powered by `react-router-dom` with Vercel deployment rewrite rules to eliminate 404 page reloads on secondary routes.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router
* **Styling:** Tailwind CSS, PostCSS
* **State Management:** React Context API (`ProductContext`, `CartContext`)
* **Build Tool:** Vite / Create React App
* **Deployment & Hosting:** Vercel

---

## 📁 Project Structure

```text
lizzy/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, etc.)
│   ├── context/            # React Context providers (CartContext, ProductContext)
│   ├── pages/              # Route components (HomePage, SellerPage, CartPage, etc.)
│   ├── App.jsx             # Main Application layout & Router setup
│   └── main.jsx            # React root mount
├── vercel.json             # Vercel SPA routing configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation