import Link from "next/link";

export default function InfoHeader() {
  return (
    <div className="animate-info-gradient text-white py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center sm:space-y-0  w-full sm:w-auto">
          {/* Mobile: Contact Us + Both Phone Numbers - Centered */}
          <div className="flex sm:hidden items-center justify-center space-x-2 w-full ">
            <Link
              href="tel:+917852000465"
              className="flex items-center space-x-2 hover:text-lightPeach transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-poppins font-poppinsRegular text-base">
                +91 7852000465
              </span>
            </Link>
            <span className="text-white">|</span>
            <Link
              href="tel:+917568428665"
              className="flex items-center hover:text-lightPeach transition-colors"
            >
              <span className="font-poppins font-poppinsRegular text-base">
                +91 7568428665
              </span>
            </Link>
          </div>

          {/* Desktop: Full Contact Info */}
          <div className="hidden sm:flex items-center space-y-1 sm:space-y-0 sm:space-x-6">
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <Link
                href="tel:+917852000465"
                className="flex items-center space-x-1 hover:text-lightPeach transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-poppins font-poppinsRegular text-sm">
                  +91 7852000465
                </span>
              </Link>
              <Link
                href="tel:+917568428665"
                className="flex items-center space-x-1 hover:text-lightPeach transition-colors"
              >
                <span className="font-poppins font-poppinsRegular text-sm">
                  +91 7568428665
                </span>
              </Link>
            </div>

            {/* Email */}
            <Link
              href="mailto:keshavpackerandmovers@gmail.com"
              className="flex items-center space-x-1 hover:text-lightPeach transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-poppins font-poppinsRegular text-sm">
                keshavpackerandmovers@gmail.com
              </span>
            </Link>
          </div>
        </div>

        {/* Quick Links or Additional Info */}
        <div className="hidden md:flex items-center space-x-4 text-xs">
          <span className="font-poppins font-poppinsRegular">
            24/7 Available
          </span>
          <span className="font-poppins font-poppinsRegular">•</span>
          <span className="font-poppins font-poppinsRegular">Free Quotes</span>
        </div>
      </div>
    </div>
  );
}
