"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery({ rows }) {
  const imagesPerRowDesktop = 4;
  console.log(rows);

  return (
    <section className="space-y-6">
      {rows.map((rowImages, rowIndex) => {
        console.log("row images", rowImages);
        return (
          <GalleryRow
            key={rowIndex}
            images={rowImages}
            imagesPerRowDesktop={imagesPerRowDesktop}
          />
        );
      })}
    </section>
  );
}

// Component for each row of images with animation
function GalleryRow({ images, imagesPerRowDesktop }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  console.log("images", images);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {images.map((image, index) => {
        console.log("single image", image);
        return (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-[1px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[5px] hover:scale-105 transition-transform duration-300"
            />
          </div>
        );
      })}
      {/* Fill empty slots to maintain grid alignment */}
      {images.length < imagesPerRowDesktop &&
        Array.from({ length: imagesPerRowDesktop - images.length }).map(
          (_, index) => (
            <div key={`empty-${index}`} className="aspect-square"></div>
          )
        )}
    </motion.div>
  );
}
