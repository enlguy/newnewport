'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  setShowDropdown(true);
};

const handleMouseLeave = () => {
  const timeout = setTimeout(() => {
    setShowDropdown(false);
  }, 200);
  setHideTimeout(timeout);
};

  // Close mobile menu on route change (optional)
  useEffect(() => {
    const handleRouteChange = () => setIsMobileOpen(false);
    // Assuming you're using Next.js router
    // router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const navItems: Array<{
  href?: string;
  label: string;
  children?: Array<{
    href: string;
    label: string;
    external?: boolean;
  }>;
}> = [
    { href: '/', label: 'Home' },
    {
      label: 'Business Services',
      children: [
        { href: 'https://hubprosper.com/', label: 'HubProsper', external: true },
        { href: 'https://normlz.com', label: 'NORMLZ', external: true },
        { href: '/business-services/webdev', label: 'Web Development' },
      ],
    },
    {
      label: 'Individual Services',
      children: [
        { href: '/individual-services/tutoring', label: 'Tutoring' },
        { href: '/individual-services/cat-house-sitting', label: 'Pet & House Sitting' },
      ],
    },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-brand-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-brand hover:text-brand-rust transition-colors font-sans">
            Jack Epner
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) =>
              typeof item === 'string' ? null : (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href || '#'}
                    className="px-3 py-2 text-foreground font-medium rounded-lg hover:text-brand hover:bg-brand/5 transition-all duration-200 flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <div className={`absolute top-full left-0 pt-2 w-56 bg-background border border-brand-border rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 pointer-events-none group-hover:pointer-events-auto ${hoveredItem === item.label ? 'opacity-100 visible' : ''}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          target={child.external ? '_blank' : '_self'}
                          rel={child.external ? 'noopener noreferrer' : undefined}
                          className="block px-6 py-3 text-foreground hover:text-brand hover:bg-brand-peach transition-all duration-150 delay-100 first:rounded-t-2xl last:rounded-b-2xl"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background border-t border-brand-border">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-2">
                  <span className="font-semibold text-brand-muted px-3 py-2 block">{item.label}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      target={child.external ? '_blank' : '_self'}
                      rel={child.external ? 'noopener noreferrer' : undefined}
                      className="block px-6 py-3 rounded-xl bg-brand-peach/20 hover:bg-brand/20 hover:text-brand transition-all duration-200"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block px-6 py-3 rounded-xl hover:bg-brand/10 hover:text-brand transition-all duration-200 font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
