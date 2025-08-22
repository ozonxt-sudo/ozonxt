
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Product, Testimonial } from '../types';
import { getProducts, getTestimonials } from '../services/firebaseService';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await getProducts();
      setProducts(prods.slice(0, 3)); // Show top 3 featured products
      const tests = await getTestimonials();
      setTestimonials(tests);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-ozonxt-blue-dark text-white h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/bgwater/1920/1080" className="w-full h-full object-cover opacity-30" alt="Clean water background" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Purity in Every Drop</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Experience the future of water purification with Ozonxt. Advanced technology for a healthier, premium lifestyle.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-ozonxt-blue-light text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-ozonxt-blue-light transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-ozonxt-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ozonxt-blue-dark">Our Premium Range</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.length > 0 ? (
                products.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
                <p>Loading products...</p>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ozonxt-blue-dark">Why Ozonxt?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="flex justify-center items-center h-16 w-16 bg-ozonxt-blue-light text-white rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ozonxt-blue-dark">Unmatched Purity</h3>
              <p className="mt-2 text-gray-600">Our multi-stage purification process removes all harmful contaminants.</p>
            </div>
             <div className="p-6">
              <div className="flex justify-center items-center h-16 w-16 bg-ozonxt-blue-light text-white rounded-full mx-auto">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ozonxt-blue-dark">Premium Service</h3>
              <p className="mt-2 text-gray-600">Enjoy hassle-free installation and prompt customer support.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center items-center h-16 w-16 bg-ozonxt-blue-light text-white rounded-full mx-auto">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 0 7.5 21h9a2.25 2.25 0 0 0 2.25-2.25m-9.375-3.875a3 3 0 0 0 5.78 0m0 0a3 3 0 0 0-5.78 0M6.75 5.25h10.5a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25Z" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ozonxt-blue-dark">Innovative Design</h3>
              <p className="mt-2 text-gray-600">Sleek, modern purifiers that complement your home's aesthetic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-ozonxt-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ozonxt-blue-dark">What Our Customers Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.length > 0 ? (
                testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)
            ) : (
                <p>Loading testimonials...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
