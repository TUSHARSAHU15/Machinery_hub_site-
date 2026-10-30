import React from 'react';
import { PlayCircle } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { IMAGES, getWhatsAppUrl } from '../data/machinery';

const PROJECTS = [
  { img: IMAGES.hero, t: '4-colour press line', l: 'Kathmandu' },
  { img: IMAGES.notebook, t: 'Notebook production line', l: 'Butwal' },
  { img: IMAGES.cutting, t: 'Hydraulic cutter installation', l: 'Biratnagar' },
  { img: IMAGES.binding, t: 'Perfect binding setup', l: 'Pokhara' },
  { img: IMAGES.processing, t: 'Slitter-rewinder commissioning', l: 'Birgunj' },
  { img: IMAGES.service, t: 'Preventive maintenance visit', l: 'Lalitpur' },
  { img: IMAGES.offset, t: 'Offset press calibration', l: 'Bhaktapur' },
  { img: IMAGES.parts, t: 'Spare parts supply', l: 'Nepalgunj' },
];

export const GalleryPage: React.FC = () => {
  return (
    <>
      <PageHeader
        eyebrow="Projects / Gallery"
        title="Our work on factory floors across Nepal"
        image={IMAGES.processing}
      />

      <section className="container-x py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {PROJECTS.map((p, idx) => (
            <figure
              key={idx}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl bg-steel shadow-card"
            >
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  idx % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel to-transparent p-5">
                <p className="font-bold text-steel-foreground text-lg">{p.t}</p>
                <p className="text-sm font-semibold text-primary">{p.l}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Video Request CTA Box */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl bg-steel p-10 text-center">
          <PlayCircle className="h-12 w-12 text-primary" />
          <h2 className="text-2xl font-bold text-steel-foreground">Want to see machines running?</h2>
          <p className="text-steel-muted max-w-md">
            We'll send you working videos of any machine on WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl('Please share machine working videos.')}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-whatsapp px-6 py-3 font-bold text-steel-foreground transition hover:brightness-105"
          >
            Request Videos
          </a>
        </div>
      </section>
    </>
  );
};
