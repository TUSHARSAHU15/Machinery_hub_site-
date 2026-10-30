# Machinery Hub — Industrial Machinery Solutions

An exact replica of [imagery-and-identity.lovable.app](https://imagery-and-identity.lovable.app/) built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## Features & Highlights

- **Complete Route Architecture**:
  - `/` — Homepage with Hero banner, live experience stats, about overview, interactive category showcase, featured machines, value propositions, and WhatsApp CTA.
  - `/machines` — Full catalog with real-time text search, category filtering, capacity filtering, price range filtering, condition (New / Used) filtering, in-stock availability toggle, and machine counter.
  - `/machines/:slug` — Dedicated machine detail pages for all machinery with an interactive gallery thumbnail selector, WhatsApp video request CTA, technical specifications table, prefilled quotation form, and related machine suggestions.
  - `/services` — Services breakdown covering installation, commissioning, maintenance, operator training, spare parts, and a 4-step production timeline.
  - `/gallery` — Projects showcase across Nepal (Kathmandu, Butwal, Biratnagar, Pokhara, etc.) with responsive masonry grid, hover transitions, and video request CTA.
  - `/about` — Detailed story, mission, vision, and core expertise pillars.
  - `/faq` — Expandable FAQ accordion with smooth animations and interactive question toggles.
  - `/contact` — Contact channels (Phone, Email, Address, Business hours), interactive Google Maps embed, WhatsApp chat link, and requirement form.
  - `/quote` — Streamlined quote request page with a sticky process guide and enquiry form.

- **Interactive Functions**:
  - **Machinery Requirement Enquiry Form**:
    - Validates all inputs (Customer Name, Business Name, Phone, Email, Machine Category, Capacity, Condition, Budget, City/District, Installation needs, Additional Notes).
    - **Send Enquiry on WhatsApp**: Dynamically formats and pre-fills an enquiry message sent straight to WhatsApp with toast feedback.
    - **Copy Details**: Copies the structured quotation request to clipboard with modern Sonner toast notifications.
  - **WhatsApp Floating Action Button (FAB)**: Accessible across all pages with bounce/hover animations.
  - **Catalog Filtering**: Instant multi-condition query engine for all machines.
  - **Lovable Badge**: Faithful replica of the Lovable badge with dismiss animation.
  - **High-Res Industrial Assets**: All original imagery, icons, and fonts (`Archivo` & `Manrope`) are bundled locally and offline-ready.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
