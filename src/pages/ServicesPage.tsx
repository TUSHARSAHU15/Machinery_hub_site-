import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Settings2,
  Headset,
  ShieldCheck,
  GraduationCap,
  Package,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SectionHeader } from '../components/SectionHeader';
import { IMAGES, SERVICES } from '../data/machinery';

const SERVICE_ICONS = [
  Wrench,
  Settings2,
  Headset,
  ShieldCheck,
  GraduationCap,
  Package,
];

const PROCESS_STEPS = [
  'Requirement & consultation',
  'Machine selection & quotation',
  'Delivery & installation',
  'Training & ongoing support',
];

export const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Support that keeps your production running"
        subtitle="From the first bolt to years of operation — our engineers are with you."
        image={IMAGES.service}
      />

      {/* Services Grid */}
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = SERVICE_ICONS[idx] ?? Wrench;
            return (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="grid h-14 w-14 place-items-center rounded-lg bg-amber-gradient text-primary-foreground shadow-glow">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-steel-gradient py-20">
        <div className="container-x">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-3xl font-extrabold text-steel-foreground md:text-4xl">
            A simple, proven process
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step} className="relative border-t-2 border-primary pt-6">
                <span className="font-display text-5xl font-black text-primary/40">
                  0{idx + 1}
                </span>
                <p className="mt-2 text-lg font-bold text-steel-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-x py-20 text-center">
        <SectionHeader
          center
          eyebrow="Need help?"
          title="Book installation or a service visit"
        />
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:brightness-105"
        >
          Contact our team
        </Link>
      </section>
    </>
  );
};
