import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    name: "Sarah Johnson",
    content:
      "GOHpainting transformed our home with their exceptional attention to detail. The team was professional, efficient, and the results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    content:
      "As a business owner, I appreciate their reliability and quality work. They completed our office painting project on time and within budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    content:
      "The team at GOHpainting made the entire process stress-free. Their expertise in color selection helped us achieve the perfect look for our home.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ring-1 ring-inset ring-blue-600/20 mb-4"
          >
            <span className="font-mono">🌟</span>
            <span className="ml-2">Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with GOHpainting.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start justify-between bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:ring-blue-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2024-03-16" className="text-gray-500">
                  Mar 16, 2024
                </time>
                <div className="flex items-center gap-x-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-0" />
                  {testimonial.name}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {testimonial.content}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
