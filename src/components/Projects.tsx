import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface Project {
  title: string;
  location: string;
  description: string;
  images: string[];
  services: string[];
}

const projects: Project[] = [
  {
    title: "Modern Home Transformation",
    location: "North Raleigh",
    description:
      "Complete interior and exterior transformation of a 3,500 sq ft home, featuring custom color consultation and premium finishes.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
  },
  {
    title: "Historic Home Restoration",
    location: "Downtown Raleigh",
    description:
      "Careful restoration of a historic home's original features while modernizing the color scheme for contemporary living.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: [
      "Historic Restoration",
      "Interior Painting",
      "Exterior Painting",
    ],
  },
  {
    title: "Commercial Office Renovation",
    location: "Raleigh Business Park",
    description:
      "Complete office space renovation with custom color schemes to enhance productivity and brand identity.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Commercial Painting", "Brand Colors", "Office Renovation"],
  },
  {
    title: "Luxury Condo Interior",
    location: "downtown Raleigh",
    description:
      "Modern interior painting of a luxury condo in downtown Raleigh",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
  },
  {
    title: "Restaurant Renovation",
    location: "local restaurant",
    description:
      "Complete interior and exterior painting of a local restaurant",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
  },
  {
    title: "Retail Store Makeover",
    location: "North Hills",
    description:
      "Commercial painting project for a retail store in North Hills",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Commercial Painting", "Brand Colors", "Retail Renovation"],
  },
  {
    title: "Apartment Complex",
    location: "Cary",
    description: "Exterior painting of a large apartment complex in Cary",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Exterior Painting", "Color Consultation", "Maintenance"],
  },
  {
    title: "Medical Office",
    location: "medical office building",
    description: "Interior painting of a medical office building",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
  },
  {
    title: "University Building",
    location: "Raleigh",
    description: "Exterior painting of a university building in Raleigh",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Exterior Painting", "Color Consultation", "Maintenance"],
  },
  {
    title: "Hotel Renovation",
    location: "boutique hotel",
    description: "Complete interior and exterior painting of a boutique hotel",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    services: ["Interior Painting", "Exterior Painting", "Color Consultation"],
  },
];

const ProjectSlider = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative group h-[300px] overflow-hidden rounded-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full z-0"
        >
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${project.location}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer"
      >
        <div className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300">
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </div>
      </div>
      <div
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer"
      >
        <div className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300">
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {project.images.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setDirection(index > currentImageIndex ? 1 : -1);
              setCurrentImageIndex(index);
            }}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Project Info Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 z-10"
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm">{project.location}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
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
              <span className="font-mono">🎨</span>
              <span className="ml-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Our Work
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
                Featured Projects
              </span>
              <br />
              <span className="text-gray-900">in Raleigh, NC</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Explore our portfolio of successful painting projects in the
              Raleigh area. Each project showcases our commitment to quality,
              attention to detail, and customer satisfaction.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-gray-200 overflow-hidden hover:ring-blue-200 transition-all duration-300"
              >
                <ProjectSlider project={project} />
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg ring-1 ring-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Ready to Transform Your Space?
                </span>
              </h3>
              <p className="text-gray-600 mb-6">
                Let us bring your vision to life with our expert painting
                services. Contact us today for a free consultation and quote.
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-12"></span>
                <span className="relative">Get Your Free Quote</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
