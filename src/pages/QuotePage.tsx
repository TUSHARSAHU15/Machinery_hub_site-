import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';
import { IMAGES } from '../data/machinery';

const NEXT_STEPS = [
  'We review your requirement',
  'Our expert calls you to confirm details',
  'You receive a detailed quotation',
  'We arrange a demo or machine video',
];

export const QuotePage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Request a Quote"
        title="Get a quotation in one step"
        subtitle="Submit your exact machinery requirements — no call needed."
        image={IMAGES.notebook}
      />

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_2fr]">
        <aside className="h-fit rounded-xl bg-steel-gradient p-8 text-steel-foreground lg:sticky lg:top-28 shadow-card">
          <h2 className="text-2xl font-bold">What happens next?</h2>
          <ul className="mt-6 space-y-5">
            {NEXT_STEPS.map((step) => (
              <li key={step} className="flex gap-3 text-steel-muted text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </aside>

        <EnquiryForm />
      </section>
    </>
  );
};
