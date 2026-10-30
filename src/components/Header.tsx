import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X as CloseIcon } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/machinery';

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/machines', label: 'Machines' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      {/* Top Bar for Desktop */}
      <div className="hidden bg-steel text-steel-muted md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" />
              {COMPANY_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" />
              {COMPANY_INFO.email}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <svg className="h-3.5 w-3.5 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Page
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {COMPANY_INFO.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground ${
                  isActive
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="hidden rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition hover:brightness-105 sm:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 lg:hidden text-foreground"
          >
            {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 font-semibold text-base ${
                    isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={COMPANY_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 font-semibold text-base flex items-center gap-2 text-primary"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Page
            </a>
            <Link
              to="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center font-bold text-primary-foreground shadow-glow"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
