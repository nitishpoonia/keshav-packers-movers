// src/components/EstimatedMovingCosts.js
import Accordion from "./Accordion";
import SpecialCard from "./SpecialCard";

export default function EstimatedMovingCosts({ scrollYProgress }) {
  const pricingData = [
    {
      title: "1BHK Home",
      prices: [
        { distance: "Intra City", cost: "₹7,000" },
        { distance: "Intercity", cost: "₹9,500" },
        { distance: "Interstate", cost: "₹15,000" },
        { distance: "Long Distance", cost: "₹20,000" },
        { distance: "Across the Country", cost: "₹30,000" },
      ],
    },
    {
      title: "2BHK Home",
      prices: [
        { distance: "Intra City", cost: "₹11,000" },
        { distance: "Intercity", cost: "₹14,000" },
        { distance: "Interstate", cost: "₹22,000" },
        { distance: "Long Distance", cost: "₹28,000" },
        { distance: "Across the Country", cost: "₹40,000" },
      ],
    },
    {
      title: "3BHK Home",
      prices: [
        { distance: "Intra City", cost: "₹15,000" },
        { distance: "Intercity", cost: "₹18,000" },
        { distance: "Interstate", cost: "₹30,000" },
        { distance: "Long Distance", cost: "₹38,000" },
        { distance: "Across the Country", cost: "₹55,000" },
      ],
    },
    {
      title: "Bike/Car Relocation",
      prices: [
        { distance: "Intra City", cost: "₹3,500" },
        { distance: "Intercity", cost: "₹5,000" },
        { distance: "Interstate", cost: "₹10,000" },
        { distance: "Long Distance", cost: "₹12,500" },
        { distance: "Across the Country", cost: "₹18,000" },
      ],
    },
    {
      title: "Office Relocation",
      prices: [
        { distance: "Intra City", cost: "₹20,000" },
        { distance: "Intercity", cost: "₹25,000" },
        { distance: "Interstate", cost: "₹40,000" },
        { distance: "Long Distance", cost: "₹50,000" },
        { distance: "Across the Country", cost: "₹75,000" },
      ],
    },
  ];

  return (
    <section className="relative bg-lightPeach pb-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center">
          Estimated Moving Costs
        </h2>

        {/* Subtext */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          Prices depend on many things, get a free quote for exact pricing.
        </p>

        {/* Accordion */}
        <div className="mt-8 max-w-3xl mx-auto">
          {pricingData.map((item, index) => (
            <Accordion key={index} title={item.title} prices={item.prices} />
          ))}
        </div>

        {/* Special Card */}
        <SpecialCard scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
