
import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-ozonxt-blue-dark">{product.name}</h3>
          <p className="text-gray-600 mt-1">{product.tagline}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-2xl font-bold text-ozonxt-blue-dark">₹{product.price.toLocaleString('en-IN')}</p>
            <span className="text-ozonxt-blue-light font-semibold group-hover:underline">View Details →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
