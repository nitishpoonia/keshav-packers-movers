// src/components/OurProcess.js
import AnimatedTimeline from "./AnimatedTimeline";
import GetQuoteButton from "./GetQuoteButton";

export default function OurProcess({ ref, scrollYProgress }) {
 const steps = [
   {
     title: "Get a Quote",
     description:
       "Start your journey with a free, no-obligation quote tailored to your needs. Our affordable movers provide transparent pricing for local and long-distance relocations, ensuring you know exactly what to expect.",
     icon: "/assets/icons/get-quote-icon.svg",
   },
   {
     title: "Schedule Your Move",
     description:
       "Choose a date and time that works best for you with our flexible scheduling options. Our team coordinates every detail to ensure a stress-free relocation, whether you’re moving across the city or the country.",
     icon: "/assets/icons/schedule-move-icon.svg",
   },
   {
     title: "Packing and Loading",
     description:
       "Rely on our professional packing services to securely pack your belongings with high-quality materials. Our experienced team handles the loading process with care, ensuring everything is safely transported.",
     icon: "/assets/icons/packing-loading-icon.svg",
   },
   {
     title: "Delivery",
     description:
       "Enjoy a seamless delivery experience as we transport your items to your new location. We ensure timely delivery and careful unloading, making your move-in process smooth and hassle-free.",
     icon: "/assets/icons/delivery-icon.svg",
   },
 ];

  return (
    <section ref={ref} className="relative bg-lightPeach py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark text-center mb-8">
          Our Process
        </h2>

        {/* Timeline */}
        <AnimatedTimeline steps={steps} scrollYProgress={scrollYProgress} />
        <div className="flex justify-center mt-8">
          <GetQuoteButton scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
