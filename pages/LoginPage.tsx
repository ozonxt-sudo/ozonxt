
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithProvider, forgotPassword } from '../services/firebaseService';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const result = await loginWithEmail(email, password);
    setLoading(false);
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => navigate('/'), 1500);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  const handleProviderLogin = async (provider: 'google' | 'facebook') => {
    setLoading(true);
    setMessage(null);
    const result = await loginWithProvider(provider);
    setLoading(false);
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setTimeout(() => navigate('/'), 1500);
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };
  
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const result = await forgotPassword(email);
    setLoading(false);
    if (result.success) {
      setMessage({ type: 'info', text: result.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ozonxt-gray">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
           <Link to="/" className="text-4xl font-bold text-ozonxt-blue-dark">
            Ozon<span className="text-ozonxt-blue-light">xt</span>
           </Link>
           <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            {isForgotPassword ? 'Reset Password' : 'Welcome Back'}
           </h2>
        </div>
        
        {message && (
          <div className={`p-3 rounded-md mb-4 text-center text-sm ${
              message.type === 'success' ? 'bg-green-100 text-green-800' :
              message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
            {message.text}
          </div>
        )}

        {isForgotPassword ? (
            <form onSubmit={handleForgotPassword}>
              <p className="text-center text-gray-600 mb-4">Enter your email to receive a password reset link.</p>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ozonxt-blue-light focus:border-ozonxt-blue-light" />
                </div>
                 <div className="mt-6">
                  <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ozonxt-blue-dark hover:bg-ozonxt-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ozonxt-blue-light disabled:bg-gray-400">
                    {loading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
                 <div className="text-center mt-4">
                    <button onClick={() => setIsForgotPassword(false)} className="text-sm text-ozonxt-blue-light hover:underline">Back to Login</button>
                </div>
            </form>
        ) : (
             <>
             <form onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ozonxt-blue-light focus:border-ozonxt-blue-light" />
                </div>
                <div className="mt-4">
                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ozonxt-blue-light focus:border-ozonxt-blue-light" />
                </div>

                <div className="flex items-center justify-end mt-4">
                  <div className="text-sm">
                    <button onClick={() => setIsForgotPassword(true)} className="font-medium text-ozonxt-blue-light hover:underline">Forgot your password?</button>
                  </div>
                </div>

                <div className="mt-6">
                  <button type="submit" disabled={loading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ozonxt-blue-dark hover:bg-ozonxt-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ozonxt-blue-light disabled:bg-gray-400">
                    {loading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <button onClick={() => handleProviderLogin('google')} disabled={loading} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                    Google
                  </button>
                </div>
                <div>
                  <button onClick={() => handleProviderLogin('facebook')} disabled={loading} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
