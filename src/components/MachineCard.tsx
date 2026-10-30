import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, ArrowUpRight } from 'lucide-react';
import { Machine } from '../types';
import { CATEGORIES, formatPrice } from '../data/machinery';

export const MachineCard: React.FC<{ m: Machine }> = ({ m }) => {
  const category = CATEGORIES.find((c) => c.slug === m.category);

  return (
    <Link
      to={`/machines/${m.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={m.images[0]}
          alt={m.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded bg-steel/85 px-2 py-1 text-xs font-bold text-steel-foreground backdrop-blur">
            {m.condition}
          </span>
          <span
            className={`rounded px-2 py-1 text-xs font-bold ${
              m.available ? 'bg-whatsapp text-steel-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            {m.available ? 'In Stock' : 'On Order'}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">
          {category?.short}
        </p>
        <h3 className="mt-1.5 text-lg font-bold leading-snug text-foreground">{m.name}</h3>
        <p className="text-sm text-muted-foreground">Model {m.model}</p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-foreground">
          <Gauge className="h-4 w-4 text-primary" />
          {m.capacity}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="font-display font-bold text-foreground">{formatPrice(m.price)}</span>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
};
