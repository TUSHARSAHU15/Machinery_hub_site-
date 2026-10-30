import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container-x py-32 text-center">
      <h1 className="text-4xl font-extrabold text-foreground">Page Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition hover:brightness-105"
      >
        Back to Home
      </Link>
    </div>
  );
};
