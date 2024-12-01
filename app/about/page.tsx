import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  title: "About Us | Hi-Tek Medical Co.",
  description: "Learn more about Hi-Tek Medical Co., your trusted partner in medical solutions.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20 w-full max-w-[1080px] px-5">
      <div className="flex flex-col items-center gap-5 max-w-[640px]">
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl text-blue-500">
          About Us
        </h1>
        <h4 className="text-xl text-center text-zinc-500">
          Delivering advanced medical and IVD laboratory solutions across Egypt.
        </h4>
      </div>

      <div className="flex flex-col md:flex-row gap-20 pt-20 border-t border-zinc-300">
        <div className="flex flex-col items-start gap-5 md:w-2/5">
          <h2 className="text-3xl font-semibold tracking-tight">
            Your trusted partner in medical innovation and excellence.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-1 h-10 py-2 px-4 text-base rounded-full bg-transparent border border-zinc-500 text-black hover:bg-zinc-50"
          >
            Contact Us
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:w-3/5">
          <p>
            Founded in 1995, Hi-Tek Medical Co. has established itself as a leading provider of cutting-edge medical and IVD laboratory products. Headquartered in Cairo, we serve healthcare institutions across Egypt with a commitment to quality and innovation.
          </p>
          <p>
            We are the exclusive agent in Egypt for globally recognized medical equipment manufacturers, offering a comprehensive range of advanced analyzers and diagnostic systems.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20 pt-20 border-t border-zinc-300">
        <div className="flex flex-col items-start gap-5 md:w-2/5">
          <small>Our Exclusive Partnerships</small>
          <h2 className="text-3xl font-semibold tracking-tight">
            Pioneering Solutions with Our Principals
          </h2>
          <p>
            Hi-Tek Medical Co. proudly represents the following leading international companies:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Eaglenos/China:</strong> Modern Blood Gas Analyzer (Cartridge Type). Measures parameters including pO₂, pCO₂, pH, Htc, Na⁺, K⁺, Ca⁺⁺, Cl⁻, Glu, Lac, and calculated values—all in one cartridge. Features include:
              <ul className="list-disc pl-5 mt-2">
                <li>No fluids or additional supplies required</li>
                <li>37 parameters in a single cartridge</li>
                <li>Maintenance-free operation</li>
                <li>24-month warranty</li>
                <li>CE & FDA approved</li>
                <li>Registered with the Egyptian MOH & EDA</li>
              </ul>
            </li>
            <li className="mt-5">
              <strong>High Technology INC./USA:</strong> Cutting-edge laboratory analyzers, including:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  <strong>Hematology Analyzers:</strong> 3-Diff and 5-Diff CBC analyzers, with reagents compatible with all major brands in Egypt.
                </li>
                <li>
                  <strong>Clinical Chemistry Analyzers:</strong> Semi-automatic and fully automated options with capacities ranging from 100 to 360 tests/hour.
                </li>
                <li>
                  <strong>Automatic Electrolytes Analyzers:</strong> Measures Na⁺, K⁺, Cl⁻, Ca⁺⁺ & pH using a reagent-back-based system.
                </li>
                <li>
                  <strong>ELISA Systems:</strong> Includes microplate readers and washers for high-precision diagnostic tests.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/5">
          <Image
            src="/images/pills-medical-tools-arrangement-flat-lay.jpg"
            alt="Medical Equipment"
            width={640}
            height={426}
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20 pt-20 border-t border-zinc-300">
        <div className="flex flex-col items-start gap-5 md:w-2/5">
          <small>Our Story</small>
          <h2 className="text-3xl font-semibold tracking-tight">
            Committed to advancing healthcare in Egypt.
          </h2>
          <p>
            Our journey began with a vision: to bring the latest advancements in medical technology to Egypt. Over the years, we have built strong partnerships with global manufacturers and local healthcare providers, ensuring that our clients have access to the best solutions available.
          </p>
          <p>
            We pride ourselves on delivering not just products, but comprehensive support and training to help our clients achieve the best outcomes.
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <Image
            src="/images/pills-medical-tools-arrangement-flat-lay.jpg"
            alt="Laboratory Team"
            width={640}
            height={426}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
