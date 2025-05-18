import Gallery from "../../components/Gallery";

// Sample gallery image data (replace with actual images)
const galleryImages = [
  {
    src: "/assets/images/gallery/move-1.jpeg",
    alt: "Moving truck loaded with boxes",
  },
  { src: "/assets/images/gallery/move-2.jpeg", alt: "Team packing furniture" },
  {
    src: "/assets/images/gallery/move-3.jpeg",
    alt: "Family unpacking in new home",
  },
  {
    src: "/assets/images/gallery/move-4.jpeg",
    alt: "Bike being loaded for transport",
  },
  {
    src: "/assets/images/gallery/move-5.jpeg",
    alt: "Office relocation in progress",
  },
  {
    src: "/assets/images/gallery/move-6.jpeg",
    alt: "Packing fragile items with care",
  },
  {
    src: "/assets/images/gallery/move-7.jpeg",
    alt: "Moving truck on the road",
  },
  {
    src: "/assets/images/gallery/move-8.jpeg",
    alt: "Team unloading at destination",
  },
  {
    src: "/assets/images/gallery/move-9.jpeg",
    alt: "Movers wrapping a sofa with protective film",
  },
  {
    src: "/assets/images/gallery/move-10.jpeg",
    alt: "Loading a car onto a transport carrier",
  },
  {
    src: "/assets/images/gallery/move-11.jpeg",
    alt: "Family organizing boxes in their new home",
  },
  {
    src: "/assets/images/gallery/move-12.jpeg",
    alt: "Team securing heavy furniture in the truck",
  },
  {
    src: "/assets/images/gallery/move-13.jpeg",
    alt: "Moving truck parked outside a residential building",
  },
  {
    src: "/assets/images/gallery/move-14.jpeg",
    alt: "Packing electronics with bubble wrap",
  },
  {
    src: "/assets/images/gallery/move-15.jpeg",
    alt: "Office team setting up desks in new location",
  },
  {
    src: "/assets/images/gallery/move-16.jpeg",
    alt: "Movers carrying a refrigerator down stairs",
  },
  {
    src: "/assets/images/gallery/move-17.jpeg",
    alt: "Unpacking kitchen items in a new home",
  },
  {
    src: "/assets/images/gallery/move-18.jpeg",
    alt: "Bike secured for long-distance transport",
  },
  {
    src: "/assets/images/gallery/move-19.jpeg",
    alt: "Team labeling boxes for easy unpacking",
  },
  {
    src: "/assets/images/gallery/move-20.jpeg",
    alt: "Moving truck navigating a city street",
  },
  {
    src: "/assets/images/gallery/move-21.jpeg",
    alt: "Family celebrating their move-in day",
  },
  {
    src: "/assets/images/gallery/move-22.jpeg",
    alt: "Movers loading a wardrobe into the truck",
  },
  {
    src: "/assets/images/gallery/move-23.jpeg",
    alt: "Packing glassware with protective padding",
  },
  {
    src: "/assets/images/gallery/move-24.jpeg",
    alt: "Office relocation team moving computer monitors",
  },
  {
    src: "/assets/images/gallery/move-25.jpeg",
    alt: "Unloading boxes at a new apartment",
  },
  {
    src: "/assets/images/gallery/move-26.jpeg",
    alt: "Car being transported on a flatbed truck",
  },
  {
    src: "/assets/images/gallery/move-27.jpeg",
    alt: "Movers assembling furniture in a new home",
  },
  {
    src: "/assets/images/gallery/move-28.jpeg",
    alt: "Team organizing a moving truck efficiently",
  },
  {
    src: "/assets/images/gallery/move-29.jpeg",
    alt: "Packing books into sturdy boxes",
  },
  {
    src: "/assets/images/gallery/move-30.jpeg",
    alt: "Moving truck at a highway rest stop",
  },
  {
    src: "/assets/images/gallery/move-31.jpeg",
    alt: "Family unpacking toys in a child's room",
  },
  {
    src: "/assets/images/gallery/move-32.jpeg",
    alt: "Movers securing a piano for transport",
  },
  {
    src: "/assets/images/gallery/move-33.jpeg",
    alt: "Office team unpacking files in new office",
  },
  {
    src: "/assets/images/gallery/move-34.jpeg",
    alt: "Unloading a mattress at a new residence",
  },
  {
    src: "/assets/images/gallery/move-35.jpeg",
    alt: "Bike being carefully packed for transport",
  },
  {
    src: "/assets/images/gallery/move-36.jpeg",
    alt: "Packing delicate artwork with custom crates",
  },
  {
    src: "/assets/images/gallery/move-37.jpeg",
    alt: "Moving truck parked near a corporate building",
  },
  {
    src: "/assets/images/gallery/move-38.jpeg",
    alt: "Team setting up a new home entertainment system",
  },
  {
    src: "/assets/images/gallery/move-39.jpeg",
    alt: "Family arranging furniture in their new living room",
  },
  {
    src: "/assets/images/gallery/move-40.jpeg",
    alt: "Movers loading a dining table into the truck",
  },
  {
    src: "/assets/images/gallery/move-41.jpeg",
    alt: "Packing clothes into wardrobe boxes",
  },
  {
    src: "/assets/images/gallery/move-42.jpeg",
    alt: "Office relocation team moving office chairs",
  },
  {
    src: "/assets/images/gallery/move-43.jpeg",
    alt: "Unloading a washing machine at a new home",
  },
  {
    src: "/assets/images/gallery/move-44.jpeg",
    alt: "Car secured on a transport trailer",
  },
  {
    src: "/assets/images/gallery/move-45.jpeg",
    alt: "Movers unpacking a kitchen in a new apartment",
  },
  {
    src: "/assets/images/gallery/move-46.jpeg",
    alt: "Team using a dolly to move heavy boxes",
  },
  {
    src: "/assets/images/gallery/move-47.jpeg",
    alt: "Moving truck crossing a bridge",
  },
  {
    src: "/assets/images/gallery/move-48.jpeg",
    alt: "Family unpacking dishes in their new kitchen",
  },
  {
    src: "/assets/images/gallery/move-49.jpeg",
    alt: "Movers wrapping a TV with protective padding",
  },
  {
    src: "/assets/images/gallery/move-50.jpeg",
    alt: "Office team setting up workstations in new office",
  },
  {
    src: "/assets/images/gallery/move-51.jpeg",
    alt: "Unloading a sofa at a new residence",
  },
  {
    src: "/assets/images/gallery/move-52.jpeg",
    alt: "Bike being transported on a truck",
  },
  {
    src: "/assets/images/gallery/move-53.jpeg",
    alt: "Packing antiques with extra care",
  },
  {
    src: "/assets/images/gallery/move-54.jpeg",
    alt: "Moving truck parked in a residential area",
  },
  {
    src: "/assets/images/gallery/move-55.jpeg",
    alt: "Team assembling a bed in a new home",
  },
  {
    src: "/assets/images/gallery/move-56.jpeg",
    alt: "Family organizing their new home office",
  },
  {
    src: "/assets/images/gallery/move-57.jpeg",
    alt: "Movers loading gym equipment into the truck",
  },
  {
    src: "/assets/images/gallery/move-58.jpeg",
    alt: "Packing children's toys into boxes",
  },
  {
    src: "/assets/images/gallery/move-59.jpeg",
    alt: "Office relocation team moving filing cabinets",
  },
  {
    src: "/assets/images/gallery/move-60.jpeg",
    alt: "Unloading a refrigerator at a new apartment",
  },
  {
    src: "/assets/images/gallery/move-61.jpeg",
    alt: "Car being loaded for interstate transport",
  },
  {
    src: "/assets/images/gallery/move-62.jpeg",
    alt: "Movers unpacking a wardrobe in a new home",
  },
  {
    src: "/assets/images/gallery/move-63.jpeg",
    alt: "Team securing a glass table for transport",
  },
  {
    src: "/assets/images/gallery/move-64.jpeg",
    alt: "Moving truck driving through a rural area",
  },
  {
    src: "/assets/images/gallery/move-65.jpeg",
    alt: "Family unpacking bookshelves in their new home",
  },
  {
    src: "/assets/images/gallery/move-66.jpeg",
    alt: "Movers wrapping a mirror with protective film",
  },
  {
    src: "/assets/images/gallery/move-67.jpeg",
    alt: "Office team setting up conference room equipment",
  },
  {
    src: "/assets/images/gallery/move-68.jpeg",
    alt: "Unloading a bookshelf at a new residence",
  },
  {
    src: "/assets/images/gallery/move-69.jpeg",
    alt: "Bike being unloaded at the destination",
  },
  {
    src: "/assets/images/gallery/move-70.jpeg",
    alt: "Packing musical instruments with care",
  },
  {
    src: "/assets/images/gallery/move-71.jpeg",
    alt: "Moving truck parked near an apartment complex",
  },
  {
    src: "/assets/images/gallery/move-72.jpeg",
    alt: "Team assembling a dining set in a new home",
  },
  {
    src: "/assets/images/gallery/move-73.jpeg",
    alt: "Family organizing their new bedroom",
  },
  {
    src: "/assets/images/gallery/move-74.jpeg",
    alt: "Movers loading outdoor furniture into the truck",
  },
  {
    src: "/assets/images/gallery/move-75.jpeg",
    alt: "Packing kitchen appliances into boxes",
  },
  {
    src: "/assets/images/gallery/move-76.jpeg",
    alt: "Office relocation team moving printers",
  },
  {
    src: "/assets/images/gallery/move-77.jpeg",
    alt: "Unloading a couch at a new apartment",
  },
  {
    src: "/assets/images/gallery/move-78.jpeg",
    alt: "Car arriving at its new destination",
  },
  {
    src: "/assets/images/gallery/move-79.jpeg",
    alt: "Movers carefully handling antique furniture",
  },
  {
    src: "/assets/images/gallery/move-80.jpeg",
    alt: "Team organizing boxes in a storage facility",
  },
  {
    src: "/assets/images/gallery/move-81.jpeg",
    alt: "Packing delicate glass items with bubble wrap",
  },
  {
    src: "/assets/images/gallery/move-82.jpeg",
    alt: "Moving truck parked at a commercial building",
  },
  {
    src: "/assets/images/gallery/move-83.jpeg",
    alt: "Family setting up their new living room",
  },
  {
    src: "/assets/images/gallery/move-84.jpeg",
    alt: "Movers loading a grandfather clock",
  },
  {
    src: "/assets/images/gallery/move-85.jpeg",
    alt: "Office team moving server equipment",
  },
  {
    src: "/assets/images/gallery/move-86.jpeg",
    alt: "Unloading a piano at a new residence",
  },
  {
    src: "/assets/images/gallery/move-87.jpeg",
    alt: "Bike being prepared for long-distance transport",
  },
  {
    src: "/assets/images/gallery/move-88.jpeg",
    alt: "Packing artwork with custom wooden crates",
  },
  {
    src: "/assets/images/gallery/move-89.jpeg",
    alt: "Moving truck navigating through city traffic",
  },
  {
    src: "/assets/images/gallery/move-90.jpeg",
    alt: "Team assembling a modular kitchen",
  },
  {
    src: "/assets/images/gallery/move-91.jpeg",
    alt: "Family organizing their new study room",
  },
  {
    src: "/assets/images/gallery/move-92.jpeg",
    alt: "Movers loading garden furniture",
  },
  {
    src: "/assets/images/gallery/move-93.jpeg",
    alt: "Packing electronics with anti-static materials",
  },
];

