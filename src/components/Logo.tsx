import React from 'react';
import { Link } from 'react-router-dom';
import { Cog } from 'lucide-react';
import { COMPANY_INFO } from '../data/machinery';

export const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-amber-gradient text-primary-foreground shadow-glow">
        <Cog className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? 'text-steel-foreground' : 'text-foreground'
          }`}
        >
          {COMPANY_INFO.name.toUpperCase()}
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-steel-muted' : 'text-muted-foreground'
          }`}
        >
          {COMPANY_INFO.tagline}
        </span>
      </span>
    </Link>
  );
};
