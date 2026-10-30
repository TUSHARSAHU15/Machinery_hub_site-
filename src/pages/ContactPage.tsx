import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  BookOpen,
  Printer,
  Scissors,
  Wrench,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { IMAGES, COMPANY_INFO, getWhatsAppUrl } from '../data/machinery';

export const ContactPage: React.FC = () => {
  const contactDetails = [
    { i: Phone, l: 'Phone', v: COMPANY_INFO.phone },
    { i: Mail, l: 'Email', v: COMPANY_INFO.email },
    { i: MapPin, l: 'Address', v: COMPANY_INFO.address },
    { i: Clock, l: 'Business Hours', v: COMPANY_INFO.hours },
  ];

  const servicesProvided = [
    {
      icon: BookOpen,
      title: 'Note Book Industry Machines',
      desc: 'Automatic reel-to-book & semi-auto lines',
    },
    {
      icon: Printer,
      title: 'Offset Press Machines',
      desc: 'Sheet-fed single & multi-colour presses',
    },
    {
      icon: Scissors,
      title: 'Paper Related All Machines',
      desc: 'Hydraulic cutting, binding & processing',
    },
    {
      icon: Wrench,
      title: 'Installation & Technical Support',
      desc: 'Certified engineers, training & spare parts',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk about your machinery needs"
        image={IMAGES.parts}
      />

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        {/* Left Side: Professional Welcome Card, Contact Details, WhatsApp button, Map */}
        <div className="space-y-4">
          {/* Professional Welcome & Capabilities Card */}
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-accent/20 p-6 shadow-card transition-all">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                हाम्रो सेवाहरू • Machinery Solutions
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-extrabold leading-snug text-foreground">
              नमस्ते! Machinery Hub मा तपाईंलाई हार्दिक स्वागत छ।
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              हामी नेपालभर नोट बुक उद्योग, अफसेट प्रेस र कागज प्रशोधन सम्बन्धी आधुनिक मेसिनरी तथा
              दक्ष प्राविधिक सेवाहरू उपलब्ध गराउँछौं।
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {servicesProvided.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex items-start gap-3 rounded-xl border border-border/80 bg-background/60 p-3 transition hover:border-primary/50 hover:bg-card"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-gradient text-primary-foreground shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-foreground leading-tight">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground leading-tight">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-3.5 text-xs font-semibold text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>नेपालभर डेलिभरी, जडान, तालिम तथा जेन्युन पार्ट्सको सुविधा</span>
            </div>
          </div>

          {/* Contact Details List */}
          {contactDetails.map(({ i: Icon, l, v }) => (
            <div
              key={l}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{l}</p>
                <p className="font-bold text-foreground">{v}</p>
              </div>
            </div>
          ))}

          {/* Facebook Link Box */}
          <a
            href={COMPANY_INFO.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:border-primary/50 transition group"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1877F2]/10 text-[#1877F2]">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Follow our Facebook Page</p>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                facebook.com/machineryhubbhw
              </p>
            </div>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={getWhatsAppUrl('Hello Machinery Hub!')}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp p-4 font-bold text-steel-foreground transition hover:brightness-105"
          >
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp (+977 9857024409)
          </a>

          <iframe
            title="Map"
            className="h-64 w-full rounded-xl border border-border shadow-card"
            loading="lazy"
            src="https://www.google.com/maps?q=Balaju+Industrial+District+Kathmandu&output=embed"
          />
        </div>

        {/* Right Side: Enquiry Form */}
        <EnquiryForm />
      </section>
    </>
  );
};
