
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  tagline: string;
  description: string;
  features: string[];
  specifications: { key: string; value: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface OrderStatus {
  orderId: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Not Found';
  estimatedDelivery?: string;
  updates: { date: string; status: string; location: string }[];
}
