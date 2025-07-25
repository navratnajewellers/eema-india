import { Image } from "rsuite";
import Eemagine2024Gallery from "./Eemagine2024Gallery";

export default function Eemagine2024Page() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">EEMAGINE 2024</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Celebrating India’s Largest Experiential Event – A Recap of Ideas,
          Innovations & Impact.
        </p>
      </section>

      <section>
        <Image
          src="https://eemaindia.com/theme/FrontThemeTemplate/images/emmagine-2024-new.jpeg"
          alt="eemagine-2024"
        />
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6 sm:px-20">
        <h2 className="text-3xl font-bold mb-6 pl-4 border-l-4 border-orange-600 ">
          About the Event
        </h2>
        <p className="text-lg leading-relaxed">
          EEMAGINE 2024 was a spectacular convergence of India&apos;s leading
          event professionals, brands, creators, and thinkers. Held in
          [City/Location], the 3-day event focused on innovation, collaboration,
          and the future of the event and experiential marketing industry.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16 px-6 sm:px-20">
        <h2 className="text-3xl font-bold mb-16 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          Key Highlights
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Inspiring keynotes from top industry leaders</li>
          <li>Workshops on sustainability & tech in events</li>
          <li>Networking sessions with over 1000+ attendees</li>
          <li>Live entertainment and experiential zones</li>
          <li>Awards night recognizing the best in the industry</li>
        </ul>
      </section>

      {/* Image Gallery */}
      <Eemagine2024Gallery />

      {/* Thank You Note */}
      <section className=" bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-400 py-16 px-6 sm:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Thank You for Making EEMAGINE 2024 Unforgettable!
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          We look forward to seeing you again in EEMAGINE 2025. Stay connected
          with EEMA India for upcoming events and opportunities.
        </p>
      </section>
    </main>
  );
}
