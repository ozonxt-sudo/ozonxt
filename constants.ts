
import type { Product, Testimonial, FAQ, OrderStatus } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'ozonxt-crystal-pro',
    name: 'Ozonxt Crystal Pro',
    price: 18999,
    imageUrl: 'https://picsum.photos/seed/purifier1/600/600',
    tagline: '8-Stage Purification with Active Copper',
    description: 'Experience unparalleled water purity with the Ozonxt Crystal Pro. Its advanced 8-stage purification process, including RO, UV, and UF, ensures that every drop of water is safe, healthy, and tastes great. The added Active Copper technology enhances the water with essential minerals.',
    features: [
      'Advanced RO + UV + UF Purification',
      'Active Copper Technology for mineral enrichment',
      'Smart LED Indicators for filter life and service',
      '10-liter large storage capacity',
      'Elegant, premium design to match modern kitchens'
    ],
    specifications: [
      { key: 'Purification Stages', value: '8' },
      { key: 'Storage Capacity', value: '10 Liters' },
      { key: 'Technology', value: 'RO, UV, UF, Active Copper' },
      { key: 'Power Consumption', value: '60 Watts' },
      { key: 'Dimensions', value: '45cm x 35cm x 25cm' },
    ],
  },
  {
    id: 'ozonxt-aqua-zen',
    name: 'Ozonxt Aqua Zen',
    price: 14500,
    imageUrl: 'https://picsum.photos/seed/purifier2/600/600',
    tagline: 'Compact Design, Powerful Performance',
    description: 'The Ozonxt Aqua Zen is perfect for modern homes where space is a premium. Don\'t let its compact size fool you; it packs a powerful 6-stage purification system that removes all impurities, providing you with pure and safe drinking water every time.',
    features: [
      '6-Stage RO + UV Purification',
      'Mineralizer Technology',
      'Space-saving compact design',
      '7-liter storage tank',
      'Leak-proof performance'
    ],
    specifications: [
      { key: 'Purification Stages', value: '6' },
      { key: 'Storage Capacity', value: '7 Liters' },
      { key: 'Technology', value: 'RO, UV, Mineralizer' },
      { key: 'Power Consumption', value: '55 Watts' },
      { key: 'Dimensions', value: '40cm x 30cm x 22cm' },
    ],
  },
    {
    id: 'ozonxt-element-plus',
    name: 'Ozonxt Element Plus',
    price: 22500,
    imageUrl: 'https://picsum.photos/seed/purifier3/600/600',
    tagline: 'Alkaline Water for a Healthier Lifestyle',
    description: 'Elevate your health with the Ozonxt Element Plus. This purifier not only cleans your water but also enhances it by increasing the pH level to provide alkaline water. Its 9-stage purification system ensures the highest quality output for your family.',
    features: [
      '9-Stage Purification with Alkaline Technology',
      'Smart Digital Display',
      'RO + UV + UF + TDS Control',
      'Maintains essential minerals',
      '12-liter extra-large storage capacity'
    ],
    specifications: [
      { key: 'Purification Stages', value: '9' },
      { key: 'Storage Capacity', value: '12 Liters' },
      { key: 'Technology', value: 'RO, UV, UF, Alkaline' },
      { key: 'Power Consumption', value: '65 Watts' },
      { key: 'Dimensions', value: '50cm x 40cm x 28cm' },
    ],
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, IN',
    quote: 'The Ozonxt Crystal Pro is fantastic. The water tastes so much better, and the design looks so premium in my kitchen. The installation was seamless too!',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 2,
    name: 'Rajeev Kumar',
    location: 'Bangalore, IN',
    quote: 'I was looking for a reliable water purifier, and Ozonxt delivered. The customer support was helpful in choosing the right model. Highly recommended.',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 3,
    name: 'Anjali Desai',
    location: 'Delhi, IN',
    quote: 'Peace of mind in a box. Knowing my family is drinking safe water is priceless. The Aqua Zen model is perfect for our small apartment.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

export const MOCK_FAQS: FAQ[] = [
    {
        id: 1,
        question: "How often do I need to change the filters?",
        answer: "We recommend changing the filters every 6-12 months, depending on your water quality and usage. Your Ozonxt purifier's smart indicators will also alert you when it's time for a replacement."
    },
    {
        id: 2,
        question: "What is the warranty period for Ozonxt purifiers?",
        answer: "All Ozonxt water purifiers come with a comprehensive 1-year warranty on all parts, except for consumable filters. We also offer an extended warranty plan for added peace of mind."
    },
    {
        id: 3,
        question: "Is installation included with the purchase?",
        answer: "Yes, free installation is provided by our authorized technicians for all new Ozonxt water purifiers. You can schedule your installation by contacting our customer support after delivery."
    },
    {
        id: 4,
        question: "What is Active Copper Technology?",
        answer: "Active Copper Technology infuses copper ions into the water, which has several health benefits, including improved digestion and immunity. It ensures you get not just pure but healthy water."
    }
];

export const MOCK_ORDER_STATUSES: { [key: string]: OrderStatus } = {
    'OZ12345678': {
        orderId: 'OZ12345678',
        status: 'Out for Delivery',
        estimatedDelivery: 'Today, by 8:00 PM',
        updates: [
            { date: 'Oct 26, 2023', status: 'Out for Delivery', location: 'Local Hub, Bangalore' },
            { date: 'Oct 25, 2023', status: 'Shipped', location: 'Mumbai Warehouse' },
            { date: 'Oct 24, 2023', status: 'Processing', location: 'Mumbai' },
        ]
    },
    'OZ87654321': {
        orderId: 'OZ87654321',
        status: 'Delivered',
        estimatedDelivery: 'Delivered on Oct 22, 2023',
         updates: [
            { date: 'Oct 22, 2023', status: 'Delivered', location: 'Your address, Delhi' },
            { date: 'Oct 21, 2023', status: 'Out for Delivery', location: 'Local Hub, Delhi' },
            { date: 'Oct 20, 2023', status: 'Shipped', location: 'Mumbai Warehouse' },
        ]
    }
};
