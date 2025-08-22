
import React, { useState } from 'react';
import type { OrderStatus } from '../types';
import { getOrderStatus } from '../services/firebaseService';

const OrderTrackingPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<OrderStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    setLoading(true);
    const orderStatus = await getOrderStatus(orderId);
    setStatus(orderStatus);
    setLoading(false);
  };

  const getStatusColor = (currentStatus: OrderStatus['status']) => {
    switch(currentStatus) {
        case 'Delivered': return 'bg-green-500';
        case 'Shipped':
        case 'Out for Delivery': return 'bg-blue-500';
        case 'Processing': return 'bg-yellow-500';
        default: return 'bg-gray-500';
    }
  }

  return (
    <div className="bg-ozonxt-gray min-h-[calc(100vh-200px)] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-ozonxt-blue-dark">Track Your Order</h1>
          <p className="text-center text-gray-600 mt-2">Enter your order ID to see the latest updates.</p>
          <form onSubmit={handleTrackOrder} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID (e.g., OZ12345678)"
              className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ozonxt-blue-light"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-ozonxt-blue-dark text-white font-semibold py-3 px-6 rounded-md hover:bg-ozonxt-blue-light transition-colors disabled:bg-gray-400"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </form>

          {status && (
            <div className="mt-10 animate-fade-in">
              {status.status === 'Not Found' ? (
                <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">
                  Order with ID "{status.orderId}" not found. Please check the ID and try again.
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold text-ozonxt-blue-dark">Order Status: <span className="text-ozonxt-blue-light">{status.status}</span></h2>
                  <p className="text-gray-600">Order ID: #{status.orderId}</p>
                  {status.estimatedDelivery && <p className="text-gray-600">Estimated Delivery: {status.estimatedDelivery}</p>}
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
                     <div className={`${getStatusColor(status.status)} h-2.5 rounded-full`} style={{ width: status.status === 'Processing' ? '25%' : status.status === 'Shipped' ? '50%' : status.status === 'Out for Delivery' ? '75%' : '100%' }}></div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Updates:</h3>
                    <ul className="space-y-4 border-l-2 border-gray-200 ml-2">
                        {status.updates.map((update, index) => (
                            <li key={index} className="relative pl-6">
                                <span className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full ${index === 0 ? 'bg-ozonxt-blue-light ring-4 ring-white' : 'bg-gray-300'}`}></span>
                                <p className={`font-semibold ${index === 0 ? 'text-ozonxt-blue-dark' : 'text-gray-800'}`}>{update.status}</p>
                                <p className="text-sm text-gray-500">{update.location}</p>
                                <p className="text-sm text-gray-400">{update.date}</p>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
