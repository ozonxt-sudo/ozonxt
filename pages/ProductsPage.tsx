
import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import { getProducts } from '../services/firebaseService';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const prods = await getProducts();
      setProducts(prods);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
        <div className="bg-ozonxt-gray py-12">
            <div className="container mx-auto px-6">
                 <h1 className="text-4xl font-bold text-ozonxt-blue-dark">Our Products</h1>
                 <p className="mt-2 text-lg text-gray-600">Find the perfect water purifier for your home.</p>
            </div>
        </div>
      <div className="container mx-auto px-6 py-16">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
