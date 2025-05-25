import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  icon,
  title,
  description,
  ctaText,
  link,
}) {
  return (
    <article className="relative bg-lightPeach rounded-[20px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-[340px] sm:max-w-[280px] md:max-w-[340px] mx-auto group">
      {/* Icon Section */}
      <div className="flex justify-center pt-4">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-3">
          <Image
            src={icon}
            alt={`${title} service icon for Keshav Packers and Movers`}
            fill
            style={{ objectFit: "contain" }}
            className="p-1.5"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 min-h-[120px]">
        {/* Title */}
        <h3 className="text-subheading sm:text-[18px] md:text-[20px] font-poppins font-poppinsBold text-textDark leading-tight text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[12px] sm:text-[13px] md:text-[14px] font-poppins font-poppinsRegular text-textMedium leading-snug text-center flex-grow">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <Link href={link} passHref>
            <button
              className="
                flex items-center space-x-2 
                bg-gradient-to-r from-primary to-secondary 
                text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[13px] md:text-[14px] 
                px-3 py-2 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-lg 
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
