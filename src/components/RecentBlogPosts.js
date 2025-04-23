import Link from "next/link";
import blogData from "@/data/blogData";

export default function RecentBlogPosts() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading (Reduced Size) */}
        <h2 className="text-[24px] md:text-[40px] lg:text-[48px] font-poppins font-poppinsBold text-primary text-center">
          Recent Blog Posts
        </h2>

        {/* Subheading */}
        <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium text-center mt-4 max-w-3xl mx-auto">
          Get the latest tips and insights to make your move easier with Keshav
          Packers and Movers.
        </p>

        {/* Blog Posts Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1366px] mx-auto">
          {Object.values(blogData).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="w-full sm:w-[400px] h-[350px] mx-auto bg-white rounded-[12px] shadow-md hover:shadow-lg transition-shadow duration-300 block border border-gray-200"
            >
              {/* Content (Expanded to fill card) */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
                    {post.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] font-poppins font-poppinsRegular text-textMedium mt-4">
                    {post.excerpt}
                  </p>
                </div>
                <span className="inline-block text-primary font-poppins font-poppinsBold text-[16px] hover:underline mt-4">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Link */}
        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="text-primary font-poppins font-poppinsBold text-[18px] hover:underline"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
