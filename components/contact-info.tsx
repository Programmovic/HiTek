'use client';

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import FacebookOutlineIcon from './icons/facebook-outline';
import ContactForm from './contact-form';
import { useAppContext } from '@/app/AppContext';

export default function ContactInfo() {
  const { appointmentRef } = useAppContext();

  return (
    <section className="bg-white rounded-3xl w-full lg:w-1/2 p-8">
      <div className="flex flex-col gap-8">
        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            We are here to help. <br></br>{' '}
            <span className="text-zinc-500">
              Get in touch with us for any inquiries or assistance.
            </span>
          </h2>
          <div className="flex flex-col items-start gap-2">
            <a
              className="flex items-center gap-2 font-semibold hover:text-orange-500 transition-colors"
              href="mailto:info@hitekmedical.com"
            >
              <EnvelopeIcon className="h-5" />
              info@hitekmedical.com
            </a>
            <a
              className="flex items-center gap-2 font-semibold hover:text-orange-500 transition-colors"
              href="#"
            >
              <FacebookOutlineIcon className="h-5" />
              Message us on Facebook
            </a>
            <div className="flex items-center gap-2 font-semibold">
              <PhoneIcon className="h-5" />
              +20 123 456 7890
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <MapPinIcon className="h-5" />
              123 Nile Street, Cairo, Egypt
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="flex flex-col gap-4" ref={appointmentRef}>
          <h2 className="text-3xl font-semibold tracking-tight">
            Book an <br></br> <span className="text-zinc-500">appointment</span>
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
