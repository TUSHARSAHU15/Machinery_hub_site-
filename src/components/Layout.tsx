import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFab } from './WhatsAppFab';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};
