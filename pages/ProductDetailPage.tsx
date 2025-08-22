
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../types';
import { getProductById } from '../services/firebaseService';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        const prod = await getProductById(id);
        setProduct(prod || null);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-8 text-center">Loading product details...</div>;
  }

  if (!product) {
    return <div className="container mx-auto p-8 text-center">Product not found.</div>;
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-lg" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-ozonxt-blue-dark">{product.name}</h1>
            <p className="text-lg text-gray-500 mt-2">{product.tagline}</p>
            <p className="text-4xl font-bold text-ozonxt-blue-dark my-6">₹{product.price.toLocaleString('en-IN')}</p>
            
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            
            <div className="mt-8">
                <button className="w-full bg-ozonxt-blue-dark text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-ozonxt-blue-light transition-colors duration-300">
                    Buy Now
                </button>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-ozonxt-blue-dark mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-ozonxt-blue-dark mb-4">Specifications</h3>
               <div className="bg-ozonxt-gray rounded-lg p-4">
                 <ul className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="py-3 flex justify-between text-sm">
                        <span className="font-medium text-gray-600">{spec.key}</span>
                        <span className="text-gray-800">{spec.value}</span>
                      </li>
                    ))}
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
