import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle, image }) => {
  return (
    <section className="relative overflow-hidden bg-steel">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-steel-foreground md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-steel-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
};
