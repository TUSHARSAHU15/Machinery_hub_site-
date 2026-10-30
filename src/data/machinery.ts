import { Machine, MachineCategory, ServiceItem, FaqItem, CompanyInfo } from '../types';

export const IMAGES = {
  hero: '/assets/hero-pZ92iVLf.jpg',
  notebook: '/assets/notebook-DtCPrakx.jpg',
  offset: '/assets/offset-CSvzMGlv.jpg',
  cutting: '/assets/cutting-BxZQ6G3Y.jpg',
  binding: '/assets/binding-B3zQgJDp.jpg',
  processing: '/assets/processing-B9OWsBlQ.jpg',
  parts: '/assets/parts-V94LPd2_.jpg',
  service: '/assets/service-C2pzLkO0.jpg',
};

export const COMPANY_INFO: CompanyInfo = {
  name: 'Machinery Hub',
  tagline: 'Industrial Machinery Solutions',
  phone: '+977 9857024409, 9824421727',
  whatsapp: '9779857024409',
  email: 'info@machineryhub.com.np',
  address: 'Balaju Industrial District, Kathmandu, Nepal',
  hours: 'Sun – Fri, 9:00 AM – 6:00 PM',
  facebook: 'https://www.facebook.com/machineryhubbhw/',
};

export const NEPALI_WELCOME_MESSAGE = `🙏 नमस्ते! Machinery Hub मा तपाईंलाई हार्दिक स्वागत छ।
हामीबाट तपाईंले प्राप्त गर्न सक्नुहुन्छ:
✅ Note Book Industry Machines
✅ Offset Press Machines
✅ Paper Related All Machines
✅ Installation & Technical Support

कृपया आफ्नो आवश्यकताको विवरण पठाउनुहोस्:
* मेसिनको नाम
* आवश्यक क्षमता (Capacity)
* स्थान (City/District)
* अन्य आवश्यक जानकारी

Machinery Hub
📞 +977 9857024409, 9824421727
अधिक जानकारी को लागी हाम्रो Facebook page को लिंक क्लिक गर्नू होस, अपडेट पाई रहन Follow गर्नू होस:
https://www.facebook.com/machineryhubbhw/

"Your Trusted Partner for Industrial Machinery."`;

