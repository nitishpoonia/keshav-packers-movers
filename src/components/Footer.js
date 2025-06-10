// src/components/Footer.js
import Link from "next/link";
import Image from "next/image";
import StateCityList from "./StateCityList"; // New Client Component for interactivity

// List of Indian states and cities (same as before)
const indianStatesAndCities = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
    "Rajahmundry",
    "Tirupati",
    "Kadapa",
    "Anantapur",
    "Eluru",
    "Ongole",
    "Machilipatnam",
    "Tenali",
    "Srikakulam",
    "Vizianagaram",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Tawang",
    "Pasighat",
    "Roing",
    "Tezu",
    "Bomdila",
    "Ziro",
    "Aalo",
    "Yingkiong",
    "Khonsa",
    "Changlang",
    "Namsai",
    "Daporijo",
    "Seppa",
  ],
  Assam: [
    "Guwahati",
    "Silchar",
    "Dibrugarh",
    "Jorhat",
    "Nagaon",
    "Tinsukia",
    "Tezpur",
    "Bongaigaon",
    "Dhubri",
    "Diphu",
    "Karimganj",
    "Sivasagar",
    "Goalpara",
    "Barpeta",
    "Lakhimpur",
  ],
  Bihar: [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Arrah",
    "Bihar Sharif",
    "Katihar",
    "Purnia",
    "Begusarai",
    "Munger",
    "Chapra",
    "Hajipur",
    "Sasaram",
    "Siwan",
  ],
  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
    "Rajnandgaon",
    "Jagdalpur",
    "Raigarh",
    "Ambikapur",
    "Dhamtari",
    "Mahasamund",
    "Kanker",
    "Narayanpur",
    "Kawardha",
    "Janjgir",
  ],
  Goa: [
    "Panaji",
    "Margao",
    "Vasco da Gama",
    "Mapusa",
    "Ponda",
    "Bicholim",
    "Curchorem",
    "Cuncolim",
    "Quepem",
    "Sanguem",
    "Valpoi",
    "Canacona",
    "Pernem",
    "Sanquelim",
    "Dabolim",
  ],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Gandhinagar",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Anand",
    "Nadiad",
    "Mehsana",
    "Bharuch",
    "Porbandar",
    "Gandhidham",
    "Navsari",
  ],
  Haryana: [
    "Gurugram",
    "Faridabad",
    "Hisar",
    "Panipat",
    "Karnal",
    "Sonipat",
    "Yamunanagar",
    "Rohtak",
    "Ambala",
    "Kurukshetra",
    "Kaithal",
    "Jind",
    "Bhiwani",
    "Sirsa",
    "Rewari",
  ],
  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Mandi",
    "Solan",
    "Kullu",
    "Manali",
    "Una",
    "Hamirpur",
    "Bilaspur",
    "Chamba",
    "Kangra",
    "Palampur",
    "Nahan",
    "Paonta Sahib",
    "Sundernagar",
  ],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
    "Hazaribagh",
    "Giridih",
    "Ramgarh",
    "Phusro",
    "Medininagar",
    "Dumka",
    "Sahibganj",
    "Chaibasa",
    "Lohardaga",
    "Gumla",
  ],
  Karnataka: [
    "Bengaluru",
    "Mysuru",
    "Hubli",
    "Mangalore",
    "Belgaum",
    "Gulbarga",
    "Davanagere",
    "Bellary",
    "Bijapur",
    "Shimoga",
    "Tumkur",
    "Raichur",
    "Bidar",
    "Hospet",
    "Udupi",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Kannur",
    "Alappuzha",
    "Kottayam",
    "Palakkad",
    "Malappuram",
    "Pathanamthitta",
    "Idukki",
    "Wayanad",
    "Kasaragod",
    "Ernakulam",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
    "Dewas",
    "Satna",
    "Ratlam",
    "Rewa",
    "Katni",
    "Singrauli",
    "Burhanpur",
    "Khandwa",
    "Morena",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Thane",
    "Nashik",
    "Aurangabad",
    "Solapur",
    "Amravati",
    "Kolhapur",
    "Akola",
    "Latur",
    "Dhule",
    "Ahmednagar",
    "Chandrapur",
    "Jalgaon",
  ],
  Manipur: [
    "Imphal",
    "Thoubal",
    "Bishnupur",
    "Churachandpur",
    "Kakching",
    "Ukhrul",
    "Senapati",
    "Tamenglong",
    "Jiribam",
    "Moreh",
    "Kangpokpi",
    "Noney",
    "Kamjong",
    "Tengnoupal",
    "Pherzawl",
  ],
  Meghalaya: [
    "Shillong",
    "Tura",
    "Nongstoin",
    "Jowai",
    "Williamnagar",
    "Nongpoh",
    "Baghmara",
    "Mairang",
    "Mawkyrwat",
    "Sohra",
    "Khliehriat",
    "Resubelpara",
    "Ampati",
    "Dawki",
    "Pynursla",
  ],
  Mizoram: [
    "Aizawl",
    "Lunglei",
    "Saiha",
    "Champhai",
    "Kolasib",
    "Serchhip",
    "Mamit",
    "Lawngtlai",
    "Hnahthial",
    "Saitual",
    "Khawzawl",
    "Thenzawl",
    "North Vanlaiphai",
    "Vairengte",
    "Zawlnuam",
  ],
  Nagaland: [
    "Kohima",
    "Dimapur",
    "Mokokchung",
    "Tuensang",
    "Wokha",
    "Zunheboto",
    "Mon",
    "Phek",
    "Longleng",
    "Kiphire",
    "Peren",
    "Chumukedima",
    "Tseminyu",
    "Niuland",
    "Shamator",
  ],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Berhampur",
    "Sambalpur",
    "Puri",
    "Balasore",
    "Bhadrak",
    "Baripada",
    "Jharsuguda",
    "Jeypore",
    "Paradip",
    "Dhenkanal",
    "Keonjhar",
    "Angul",
  ],
  Punjab: [
    "Chandigarh",
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Mohali",
    "Hoshiarpur",
    "Pathankot",
    "Moga",
    "Firozpur",
    "Kapurthala",
    "Sangrur",
    "Gurdaspur",
    "Faridkot",
  ],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Alwar",
    "Bhilwara",
    "Sikar",
    "Pali",
    "Sri Ganganagar",
    "Hanumangarh",
    "Barmer",
    "Chittorgarh",
    "Jaisalmer",
  ],
  Sikkim: [
    "Gangtok",
    "Namchi",
    "Gyalshing",
    "Mangan",
    "Ravangla",
    "Singtam",
    "Jorethang",
    "Rangpo",
    "Pakyong",
    "Soreng",
    "Yuksom",
    "Lachen",
    "Lachung",
    "Pelling",
    "Rinchenpong",
  ],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thoothukudi",
    "Dindigul",
    "Thanjavur",
    "Karur",
    "Namakkal",
    "Kanyakumari",
    "Hosur",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Nizamabad",
    "Karimnagar",
    "Khammam",
    "Ramagundam",
    "Mahbubnagar",
    "Nalgonda",
    "Adilabad",
    "Suryapet",
    "Miryalaguda",
    "Jagtial",
    "Mancherial",
    "Kothagudem",
    "Siddipet",
  ],
  Tripura: [
    "Agartala",
    "Udaipur",
    "Dharmanagar",
    "Kailasahar",
    "Belonia",
    "Khowai",
    "Ambassa",
    "Sabroom",
    "Sonamura",
    "Teliamura",
    "Amarpur",
    "Kamalpur",
    "Ranirbazar",
    "Santirbazar",
    "Bishalgarh",
  ],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Agra",
    "Varanasi",
    "Meerut",
    "Allahabad",
    "Bareilly",
    "Aligarh",
    "Moradabad",
    "Saharanpur",
    "Gorakhpur",
    "Noida",
    "Firozabad",
    "Jhansi",
  ],
  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Nainital",
    "Mussoorie",
    "Roorkee",
    "Haldwani",
    "Rudrapur",
    "Kashipur",
    "Pithoragarh",
    "Almora",
    "Champawat",
    "Bageshwar",
    "Ranikhet",
    "Uttarkashi",
  ],
  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Asansol",
    "Siliguri",
    "Malda",
    "Kharagpur",
    "Haldia",
    "Darjeeling",
    "Jalpaiguri",
    "Cooch Behar",
    "Bankura",
    "Purulia",
    "Bardhaman",
    "Suri",
  ],
  "Andaman and Nicobar Islands": [
    "Port Blair",
    "Havelock Island",
    "Neil Island",
    "Diglipur",
    "Mayabunder",
    "Rangat",
    "Little Andaman",
    "Car Nicobar",
    "Campbell Bay",
    "Kamorta",
    "Long Island",
    "Baratang",
    "Cinque Island",
    "Ross Island",
    "Viper Island",
  ],
  Chandigarh: ["Chandigarh"],
  "Daman and Diu": [
    "Daman",
    "Diu",
    "Silvassa",
    "Amli",
    "Naroli",
    "Dadra",
    "Khanvel",
    "Kherdi",
    "Rakholi",
    "Samarvarni",
    "Magarwada",
    "Surangi",
    "Vapi",
    "Parzai",
    "Mandoni",
  ],
  Delhi: [
    "New Delhi",
    "Delhi",
    "Noida",
    "Gurgaon",
    "Faridabad",
    "Ghaziabad",
    "Dwarka",
    "Rohini",
    "Saket",
    "Janakpuri",
    "Pitampura",
    "Karol Bagh",
    "Laxmi Nagar",
    "Shahdara",
    "Mayur Vihar",
  ],
  "Jammu and Kashmir": [
    "Srinagar",
    "Jammu",
    "Anantnag",
    "Baramulla",
    "Sopore",
    "Kathua",
    "Udhampur",
    "Bandipora",
    "Kupwara",
    "Pulwama",
    "Rajouri",
    "Ganderbal",
    "Kulgam",
    "Shopian",
    "Poonch",
  ],
  Ladakh: [
    "Leh",
    "Kargil",
    "Nubra",
    "Zanskar",
    "Dras",
    "Sham",
    "Changthang",
    "Pangong",
    "Tso Moriri",
    "Khaltse",
    "Diskit",
    "Hemis",
    "Lamayuru",
    "Alchi",
    "Nyoma",
  ],
  Lakshadweep: [
    "Kavaratti",
    "Agatti",
    "Amini",
    "Andrott",
    "Minicoy",
    "Kalpeni",
    "Kadmat",
    "Kiltan",
    "Chetlat",
    "Bitra",
    "Bangaram",
    "Thinnakara",
    "Suheli",
    "Cheriyam",
    "Pitti",
  ],
  Puducherry: [
    "Puducherry",
    "Karaikal",
    "Mahe",
    "Yanam",
    "Oulgaret",
    "Villianur",
    "Bahour",
    "Ariyankuppam",
    "Mudaliarpet",
    "Nellithope",
    "Thattanchavady",
    "Kurumbapet",
    "Reddiarpalayam",
    "Thirukkanur",
    "Manavely",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mt-2 mb-10">
          <h2 className="text-[26px] sm:text-[26px] md:text-[30px] font-poppins font-poppinsBold text-primary text-center">
            Keshav Packers and Movers
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 text-center mt-2 max-w-3xl mx-auto">
            We provide moving services across all Indian states and Union
            Territories. Expand a state to see our top cities.
          </p>
          <StateCityList statesAndCities={indianStatesAndCities} />
        </div>
        {/* Top Section: 4-column layout on desktop, 2-column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <Image
                src="/assets/keshav-packers-logo-3.svg"
                alt="Keshav Packers and Movers company logo - Professional moving services"
                width={200}
                height={90}
                className="mt-2"
              />
            </Link>
            <p className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 mt-2">
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
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300 hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[22px] font-poppins font-poppinsBold text-primary">
              Contact Us
            </h4>
            <ul className="mt-2 space-y-2">
              <li className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                Shop No. 10, Shri Kishore Tower, Bajari Mandi Road, Sawranpuri,
                Kanakpura, Jaipur, 302034
              </li>
              <li className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                Phone: +91 7852000465, +91 7568428665
              </li>
              <li className="text-[16px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-gray-300">
                Email: keshavpackerandmovers@gmail.com
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
                href="https://www.facebook.com/profile.php?id=61576871482831"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/facebook-icon.svg"
                  alt="Facebook social media icon - Follow Keshav Packers and Movers"
                  width={30}
                  height={30}
                  className="hover:opacity-80"
                />
              </Link>

              <Link
                href="https://www.instagram.com/keshavpackerandmovers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/instagram-icon.svg"
                  alt="Instagram social media icon - Follow Keshav Packers and Movers"
                  width={30}
                  height={30}
                  className="hover:opacity-80"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@KeshavPackersAndMovers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/youtube-icon.png"
                  alt="Youtube social media icon - Follow Keshav Packers and Movers"
                  width={30}
                  height={30}
                  className="hover:opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 mb-10 pt-4 text-center border-t border-gray-600">
          <p className="text-[16px] sm:text-[16px] font-poppins font-poppinsRegular text-gray-400">
            © {new Date().getFullYear()} Keshav Packers and Movers. All rights
            reserved.
          </p>
        </div>

        {/* SEO Visibility Section: States and Cities */}
      </div>
    </footer>
  );
}
