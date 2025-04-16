import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  image,
  title,
  description,
  ctaText,
  link,
}) {
  return (
    <article className="relative bg-lightPeach rounded-[20px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-[500px] sm:max-w-[350px] md:max-w-[500px] mx-auto group">
      {/* Image Section */}
      <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-[20px] group-hover:scale-110 transition-transform duration-500"
        />
        {/* Subtle Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col gap-3 min-h-[140px]">
        {/* Title */}
        <h3 className="text-subheading sm:text-[20px] md:text-[22px] font-poppins font-poppinsBold text-textDark leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-poppins font-poppinsRegular text-textMedium leading-snug flex-grow">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <Link href={link} passHref>
            <button
              className="
                flex items-center space-x-2 
                bg-gradient-to-r from-primary to-secondary 
                text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[15px] md:text-[16px] 
                px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-lg 
                shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
                group-hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] 
                group-hover:bg-gradient-to-l 
                transition-all duration-300
                hover:scale-105
              "
            >
              <span>{ctaText}</span>
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
