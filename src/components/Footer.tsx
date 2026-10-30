import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, CATEGORIES } from '../data/machinery';
import { NAV_LINKS } from './Header';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-steel-gradient text-steel-muted">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm leading-relaxed">
            Your trusted partner for notebook manufacturing, offset printing and paper processing
            machinery across Nepal.
          </p>
          <div className="pt-2">
            <a
              href={COMPANY_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-steel px-3.5 py-2 text-xs font-bold text-steel-foreground hover:text-primary transition"
            >
              <svg className="h-4 w-4 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-bold text-steel-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Machinery Categories */}
        <div>
          <h4 className="mb-4 font-bold text-steel-foreground">Machinery</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.filter((c) => c.slug !== 'other').map((cat) => (
              <li key={cat.slug}>
                <Link
                  to={`/machines?category=${cat.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {cat.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <h4 className="mb-4 font-bold text-steel-foreground">Get in Touch</h4>
          <p className="flex gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            {COMPANY_INFO.address}
          </p>
          <p className="flex gap-2">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <span>{COMPANY_INFO.phone}</span>
          </p>
          <p className="flex gap-2">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            {COMPANY_INFO.email}
          </p>
          <p className="flex gap-2">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            {COMPANY_INFO.hours}
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-steel-foreground/10">
        <div className="container-x flex flex-col justify-between gap-2 py-5 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} Machinery Hub. All rights reserved.</span>
          <span>Industrial Machinery Solutions · Nepal</span>
        </div>
      </div>
    </footer>
  );
};
