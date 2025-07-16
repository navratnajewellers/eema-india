"use client";

export default function EemaxContactPage() {
  return (
    <>
      <main className="bg-white text-black px-6 sm:px-12 py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-600">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            For more details, please write to us at{" "}
            <a
              href="mailto:eemax@eemaindia.com"
              className="text-orange-500 font-semibold underline"
            >
              eemax@eemaindia.com
            </a>
          </p>
        </section>

        {/* Social Section */}
        <section className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2 border-gray-300">
            Social Media
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Facebook Embed */}
            <div>
              <h3 className="text-xl font-semibold text-center text-blue-600 mb-6">
                Facebook
              </h3>
              <div className="w-full overflow-hidden rounded-xl shadow-md">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/eemaindia&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title="Facebook Embed"
                ></iframe>
              </div>
            </div>

            {/* Instagram Embed */}
            <div>
              <h3 className="text-xl font-semibold text-center text-pink-500 mb-6">
                Instagram
              </h3>
              <div className="w-full overflow-hidden rounded-xl shadow-md">
                <iframe
                  src="https://www.instagram.com/eema.india/embed"
                  width="100%"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title="Instagram Embed"
                ></iframe>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Follow us on{" "}
                <a
                  href="https://www.instagram.com/eema.india/?igsh=cDI1ZTRubmVjOXI1"
                  className="text-orange-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @eema.india
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
