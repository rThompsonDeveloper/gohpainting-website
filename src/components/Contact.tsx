import { motion } from "framer-motion";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <span className="font-mono">📧</span>
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Contact Us
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
              Get in Touch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Ready to transform your space? Contact us for a free quote or to
            discuss your painting project.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    maxLength={14}
                    className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all duration-200"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <div className="relative">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-12"></span>
                  <span className="relative">Send Message</span>
                </button>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-lg bg-green-50 p-4"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Contact Information
                </h3>
                <dl className="mt-6 space-y-6">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPinIcon
                        className="h-7 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <p className="text-sm leading-7 text-gray-600">
                        Raleigh, NC
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <p className="text-sm leading-7 text-gray-600">
                        (919) 555-0123
                      </p>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <p className="text-sm leading-7 text-gray-600">
                        contact@gohpainting.com
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Business Hours
                </h3>
                <dl className="mt-6 space-y-6">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Hours</span>
                    </dt>
                    <dd>
                      <p className="text-sm leading-7 text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm leading-7 text-gray-600">
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                      <p className="text-sm leading-7 text-gray-600">
                        Sunday: Closed
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
