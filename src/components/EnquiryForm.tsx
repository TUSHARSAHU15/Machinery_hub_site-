import React, { useState } from 'react';
import { Copy, Send } from 'lucide-react';
import { toast } from 'sonner';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CATEGORIES, getWhatsAppUrl } from '../data/machinery';

interface EnquiryFormProps {
  defaultCategory?: string;
  machineName?: string;
}

const inputClass =
  'w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 text-foreground';
const labelClass = 'mb-1.5 block text-sm font-semibold text-foreground';

interface RadioPillsProps {
  name: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const RadioPills: React.FC<RadioPillsProps> = ({ name, options, value, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-semibold transition ${
            value === opt
              ? 'border-primary bg-accent text-accent-foreground'
              : 'border-input bg-card hover:border-primary/50 text-foreground'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt}
        </label>
      ))}
    </div>
  );
};

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ defaultCategory, machineName }) => {
  const [condition, setCondition] = useState('Either');
  const [install, setInstall] = useState('Yes');

  const defaultCategoryName =
    CATEGORIES.find((c) => c.slug === defaultCategory)?.name ?? CATEGORIES[0]?.name;

  const buildMessage = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return [
      '🙏 *नमस्ते! Machinery Hub मा तपाईंलाई हार्दिक स्वागत छ।*',
      'हामीबाट तपाईंले प्राप्त गर्न सक्नुहुन्छ:',
      '✅ Note Book Industry Machines',
      '✅ Offset Press Machines',
      '✅ Paper Related All Machines',
      '✅ Installation & Technical Support',
      '',
      '*कृपया आफ्नो आवश्यकताको विवरण:*',
      machineName ? `* मेसिनको नाम: ${machineName}` : `* क्याटेगोरी: ${data.get('category')}`,
      `* आवश्यक क्षमता (Capacity): ${data.get('capacity') || '-'}`,
      `* अवस्था (Condition): ${condition}`,
      `* अनुमानित बजेट (Budget): ${data.get('budget') || '-'}`,
      `* स्थान (City/District): ${data.get('city')}`,
      `* जडान (Installation Required): ${install}`,
      `* ग्राहकको नाम (Name): ${data.get('name')}`,
      `* कम्पनीको नाम (Company): ${data.get('company') || '-'}`,
      `* फोन / WhatsApp: ${data.get('phone')}`,
      `* इमेल (Email): ${data.get('email') || '-'}`,
      `* अन्य आवश्यक जानकारी (Notes): ${data.get('notes') || '-'}`,
      '',
      'Machinery Hub',
      '📞 +977 9857024409, 9824421727',
      'अधिक जानकारी को लागी हाम्रो Facebook page:',
      'https://www.facebook.com/machineryhubbhw/',
      '',
      '"Your Trusted Partner for Industrial Machinery."',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = buildMessage(e.currentTarget);
    window.open(getWhatsAppUrl(msg), '_blank');
    toast.success('Opening WhatsApp with your enquiry details');
  };

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (form && form.reportValidity()) {
      const msg = buildMessage(form);
      await navigator.clipboard.writeText(msg);
      toast.success('Enquiry details copied');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8"
    >
      <h3 className="text-2xl font-extrabold text-foreground">Machinery Requirement Form</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us what machinery you need. Our team will contact you.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {/* Customer Name */}
        <div>
          <label className={labelClass}>Customer Name *</label>
          <input
            required
            name="name"
            maxLength={100}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        {/* Company / Business Name */}
        <div>
          <label className={labelClass}>Company / Business Name</label>
          <input
            name="company"
            maxLength={120}
            className={inputClass}
            placeholder="Business name"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className={labelClass}>Phone / WhatsApp *</label>
          <input
            required
            name="phone"
            type="tel"
            maxLength={20}
            pattern="[0-9+\- ]{7,20}"
            className={inputClass}
            placeholder="+977 98XXXXXXXX"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            name="email"
            type="email"
            maxLength={255}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        {/* Machine Category */}
        <div>
          <label className={labelClass}>Machine Category *</label>
          <select required name="category" defaultValue={defaultCategoryName} className={inputClass}>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Required Capacity */}
        <div>
          <label className={labelClass}>Required Capacity</label>
          <input
            name="capacity"
            maxLength={100}
            className={inputClass}
            placeholder="e.g. 5,000 notebooks / hour"
          />
        </div>

        {/* Machine Condition */}
        <div className="md:col-span-2">
          <label className={labelClass}>Machine Condition</label>
          <RadioPills
            name="condition"
            options={['New', 'Used', 'Either']}
            value={condition}
            onChange={setCondition}
          />
        </div>

        {/* Estimated Budget */}
        <div>
          <label className={labelClass}>Estimated Budget</label>
          <input
            name="budget"
            maxLength={60}
            className={inputClass}
            placeholder="e.g. NPR 25 Lakh"
          />
        </div>

        {/* City / District */}
        <div>
          <label className={labelClass}>City / District *</label>
          <input
            required
            name="city"
            maxLength={80}
            className={inputClass}
            placeholder="e.g. Kathmandu / Butwal"
          />
        </div>

        {/* Installation Required */}
        <div className="md:col-span-2">
          <label className={labelClass}>Installation Required?</label>
          <RadioPills
            name="install"
            options={['Yes', 'No', 'Not sure']}
            value={install}
            onChange={setInstall}
          />
        </div>

        {/* Additional Requirements */}
        <div className="md:col-span-2">
          <label className={labelClass}>Additional Requirements</label>
          <textarea
            name="notes"
            rows={4}
            maxLength={1000}
            className={inputClass}
            placeholder="Paper type, output size, space available, timeline…"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-bold text-steel-foreground transition hover:brightness-105"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Send Enquiry on WhatsApp
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-input px-5 py-3 font-bold transition hover:bg-secondary text-foreground"
        >
          <Copy className="h-4 w-4" />
          Copy Details
        </button>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Send className="h-3 w-3" />
        We usually respond within 2 business hours.
      </p>
    </form>
  );
};
