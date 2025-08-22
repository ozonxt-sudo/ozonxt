
import React, { useState, useEffect } from 'react';
import type { FAQ } from '../types';
import { getFaqs } from '../services/firebaseService';
import FAQItem from '../components/FAQItem';

const SupportPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      const faqsData = await getFaqs();
      setFaqs(faqsData);
      setLoading(false);
    };
    fetchFaqs();
  }, []);

  return (
    <div>
        <div className="bg-ozonxt-gray py-12">
            <div className="container mx-auto px-6">
                 <h1 className="text-4xl font-bold text-ozonxt-blue-dark">Support Center</h1>
                 <p className="mt-2 text-lg text-gray-600">We're here to help. Find answers to your questions below.</p>
            </div>
        </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-ozonxt-blue-dark mb-6">Frequently Asked Questions</h2>
            {loading ? (
              <p>Loading FAQs...</p>
            ) : (
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="bg-ozonxt-blue-dark text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Can't find an answer?</h2>
                <p className="text-gray-300 mb-6">Our support team is ready to assist you. Reach out to us for any queries.</p>
                
                <div className="space-y-4">
                    <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 mt-1 text-ozonxt-blue-light"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                        <div>
                            <h4 className="font-semibold">Call Us</h4>
                            <a href="tel:18001234567" className="hover:underline">1800-123-4567</a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 mt-1 text-ozonxt-blue-light"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        <div>
                            <h4 className="font-semibold">Email Us</h4>
                            <a href="mailto:support@ozonxt.com" className="hover:underline">support@ozonxt.com</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
