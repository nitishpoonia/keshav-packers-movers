// src/components/ServiceCard.js
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
    <article className="relative bg-lightPeach rounded-[12px] overflow-hidden shadow-lg max-w-[500px] sm:max-w-[350px] md:max-w-[500px] mx-auto">
      {/* Image (Fixed height) */}
      <div className="relative h-[180px]">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-t-[12px]"
        />
      </div>

      {/* Content (Remaining height, flexible) */}
      <div className="p-4 flex flex-col justify-between">
        {/* Heading */}
        <h3 className="text-subheading md:text-[20px] font-poppins font-poppinsBold text-textDark">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[14px] sm:text-small md:text-body font-poppins font-poppinsRegular text-textMedium mt-1 line-clamp-3">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <Link href={link} passHref>
            <button
              className="
                flex items-center space-x-2 
                bg-gradient-to-r from-primary to-secondary 
                text-white font-poppins font-poppinsSemiBold text-[14px] sm:text-[14px] md:text-body 
                px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 rounded-lg 
                cursor-pointer 
                shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_4px_6px_rgba(0,0,0,0.15)]
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
