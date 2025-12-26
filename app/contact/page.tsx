"use client";

import { useState, FormEvent } from "react";
import NavBar from "../components/NavBar";

type InquiryType = 'tutoring' | 'house-sitting' | 'general';

export default function ContactPage() {
  const today = new Date().toISOString().split('T')[0];
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [senderName, setSenderName] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const currentForm = e.currentTarget;
    const formData = new FormData(currentForm);
    const nameValue = formData.get('name') as string;
    setSenderName(nameValue || "there");
    
    formData.append('service', inquiryType);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        currentForm.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      
      <section className="pt-32 pb-24 lg:pt-40 bg-gradient-to-b from-brand-peach/10 to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-brand to-brand-rust bg-clip-text text-transparent">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-foreground/70">
              Whether it&apos;s for your child&apos;s education or your home&apos;s security, 
              I&apos;m here to provide a reliable, professional solution.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-brand-peach/20">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="text-6xl mb-6">✉️</div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Message Sent!</h2>
                <p className="text-xl text-foreground/70 mb-8">
                  Thanks for reaching out, {senderName}! I&apos;ve received your details and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-brand text-background font-bold rounded-xl hover:bg-brand-rust transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-foreground/60">Full Name</label>
                    <input 
                      required 
                      name="name" 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-foreground/60">Email Address</label>
                    <input 
                      required 
                      name="email" 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none transition-all" 
                    />
                  </div>
                </div>

                {/* Inquiry Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/60">Reason for reaching out</label>
                  <select 
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="tutoring">Academic Tutoring / Test Prep</option>
                    <option value="house-sitting">Global House & Pet Sitting</option>
                  </select>
                </div>

                {/* Dynamic Tutoring Fields */}
                {inquiryType === 'tutoring' && (
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-brand/5 rounded-2xl border border-brand/10 animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand">Subject (e.g. ACT Prep)</label>
                      <input name="subject" type="text" className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand">Grade Level</label>
                      <input name="grade" type="text" className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none" />
                    </div>
                  </div>
                )}

                {/* Dynamic House Sitting Fields */}
                {inquiryType === 'house-sitting' && (
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-brand-rust/5 rounded-2xl border border-brand-rust/10 animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-rust">Start Date</label>
                      <input required name="dates_start" min={today} type="date" className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand-rust outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-rust">End Date</label>
                      <input 
                      required
                      name="dates_end" 
                      type="date" 
                      min={today}
                      className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand-rust outline-none appearance-none" 
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-brand-rust">Location & Pets</label>
                      <input name="location" type="text" placeholder="e.g. London, 1 Golden Retriever" className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand-rust outline-none" />
                    </div>
                  </div>
                )}

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/60">How can I help you?</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required={inquiryType === 'general'}
                    className="w-full px-4 py-3 rounded-xl border border-brand-peach/30 bg-background focus:ring-2 focus:ring-brand outline-none transition-all resize-none"
                    placeholder="Provide a few details here..."
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-4 bg-brand text-background font-bold text-lg rounded-2xl hover:bg-brand-rust transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : 'Send Message →'}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-center font-medium animate-pulse">
                    Something went wrong. Please check your connection or try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}