import { motion } from "framer-motion";

const services = [
  {
    name: "Residential Painting",
    description:
      "Transform your home with our expert interior and exterior painting services. We handle everything from color consultation to final touches.",
    icon: (props: any) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Commercial Painting",
    description:
      "Professional painting services for businesses and commercial properties. We work around your schedule to minimize disruption.",
    icon: (props: any) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    name: "Interior Painting",
    description:
      "Refresh your living spaces with our meticulous interior painting services. We pay attention to every detail for a flawless finish.",
    icon: (props: any) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    name: "Exterior Painting",
    description:
      "Protect and enhance your property's curb appeal with our durable exterior painting solutions. We use premium materials for lasting results.",
    icon: (props: any) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset ring-blue-600/20 bg-white/50 backdrop-blur-sm mb-4"
          >
            <span className="font-mono">✨</span>
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Painting
            </span>
            <br />
            <span className="text-gray-900">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We offer a wide range of professional painting services tailored to
            meet your specific needs. Our experienced team ensures exceptional
            results for every project.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="relative flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300 group hover:shadow-lg">
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-4 h-4" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900 mt-4">
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
