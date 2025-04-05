import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Artistic background elements */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Floating paint splatters */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />
        <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
        <div className="absolute left-1/3 bottom-1/4 h-28 w-28 rounded-full bg-blue-600/20 blur-2xl" />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-blue-600/20 bg-white/50 backdrop-blur-sm mb-4"
            >
              <span className="font-mono">🎨</span>
              <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Family-Owned & Operated
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Transform Your Space
              </span>
              <br />
              <span className="text-gray-900">with Expert Painting</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Experience the difference of professional painting services in
              Raleigh, NC. We combine quality craftsmanship with exceptional
              customer service to bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-12"></span>
                <span className="relative">Get a Free Quote</span>
              </Link>
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-gray-900 rounded-lg ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-blue-500 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-12"></span>
                <span className="relative">
                  Learn more{" "}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
