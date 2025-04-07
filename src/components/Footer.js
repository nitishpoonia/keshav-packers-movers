// src/components/Footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // List of 20 cities for SEO visibility
  const cities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Coimbatore",
    "Indore",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Surat",
    "Nagpur",
    "Kanpur",
    "Visakhapatnam",
  ];

  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: 4-column layout on desktop, 2-column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <h3 className="text-[22px] md:text-[26px] font-poppins font-poppinsBold">
                Keshav Packers
              </h3>
            </Link>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 mt-2">
              Your trusted partner for seamless relocation across India. We move
              everything with care and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[22px] font-poppins font-poppinsBold text-primary">
              Quick Links
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[22px] font-poppins font-poppinsBold text-primary">
              Contact Us
            </h4>
            <ul className="mt-2 space-y-2">
              <li className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                123 Moving Street, Bengaluru, India
              </li>
              <li className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                Phone: +91 123-456-7890
              </li>
              <li className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                Email: contact@keshavpackers.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[22px] font-poppins font-poppinsBold text-primary">
              Follow Us
            </h4>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/facebook-icon.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/twitter-icon.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 pt-4 text-center">
          <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-gray-400">
            © {new Date().getFullYear()} Keshav Packers and Movers. All rights
            reserved.
          </p>
        </div>

        {/* SEO Visibility Section */}
        <div className="mt-8 border-t border-gray-600 pt-8">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-poppins font-poppinsBold text-primary text-center">
            Packers and Movers Across India
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 text-center mt-2 max-w-3xl mx-auto">
            We provide moving services across major cities in India. Choose your city
            below to learn more.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((cityName) => (
              <Link
                key={cityName}
                href={`/city/${cityName.toLowerCase()}`}
                className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary text-center"
              >
                Packers and Movers in {cityName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
