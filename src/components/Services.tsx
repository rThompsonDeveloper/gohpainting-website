import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Residential Painting",
    description: `Transform your home with our expert interior and exterior painting services. We handle everything from color consultation to final touch-ups.`,
    icon: HomeIcon,
  },
  {
    name: "Commercial Painting",
    description: `Professional painting services for businesses and commercial properties. We work around your schedule to minimize disruption.`,
    icon: BuildingOfficeIcon,
  },
  {
    name: "Interior Painting",
    description: `Refresh your living spaces with our meticulous interior painting services. We pay attention to every detail for a flawless finish.`,
    icon: PaintBrushIcon,
  },
  {
    name: "Exterior Painting",
    description: `Protect and enhance your property's curb appeal with our durable exterior painting solutions. We use high-quality materials for long-lasting results.`,
    icon: SparklesIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We offer comprehensive painting solutions for both residential and
            commercial properties in Raleigh and surrounding areas.
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
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
