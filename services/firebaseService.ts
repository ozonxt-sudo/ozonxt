
import type { Product, Testimonial, FAQ, OrderStatus } from '../types';
import { MOCK_PRODUCTS, MOCK_TESTIMONIALS, MOCK_FAQS, MOCK_ORDER_STATUSES } from '../constants';

const simulateDelay = <T,>(data: T, delay: number = 500): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

export const getProducts = (): Promise<Product[]> => {
  return simulateDelay(MOCK_PRODUCTS);
};

export const getProductById = (id: string): Promise<Product | undefined> => {
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  return simulateDelay(product);
};

export const getTestimonials = (): Promise<Testimonial[]> => {
  return simulateDelay(MOCK_TESTIMONIALS);
};

export const getFaqs = (): Promise<FAQ[]> => {
  return simulateDelay(MOCK_FAQS);
};

export const getOrderStatus = (orderId: string): Promise<OrderStatus> => {
  const status = MOCK_ORDER_STATUSES[orderId.toUpperCase()] || {
    orderId,
    status: 'Not Found',
    updates: [],
  };
  return simulateDelay(status, 1000);
};

export const loginWithEmail = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
  await simulateDelay(null, 1000);
  if (email === "test@ozonxt.com" && password === "password123") {
    return { success: true, message: "Login successful!" };
  }
  return { success: false, message: "Invalid email or password." };
};

export const loginWithProvider = async (provider: 'google' | 'facebook'): Promise<{ success: boolean; message: string }> => {
  await simulateDelay(null, 1500);
  return { success: true, message: `Successfully logged in with ${provider}.` };
};

export const forgotPassword = async (email: string): Promise<{ success: boolean; message: string }> => {
  await simulateDelay(null, 1000);
  console.log(`Password reset link sent to ${email}`);
  return { success: true, message: `If an account with ${email} exists, a password reset link has been sent.` };
};
