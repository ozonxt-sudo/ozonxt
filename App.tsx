
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import SupportPage from './pages/SupportPage';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout />
    </HashRouter>
  );
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen font-sans">
      {!isLoginPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/track-order" element={<OrderTrackingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      {!isLoginPage && <ChatWidget />}
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default App;
