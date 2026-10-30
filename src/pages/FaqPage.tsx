import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { IMAGES, FAQS } from '../data/machinery';

export const FaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently asked questions"
        image={IMAGES.cutting}
      />

      <section className="container-x max-w-3xl py-20">
        <div className="rounded-xl border border-border bg-card px-6 shadow-card divide-y divide-border">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between py-2 text-left text-base font-bold text-foreground transition-colors hover:text-primary"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pt-2 pb-2 text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Still have questions?{' '}
          <Link to="/contact" className="font-bold text-primary hover:underline">
            Contact us
          </Link>
        </p>
      </section>
    </>
  );
};