// Video data
const galleryVideos = [
  {
    src: "https://youtu.be/ve4nc-X6JdM?si=G8jeb23IrkwKEP-O",
    alt: "Keshav Packers and Movers - Our Moving Services",
    thumbnail: "/assets/images/gallery/video-thumbnail.jpg", // You'll need to add this thumbnail image
  },
];

// Group images into rows (2 columns on mobile, 4 columns on desktop)
const imagesPerRow = {
  mobile: 2, // 2 columns on mobile
  desktop: 4, // 4 columns on desktop/tablet
};

const rows = [];
for (let i = 0; i < galleryImages.length; i += imagesPerRow.desktop) {
  const rowImages = galleryImages.slice(i, i + imagesPerRow.desktop);
  rows.push(rowImages);
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Gallery | Keshav Packers and Movers",
    description:
      "Explore our gallery to see how Keshav Packers and Movers ensures seamless relocations across India with professional moving services.",
    keywords:
      "packers and movers gallery, moving services photos, relocation images India",
    openGraph: {
      title: "Gallery | Keshav Packers and Movers",
      description:
        "Explore our gallery to see how Keshav Packers and Movers ensures seamless relocations across India.",
      type: "website",
      url: "https://keshavpackersmovers.com/gallery",
    },
  };
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark">
          Gallery
        </h1>
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-4 max-w-3xl mx-auto">
          Explore our gallery to see how Keshav Packers and Movers ensures
          seamless relocations across India with professional moving services.
        </p>
      </section>

      {/* Video Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-poppins font-poppinsBold text-textDark mb-8 text-center">
          Our Moving Services in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryVideos.map((video, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={video.src.replace("youtu.be", "www.youtube.com/embed")}
                title={video.alt}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery rows={rows} />
    </div>
  );
}
