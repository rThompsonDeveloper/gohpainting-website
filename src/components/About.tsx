import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-blue-600/20 bg-white/50 backdrop-blur-sm mb-4"
            >
              <span className="font-mono">🏠</span>
              <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Our Story
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Family-Owned Excellence
              </span>
              <br />
              <span className="text-gray-900">in Raleigh Painting</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              For over a decade, GOHpainting has been transforming homes and
              businesses in Raleigh, NC with our commitment to quality,
              attention to detail, and exceptional customer service.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">
                At GOHpainting, we're more than just a painting company – we're
                a family-owned business that takes pride in transforming spaces
                and creating lasting relationships with our clients in Raleigh
                and surrounding areas. Our team of skilled professionals brings
                years of experience and a passion for perfection to every
                project.
              </p>

              <p className="text-lg text-gray-600">
                Founded with a commitment to excellence and attention to detail,
                we've built our reputation on delivering exceptional results and
                outstanding customer service. Our team of skilled professionals
                treats every project as if it were their own home, ensuring the
                highest quality workmanship and customer satisfaction.
              </p>

              <p className="text-lg text-gray-600">
                What sets us apart is our dedication to quality workmanship and
                our personal approach to every project. As a family-owned
                business, we understand the importance of trust and reliability
                when working in your home or business. We take pride in our work
                and stand behind every project we complete.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-12"></span>
                  <span className="relative">Get Your Free Quote</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-blue-800">
                  Our Values
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        Family-Owned & Operated
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Personal attention and care in every project
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        Quality Workmanship
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Attention to detail in every stroke
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        Customer Satisfaction
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Your satisfaction is our priority
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        Attention to Detail
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Precision in every aspect of our work
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-12"
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Why Choose GOHpainting?
              </span>
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Experienced Team</h4>
                <p className="text-gray-600">
                  Our skilled professionals bring years of experience and
                  expertise to every project, ensuring exceptional results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Quality Guaranteed
                </h4>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee,
                  ensuring your complete peace of mind.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Timely Service</h4>
                <p className="text-gray-600">
                  We respect your time and complete projects on schedule,
                  minimizing disruption to your daily life.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
