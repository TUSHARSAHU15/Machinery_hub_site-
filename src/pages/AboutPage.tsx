import React from 'react';
import { Award, Eye, Target } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import { IMAGES } from '../data/machinery';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Built on experience. Driven by your growth."
        image={IMAGES.hero}
      />

      {/* Story Section */}
      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Who we are"
            title="Industrial machinery experts since 2010"
          />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Machinery Hub is a trusted supplier of notebook manufacturing, offset printing, paper
            cutting, binding and paper processing machines. We help entrepreneurs and established
            factories choose, install and run the right equipment.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our team of engineers and technicians brings hands-on experience across hundreds of
            installations, so every recommendation is grounded in real production knowledge.
          </p>
        </div>
        <img
          src={IMAGES.binding}
          alt="Binding machine producing books"
          loading="lazy"
          className="rounded-xl shadow-card w-full object-cover"
        />
      </section>

      {/* Mission / Vision / Expertise */}
      <section className="bg-secondary py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              i: Target,
              t: 'Our Mission',
              d: 'To make world-class industrial machinery accessible and dependable for every business we serve.',
            },
            {
              i: Eye,
              t: 'Our Vision',
              d: 'To be the most trusted machinery partner for printing and paper industries in the region.',
            },
            {
              i: Award,
              t: 'Our Expertise',
              d: 'Deep know-how in notebook lines, offset presses and paper converting equipment.',
            },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-card p-8 shadow-card">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold text-foreground">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
