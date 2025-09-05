import { motion } from "framer-motion";
import { Image } from "rsuite";

export default function SaAwardsAboutPage({ setActiveSection }) {
  return (
    <motion.section
      id="about"
      onViewportEnter={() => setActiveSection("about")}
    >
      <Image
        src="/images/spotlightawards/spotlight-awards.jpg"
        alt="spolight-awards-about"
      />
      <section className="bg-white py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-yellow-500">Spotlight Awards</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The EEMA Spotlight Awards bring together individuals, organizations,
            and industry leaders to share their experiences and achievements. It
            also provides a platform for event managers to connect with top
            partners for smooth event execution.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
            <strong className="text-black">Since 2011</strong>, the awards have
            recognized leaders in{" "}
            <em>
              Event Technology, Production, and Creativity, fostering
              collaboration and inspiring
            </em>{" "}
            the future of India&apos;s event industry. By featuring a diverse
            jury panel, the awards celebrate innovation and excellence across
            multiple categories.
          </p>
        </motion.div>
      </section>
    </motion.section>
  );
}
