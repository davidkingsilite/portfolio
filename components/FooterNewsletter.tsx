// components/FooterNewsletter.tsx
'use client';

import { useState } from 'react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setMessage('');


    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
        
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setMessage(data.message); // Message like "Already subscribed"
      } else throw new Error(data.message || 'something went wrong');
    } catch (err: unknown) {
      const error = err as Error;
      setStatus('error');
      setMessage(error.message || 'Error submitting email');
    }    
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 font-bevietnam">
      <input
        type="email"
        required
        placeholder="Email Goes here"
        className="px-4 py-2 border border-gray-600 bg-transparent text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}
      {/* { status === 'success' && <p className="text-green-400">Subscribed successfully!</p>}
      {status === 'error' && <p className="text-red-500">Failed to subscribe. Try again.</p>} */}
    </form>
  );
}
