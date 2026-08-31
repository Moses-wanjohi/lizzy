import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import SellersPage from './pages/SellersPage';
import AboutPage from './pages/AboutPage';
import SellersDashboardPage from './pages/SellersDashboardPage';
import { CartProvider } from './context/CartContext'; 
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/sellers" element={<SellersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/dashboard" element={<SellersDashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;