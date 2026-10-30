import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Wrench,
  Headset,
  Truck,
  ShieldCheck,
  Factory,
} from 'lucide-react';
import { IMAGES, CATEGORIES, MACHINES, getWhatsAppUrl } from '../data/machinery';
import { MachineCard } from '../components/MachineCard';
import { SectionHeader } from '../components/SectionHeader';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const STATS = [
  { v: '15+', l: 'Years of experience' },
  { v: '500+', l: 'Machines installed' },
  { v: '300+', l: 'Happy clients' },
  { v: '24/7', l: 'Support response' },
];

const WHY_CHOOSE = [
  {
    icon: BadgeCheck,
    t: 'Quality-Checked Machines',
    d: 'Every new and used machine is inspected and tested before dispatch.',
  },
  {
    icon: Wrench,
    t: 'Installation Included',
    d: 'Certified engineers handle setup, commissioning and trial runs.',
  },
  {
    icon: Headset,
    t: 'Reliable After-Sales',
    d: 'Fast technical support via phone, WhatsApp and on-site visits.',
  },
  {
    icon: Truck,
    t: 'Nationwide Delivery',
    d: 'Safe transport and handling to any district in Nepal.',
  },
  {
    icon: ShieldCheck,
    t: 'Warranty & Genuine Parts',
    d: 'Manufacturer warranty and genuine spare parts availability.',
  },
  {
    icon: Factory,
    t: 'Industry Expertise',
    d: 'Specialists in notebook, printing and paper converting industries.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-steel">
        <img
          src={IMAGES.hero}
          alt="Industrial printing machinery on a factory floor"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative flex min-h-[88vh] flex-col justify-center py-24">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
            Machinery Hub · Industrial Machinery Solutions
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] text-steel-foreground sm:text-5xl md:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            Your Trusted Partner for <span className="text-primary">Industrial Machinery</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel-muted animate-in fade-in duration-1000">
            Notebook manufacturing, offset printing and paper processing solutions — backed by expert
            installation and technical support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/machines"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:brightness-105"
            >
              Explore Machines <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-md border border-steel-foreground/30 px-6 py-3.5 font-bold text-steel-foreground backdrop-blur transition hover:bg-steel-foreground/10"
            >
              Request a Quote
            </Link>
            <a
              href={getWhatsAppUrl('Hello Machinery Hub, I need details about your machines.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 font-bold text-steel-foreground transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative border-t border-steel-foreground/10 bg-steel/70 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.l}
                className="border-steel-foreground/10 py-6 md:border-l md:pl-6 first:md:border-l-0 first:md:pl-0"
              >
                <p className="font-display text-3xl font-extrabold text-primary">{stat.v}</p>
                <p className="text-sm text-steel-muted">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <div className="relative">
          <img
            src={IMAGES.service}
            alt="Engineer servicing a printing press"
            loading="lazy"
            width={1200}
            height={912}
            className="rounded-xl shadow-card"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-amber-gradient p-6 text-primary-foreground shadow-glow sm:block">
            <p className="font-display text-4xl font-black">15+</p>
            <p className="text-sm font-semibold">Years serving industry</p>
          </div>
        </div>
        <div>
          <div className="max-w-2xl">
            <p className="eyebrow">About Machinery Hub</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-foreground">
              The right machinery for your business
            </h2>
          </div>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Machinery Hub supplies reliable industrial machines to notebook manufacturers,
            printing presses and paper converters across Nepal. From choosing the right capacity to
            installation, training and after-sales service, we stay with you at every step.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-foreground">
            {[
              'New & quality used machines',
              'Expert installation',
              'Operator training',
              'Genuine spare parts',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 font-semibold">
                <BadgeCheck className="h-5 w-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors"
          >
            More about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Machinery Categories"
            title="Browse by category"
            subtitle="Find the right equipment for every stage of your production line."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.slug}
                to={`/machines?category=${cat.slug}`}
                className={`group relative overflow-hidden rounded-xl bg-steel shadow-card ${
                  idx === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full min-h-56 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3
                    className={`font-bold text-steel-foreground ${
                      idx === 0 ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View machines{' '}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machines Section */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="Featured Machines" title="Popular with our clients" />
          <Link
            to="/machines"
            className="inline-flex items-center gap-2 font-bold hover:text-primary text-foreground transition-colors"
          >
            View full catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MACHINES.slice(0, 4).map((m) => (
            <MachineCard key={m.slug} m={m} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-steel-gradient py-24">
        <div className="absolute inset-0 grid-lines" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-steel-foreground md:text-4xl">
              Why choose Machinery Hub?
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-xl border border-steel-foreground/10 bg-steel-foreground/5 p-7 backdrop-blur transition hover:border-primary/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-steel-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-2xl bg-steel">
          <img
            src={IMAGES.offset}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative flex flex-col items-start justify-between gap-8 p-10 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="text-3xl font-extrabold text-steel-foreground md:text-4xl">
                Tell us what machinery you need
              </h2>
              <p className="mt-3 max-w-xl text-steel-muted">
                Submit your requirements — no call needed. Our team will get back to you with the
                best options and a quotation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:brightness-105"
              >
                Send Enquiry
              </Link>
              <a
                href={getWhatsAppUrl("Hello Machinery Hub, I'd like a quotation.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 font-bold text-steel-foreground transition hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
