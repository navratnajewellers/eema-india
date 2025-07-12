import Image from "next/image"; // For optimized images

export default function NewMemberHeroSection() {
  return (
    <section className="bg-white/25 py-12 md:py-20 px-7 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Become a Part of EEMA:{" "}
              <span className="text-orange-600">
                Connect, Collaborate, and Innovate
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Since 2008, EEMA has evolved from a distinguished network of
              India’s leading event and experiential marketing agencies into a
              dynamic, inclusive community. As we step into 2025, we are
              expanding our reach, welcoming professionals and organisations
              from all corners of the industry who are shaping its future.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our inclusive membership policy is designed to foster
              collaboration, promote knowledge-sharing, and establish industry
              standards. By becoming an EEMA member, you’ll connect with a
              network that champions innovation, excellence, and growth across a
              wide range of sectors, including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
              <li>Emerging and established agencies</li>
              <li>Event service providers (supply chain)</li>
              <li>Artists and performers</li>
              <li>Students and young professionals</li>
              <li>International agencies, professionals, and associations</li>
            </ul>
            <p className="text-lg text-gray-700 font-semibold">
              Join EEMA today and be part of a community that&apos;s redefining
              the events industry. Together, we innovate, elevate, and inspire!
            </p>

            {/* Download Brochure Button */}
            <div className="mt-8">
              <a
                href="https://forms.gle/5t9GKe4yw6EHcvUy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              >
                DOWNLOAD EEMA BROCHURE
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://eemaindia.com/uploads/sliders/5cbd68be125e2p5qKj96aSR.jpeg"
                alt="People networking at an EEMA event"
                fill
                style={{ objectFit: "cover" }} // Ensures the image covers the area
                priority // Preload this image as it's above the fold
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Responsive image sizes
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
