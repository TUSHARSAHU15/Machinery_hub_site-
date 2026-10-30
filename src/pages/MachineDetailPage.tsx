import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  PlayCircle,
  Gauge,
  Zap,
  Ruler,
  Wrench,
} from 'lucide-react';
import { MACHINES, CATEGORIES, formatPrice, getWhatsAppUrl } from '../data/machinery';
import { EnquiryForm } from '../components/EnquiryForm';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const MachineDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const machine = MACHINES.find((m) => m.slug === slug);

  if (!machine) {
    return (
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-bold text-foreground">Machine not found</h1>
        <Link to="/machines" className="mt-6 inline-block font-bold text-primary">
          Back to catalogue
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.slug === machine.category);
  const relatedMachines = MACHINES.filter(
    (m) => m.category === machine.category && m.slug !== machine.slug
  ).slice(0, 3);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-secondary">
        <div className="container-x flex items-center gap-1.5 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/machines" className="hover:text-foreground">
            Machines
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="truncate text-foreground font-semibold">{machine.name}</span>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="container-x grid gap-10 py-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-xl bg-muted shadow-card">
            <img
              src={machine.images[selectedImageIdx] || machine.images[0]}
              alt={machine.name}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {machine.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIdx(idx)}
                className={`overflow-hidden rounded-lg border-2 transition ${
                  selectedImageIdx === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}

            {/* Request Video Tile */}
            <a
              href={getWhatsAppUrl(`Please send me the video of ${machine.name} (${machine.model}).`)}
              target="_blank"
              rel="noreferrer"
              className="grid aspect-square place-items-center rounded-lg bg-steel text-center text-xs font-bold text-steel-foreground transition hover:brightness-110"
            >
              <span>
                <PlayCircle className="mx-auto mb-1 h-7 w-7 text-primary" />
                Request video
              </span>
            </a>
          </div>
        </div>

        {/* Info Column */}
        <div>
          <p className="eyebrow">{category?.name}</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl text-foreground">
            {machine.name}
          </h1>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="rounded bg-secondary px-2.5 py-1 font-semibold text-foreground">
              Model: {machine.model}
            </span>
            <span className="rounded bg-accent px-2.5 py-1 font-semibold text-accent-foreground">
              {machine.condition}
            </span>
            <span
              className={`rounded px-2.5 py-1 font-semibold ${
                machine.available
                  ? 'bg-whatsapp/15 text-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {machine.available ? 'In Stock' : 'On Order'}
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">{machine.description}</p>

          {/* Quick Specs */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { i: Gauge, l: 'Capacity', v: machine.capacity },
              { i: Zap, l: 'Power', v: machine.power },
              { i: Ruler, l: 'Dimensions', v: machine.dimensions },
            ].map(({ i: Icon, l, v }) => (
              <div key={l} className="rounded-lg border border-border bg-card p-4">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {l}
                </p>
                <p className="mt-0.5 text-sm font-bold text-foreground">{v}</p>
              </div>
            ))}
          </div>

          {/* Price Box */}
          <div className="mt-6 rounded-xl bg-steel p-6">
            <p className="text-sm text-steel-muted">Price</p>
            <p className="font-display text-3xl font-extrabold text-steel-foreground">
              {formatPrice(machine.price)}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(
                  `Hello, I'd like details on ${machine.name} (Model ${machine.model}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-bold text-steel-foreground transition hover:brightness-105"
              >
                <WhatsAppIcon className="h-5 w-5" /> Request Details on WhatsApp
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground shadow-glow transition hover:brightness-105"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <Wrench className="h-4 w-4 shrink-0 text-primary" />
            {machine.support}
          </p>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container-x pb-12">
        <h2 className="text-2xl font-extrabold text-foreground">Technical Specifications</h2>
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          {[
            ['Model Number', machine.model],
            ['Production Capacity', machine.capacity],
            ['Power Requirement', machine.power],
            ['Dimensions (L × W × H)', machine.dimensions],
            ['Condition', machine.condition],
            ...machine.specs,
          ].map(([label, val], idx) => (
            <div
              key={label}
              className={`grid grid-cols-2 gap-4 px-5 py-3.5 text-sm ${
                idx % 2 ? 'bg-secondary/60' : ''
              }`}
            >
              <span className="font-semibold text-muted-foreground">{label}</span>
              <span className="font-semibold text-foreground">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Form anchor */}
      <section id="enquire" className="bg-secondary py-16">
        <div className="container-x max-w-4xl">
          <EnquiryForm
            defaultCategory={machine.category}
            machineName={`${machine.name} (${machine.model})`}
          />
        </div>
      </section>

      {/* Related Machines */}
      {relatedMachines.length > 0 && (
        <section className="container-x py-16">
          <h2 className="text-2xl font-extrabold text-foreground">Related machines</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedMachines.map((rm) => (
              <Link
                key={rm.slug}
                to={`/machines/${rm.slug}`}
                className="flex gap-4 rounded-xl border border-border bg-card p-3 hover:border-primary/50 transition shadow-sm"
              >
                <img
                  src={rm.images[0]}
                  alt={rm.name}
                  className="h-20 w-24 rounded-md object-cover"
                />
                <div>
                  <p className="font-bold leading-snug text-foreground">{rm.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{formatPrice(rm.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
