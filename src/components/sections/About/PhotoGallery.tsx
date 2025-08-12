import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";
import { useState } from "react";
import Gallery1 from "@assets/images/About/gallery/1.jpg";
import Gallery2 from "@assets/images/About/gallery/2.jpg";
import Gallery3 from "@assets/images/About/gallery/3.jpg";
import Gallery4 from "@assets/images/About/gallery/4.jpg";
import Gallery5 from "@assets/images/About/gallery/5.jpg";
import Gallery6 from "@assets/images/About/gallery/6.jpg";
import Gallery7 from "@assets/images/About/gallery/7.jpg";
import Gallery8 from "@assets/images/About/gallery/8.jpg";
import Gallery9 from "@assets/images/About/gallery/9.jpg";
import Gallery10 from "@assets/images/About/gallery/10.jpg";
import Gallery11 from "@assets/images/About/gallery/11.jpg";
import Gallery12 from "@assets/images/About/gallery/12.jpg";
import Gallery13 from "@assets/images/About/gallery/13.jpg";
import Gallery14 from "@assets/images/About/gallery/14.jpg";
import Gallery15 from "@assets/images/About/gallery/15.jpg";
import Gallery16 from "@assets/images/About/gallery/16.jpg";
import Gallery17 from "@assets/images/About/gallery/17.jpg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery data - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: Gallery1,
    },
    {
      id: 2,
      src: Gallery2,
    },
    {
      id: 3,
      src: Gallery3,
    },
    {
      id: 4,
      src: Gallery4,
    },
    {
      id: 5,
      src: Gallery5,
    },
    {
      id: 6,
      src: Gallery6,
    },
    {
      id: 7,
      src: Gallery7,
    },
    {
      id: 8,
      src: Gallery8,
    },
    {
      id: 9,
      src: Gallery9,
    },
    {
      id: 10,
      src: Gallery10,
    },
    {
      id: 11,
      src: Gallery11,
    },
    {
      id: 12,
      src: Gallery12,
    },
    {
      id: 13,
      src: Gallery13,
    },
    {
      id: 14,
      src: Gallery14,
    },
    {
      id: 15,
      src: Gallery15,
    },
    {
      id: 16,
      src: Gallery16,
    },
    {
      id: 17,
      src: Gallery17,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Life at JFBC
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our church family in action
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={`gallery-${image.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <FiEye className="text-white text-3xl" />
                  <p className="text-xs md:text-sm my-2 text-white block">
                    Click to view
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-secondary"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="max-w-4xl w-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={`gallery-${galleryImages[selectedImage].id}`}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
