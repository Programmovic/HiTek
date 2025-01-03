import FacebookFillIcon from './icons/facebook-fill';
import InstagramFillIcon from './icons/instagram-fill';
import LogoIcon from './icons/logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';
import LogoName from './logo-name';
import NavigateToForm from './navigate-to-form';

export default function Footer() {
  const data: Links[] = links;

  return (
    <section className="flex justify-center w-full pt-20 pb-8 bg-white">
      <div className="max-w-[1080px] w-full px-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-8">
              <LogoName />
              <div className="flex flex-col gap-2">
                <a href="mailto:info@hitekmedical.com">info@hitekmedical.com</a>
                <a href="tel:+201234567890">+20 123 456 7890</a>
                <div className="flex gap-2">
                  <a
                    className="flex p-1 rounded-xl border hover:bg-zinc-100 transition-colors"
                    href="#"
                  >
                    <FacebookFillIcon className="h-8" />
                  </a>
                  <a
                    className="flex p-1 rounded-xl border hover:bg-zinc-100 transition-colors"
                    href="#"
                  >
                    <InstagramFillIcon className="h-8" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-20">
              <div className="flex flex-col gap-2">
                {data.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5 w-80">
                <h4 className="text-xl font-semibold tracking-tight">
                  Committed to advancing healthcare technology and improving patient outcomes.
                </h4>
                <div className="flex gap-2">
                  <NavigateToForm styleButton="dark" />
                  <Button className="text-base rounded-full text-black border bg-transparent hover:bg-zinc-50">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
              <div className="flex gap-5 order-1 md:order-none">
                <p>&copy; 2024 Hi-Tek Medical Co. All rights reserved.</p>
              </div>
              <div className="flex gap-5">
                <Link
                  href="/credits"
                  className="hover:text-zinc-500 transition-colors"
                >
                  Credits
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-zinc-500 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="hover:text-zinc-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
