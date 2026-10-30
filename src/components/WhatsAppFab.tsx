import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../data/machinery';

export const WhatsAppFab: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl(
        'Hello Machinery Hub, I would like to enquire about your machines.'
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-steel-foreground shadow-card transition hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};
