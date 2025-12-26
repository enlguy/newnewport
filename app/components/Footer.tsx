"use client"

import { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

      async function submitToMailerLite(formData: FormData) {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ${process.env.MAILER_LITE_API}`',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        fields: {
          service: formData.get('service'),
          source: 'jackepner.com footer'
        },
        groups: [process.env.MAILERLITE_GROUP_ID]
      }),
    });
    return response.json();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
     console.log('Form submitted!'); // ← Check browser console
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    console.log('Form data:', Object.fromEntries(formData)); // ← See form values
    const result = await submitToMailerLite(formData);
    console.log('API response:', result); // ← See MailerLite response

    if (result.success) {
      setMessage('Thanks! Added to my list—reply coming soon.');
      e.currentTarget.reset();
    } else {
      setMessage('Oops, try the contact page.');
    }
    setLoading(false);
  }

  return (
    <footer className="bg-foreground/5 border-t border-brand-border/50 pt-16 pb-12 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Left: Brand + Availability */}
        <div>
          <Link href="/" className="text-2xl font-bold text-brand mb-4 block hover:text-brand-rust transition-colors">
            Jack Epner
          </Link>
          <p className="text-brand-muted text-sm mb-8 leading-relaxed max-w-xs">
            Helping businesses, learners, and pets thrive.
          </p>
          
          {/* Availability - moved from hero */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-lg border border-brand-border">
            <div className="w-10 h-10 bg-brand-peach rounded-xl flex items-center justify-center">
              <span className="text-lg">✓</span>
            </div>
            <div>
              <p className="text-xs font-bold text-brand-muted uppercase tracking-wide">Availability</p>
              <p className="font-semibold text-foreground text-sm">Accepting new clients</p>
            </div>
          </div>
        </div>

        {/* Center: Quick Nav */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
          <nav className="space-y-2">
            <Link href="/" className="block text-brand-muted hover:text-brand text-sm transition-colors">Home</Link>
            <Link href="/business-services" className="block text-brand-muted hover:text-brand text-sm transition-colors">Business Services</Link>
            <Link href="/individual-services" className="block text-brand-muted hover:text-brand text-sm transition-colors">Individual Services</Link>
            <Link href="/about" className="block text-brand-muted hover:text-brand text-sm transition-colors">About</Link>
            <Link href="/contact" className="block text-brand-muted hover:text-brand text-sm transition-colors">Contact</Link>
          </nav>
        </div>
{/* Right: Contact Form Teaser + Socials */}
<div className="lg:text-right">
  <h3 className="text-lg font-semibold text-foreground mb-6">Let&apos;s talk</h3>
  
  {/* Mini contact form - no email/phone needed */}
  <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-lg mb-8">
    <form action="/api/contact" method="POST" className="space-y-4">
      <select name="service" required className="w-full p-3 border border-brand-border rounded-xl text-sm focus:ring-2 focus:ring-brand-terracotta focus:border-transparent">
        <option value="">I&apos;m interested in...</option>
        <option value="hubprosper">Business Services (HubProsper)</option>
        <option value="normlz">Business Services (NORMLZ)</option>
        <option value="tutoring">Tutoring</option>
        <option value="sitting">Cat & House Sitting</option>
        <option value="general">General inquiry</option>
      </select>
      <input
        name="email" 
        type="email" 
        placeholder="your@gmail.com" 
        className="w-full p-3 border border-brand-border rounded-xl text-sm focus:ring-2 focus:ring-brand-terracotta focus:border-transparent"
        required
      />
      <button 
        type="submit"
        className="w-full px-6 py-3 bg-brand-terracotta text-white rounded-xl font-semibold text-sm shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200"
      >
        Send message
      </button>
    </form>
    <p className="text-xs text-brand-muted mt-3 text-center">
      Your info stays private. Reply within 24 hours.
    </p>
  </div>
  
  <div className="flex space-x-4 pt-4 border-t border-brand-border/50 justify-center lg:justify-end">
    <a href="https://linkedin.com/in/jack-epner" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand hover:bg-brand-terracotta hover:text-white transition-all shadow-md">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {/* LinkedIn icon SVG */}
      </svg>
    </a>
    <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand hover:bg-brand-terracotta hover:text-white transition-all shadow-md">
      {/* GitHub icon */}
    </a>
  </div>
</div>
</div>
      {/* Copyright */}
      <div className="border-t border-brand-border/30 pt-8 mt-12">
        <p className="text-center text-brand-muted text-sm">
          © 2025 Jack Epner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