export const getWhatsAppUrl = (text: string) =>
  `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;

export const CATEGORIES: MachineCategory[] = [
  {
    slug: 'notebook',
    name: 'Notebook Manufacturing Machines',
    short: 'Notebook Manufacturing',
    image: IMAGES.notebook,
  },
  {
    slug: 'offset',
    name: 'Offset Printing Press Machines',
    short: 'Offset Printing',
    image: IMAGES.offset,
  },
  {
    slug: 'cutting',
    name: 'Paper Cutting Machines',
    short: 'Paper Cutting',
    image: IMAGES.cutting,
  },
  {
    slug: 'binding',
    name: 'Paper Binding & Finishing Machines',
    short: 'Binding & Finishing',
    image: IMAGES.binding,
  },
  {
    slug: 'processing',
    name: 'Paper Processing Machines',
    short: 'Paper Processing',
    image: IMAGES.processing,
  },
  {
    slug: 'other',
    name: 'Other Industrial Machinery',
    short: 'Other Machinery',
    image: IMAGES.hero,
  },
  {
    slug: 'parts',
    name: 'Spare Parts & Accessories',
    short: 'Spare Parts',
    image: IMAGES.parts,
  },
];

export const MACHINES: Machine[] = [
  {
    slug: 'auto-notebook-line-nb900',
    name: 'Automatic Notebook Production Line',
    model: 'NB-900',
    category: 'notebook',
    condition: 'New',
    available: true,
    capacity: '9,000 notebooks / hour',
    capacityValue: 9000,
    price: null,
    power: '3 Phase, 415V, 18 kW',
    dimensions: '14.5 m × 2.2 m × 1.9 m',
    description:
      'Fully automatic reel-to-notebook line: ruling, printing, collating, stitching, folding and cutting in a single pass. Ideal for school copy and register manufacturers scaling production.',
    images: [IMAGES.notebook, IMAGES.processing, IMAGES.binding],
    specs: [
      ['Paper GSM', '45 – 80 GSM'],
      ['Reel width', 'Up to 1,100 mm'],
      ['Binding', 'Centre stitch / glue'],
      ['Control', 'PLC with touchscreen HMI'],
      ['Weight', '≈ 9,500 kg'],
    ],
    support: 'On-site installation, 7-day commissioning and operator training included.',
  },
  {
    slug: 'semi-auto-notebook-nb450',
    name: 'Semi-Automatic Notebook Machine',
    model: 'NB-450',
    category: 'notebook',
    condition: 'Used',
    available: true,
    capacity: '4,500 notebooks / hour',
    capacityValue: 4500,
    price: 3800000,
    power: '3 Phase, 415V, 9 kW',
    dimensions: '8.0 m × 1.8 m × 1.7 m',
    description:
      'Reliable, refurbished semi-automatic line for small and mid-size notebook units. Fully serviced and tested before dispatch.',
    images: [IMAGES.notebook, IMAGES.binding],
    specs: [
      ['Paper GSM', '50 – 70 GSM'],
      ['Reel width', 'Up to 900 mm'],
      ['Binding', 'Centre stitch'],
      ['Year', '2019'],
      ['Weight', '≈ 5,200 kg'],
    ],
    support: 'Installation and 3-month service warranty.',
  },
  {
    slug: 'four-colour-offset-op4',
    name: 'Four-Colour Sheet-Fed Offset Press',
    model: 'OP-4 74',
    category: 'offset',
    condition: 'New',
    available: true,
    capacity: '12,000 sheets / hour',
    capacityValue: 12000,
    price: null,
    power: '3 Phase, 415V, 32 kW',
    dimensions: '7.8 m × 3.1 m × 2.0 m',
    description:
      'High-precision four-colour press for magazines, packaging and commercial print with automatic plate loading and ink-key presetting.',
    images: [IMAGES.offset, IMAGES.hero],
    specs: [
      ['Max sheet', '520 × 740 mm'],
      ['Min sheet', '210 × 280 mm'],
      ['Colours', '4 + coater option'],
      ['Plate size', '605 × 745 mm'],
      ['Registration', '± 0.01 mm'],
    ],
    support: 'Installation, colour calibration and 10-day operator training.',
  },
  {
    slug: 'single-colour-offset-op1',
    name: 'Single-Colour Offset Press',
    model: 'OP-1 52',
    category: 'offset',
    condition: 'Used',
    available: false,
    capacity: '8,000 sheets / hour',
    capacityValue: 8000,
    price: 1650000,
    power: '3 Phase, 415V, 7.5 kW',
    dimensions: '3.2 m × 1.6 m × 1.6 m',
    description:
      'Compact, refurbished single-colour press — perfect for letterheads, forms, books and short-run jobs.',
    images: [IMAGES.offset, IMAGES.hero],
    specs: [
      ['Max sheet', '360 × 520 mm'],
      ['Colours', '1'],
      ['Dampening', 'Alcohol dampening'],
      ['Year', '2017'],
    ],
    support: 'Installation and on-call technical support.',
  },
  {
    slug: 'hydraulic-paper-cutter-pc115',
    name: 'Programmable Hydraulic Paper Cutter',
    model: 'PC-115',
    category: 'cutting',
    condition: 'New',
    available: true,
    capacity: '45 cuts / minute',
    capacityValue: 2700,
    price: 2450000,
    power: '3 Phase, 415V, 4 kW',
    dimensions: '2.6 m × 2.3 m × 1.6 m',
    description:
      'Heavy-duty guillotine with 15" touchscreen programming, hydraulic clamp, and infrared safety light curtain.',
    images: [IMAGES.cutting, IMAGES.parts],
    specs: [
      ['Cutting width', '1,150 mm'],
      ['Cutting height', '165 mm'],
      ['Programs', '999 memory slots'],
      ['Safety', 'IR light curtain + two-hand'],
    ],
    support: 'Installation, blade setup and 1-year warranty.',
  },
  {
    slug: 'perfect-binder-pb60',
    name: 'Automatic Perfect Binding Machine',
    model: 'PB-60',
    category: 'binding',
    condition: 'New',
    available: true,
    capacity: '1,200 books / hour',
    capacityValue: 1200,
    price: null,
    power: 'Single Phase, 230V, 5 kW',
    dimensions: '4.2 m × 1.4 m × 1.5 m',
    description:
      'Hot-melt perfect binder with milling, notching and side-glue for books, diaries and catalogues.',
    images: [IMAGES.binding, IMAGES.notebook],
    specs: [
      ['Book thickness', '3 – 60 mm'],
      ['Book length', '140 – 450 mm'],
      ['Glue', 'EVA hot-melt'],
      ['Cover feed', 'Automatic'],
    ],
    support: 'Installation and operator training.',
  },
  {
    slug: 'slitter-rewinder-sr1600',
    name: 'Paper Slitting & Rewinding Machine',
    model: 'SR-1600',
    category: 'processing',
    condition: 'New',
    available: true,
    capacity: '300 m / minute',
    capacityValue: 18000,
    price: null,
    power: '3 Phase, 415V, 22 kW',
    dimensions: '5.5 m × 3.0 m × 2.1 m',
    description:
      'Precision slitter-rewinder for converting jumbo paper reels into custom widths with auto-tension control.',
    images: [IMAGES.processing, IMAGES.hero],
    specs: [
      ['Max width', '1,600 mm'],
      ['Unwind dia.', '1,500 mm'],
      ['Slitting', 'Razor / shear'],
      ['Tension', 'Auto magnetic powder'],
    ],
    support: 'Installation, commissioning and maintenance contract available.',
  },
  {
    slug: 'spare-parts-kit',
    name: 'Offset & Cutter Spare Parts Kit',
    model: 'SP-KIT',
    category: 'parts',
    condition: 'New',
    available: true,
    capacity: '—',
    capacityValue: 0,
    price: 45000,
    power: 'N/A',
    dimensions: 'Varies',
    description:
      'Genuine rollers, bearings, gears and cutter blades for common offset and guillotine models. Ask for part numbers.',
    images: [IMAGES.parts],
    specs: [
      ['Includes', 'Rollers, bearings, gears, blades'],
      ['Compatibility', 'Most major brands'],
      ['Delivery', '2 – 7 days'],
    ],
    support: 'Fitting assistance available on request.',
  },
];

export const formatPrice = (price: number | null) =>
  price == null ? 'Request a Quote' : `NPR ${price.toLocaleString('en-IN')}`;

export const SERVICES: ServiceItem[] = [
  {
    title: 'Machine Installation',
    desc: 'Foundation guidance, unloading, positioning and electrical connection by certified engineers.',
  },
  {
    title: 'Setup & Commissioning',
    desc: 'Calibration, trial runs and production sign-off so you start earning from day one.',
  },
  {
    title: 'Technical Support',
    desc: 'Phone, WhatsApp and on-site support from technicians who know your machine.',
  },
  {
    title: 'Maintenance & Troubleshooting',
    desc: 'Preventive maintenance plans and fast breakdown response to minimise downtime.',
  },
  {
    title: 'Operator Training',
    desc: 'Hands-on training for your operators on safe, efficient machine operation.',
  },
  {
    title: 'Spare Parts Assistance',
    desc: 'Genuine spare parts sourced and delivered quickly, with fitting support.',
  },
];

export const FAQS: FaqItem[] = [
  {
    q: 'What production capacity do I need?',
    a: 'Share your daily output target and paper type through the enquiry form. Our team recommends a machine that fits your volume and budget.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Stock machines are delivered in 1–2 weeks within Nepal. Imported new machines typically take 6–10 weeks depending on the model.',
  },
  {
    q: 'Do you provide installation?',
    a: 'Yes. Every machine can be supplied with installation, commissioning and operator training by our engineers.',
  },
  {
    q: 'What payment options are available?',
    a: 'We accept bank transfer and LC for imports. Typical terms are an advance at order and balance before dispatch. Financing guidance is available.',
  },
  {
    q: 'Is there a warranty?',
    a: 'New machines carry a manufacturer warranty of 12 months. Used machines come with a service warranty of up to 3 months.',
  },
  {
    q: 'Do you sell used machines?',
    a: 'Yes, we offer inspected and refurbished used machines. Each is tested before dispatch.',
  },
];
