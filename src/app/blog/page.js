import Link from "next/link";
import blogData from "@/data/blogData";

export const metadata = {
  title: "Blog | Keshav Packers and Movers",
  description:
    "Explore helpful moving tips and guides on the Keshav Packers and Movers blog. Learn how to make your relocation smooth and stress-free with expert advice.",
  keywords:
    "packers and movers blog, moving tips, relocation guides, home moving advice",
  openGraph: {
    title: "Blog | Keshav Packers and Movers",
    description:
      "Explore helpful moving tips and guides on the Keshav Packers and Movers blog.",
    type: "website",
    url: "https://yourwebsite.com/blog",
  },
};

export default function Blog() {
  return (
    <div className="relative bg-lightPeach py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-[26px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-primary text-center">
          Blog
        </h1>

        {/* Subheading */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          Explore helpful moving tips, guides, and insights to make your
          relocation smooth and stress-free with Keshav Packers and Movers.
        </p>

        {/* Blog Posts Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1366px] mx-auto">
          {Object.values(blogData).map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-[12px] shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              {/* Content (Expanded to fill card) */}
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <div>
                  <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
                    {post.title}
                  </h2>
                  <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-4">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-primary font-poppins font-poppinsBold text-[16px] hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
