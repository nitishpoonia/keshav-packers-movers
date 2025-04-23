import InlineContactForm from "@/components/InlineContactForm";
import Link from "next/link";
import blogData from "@/data/blogData";

// Generate static paths for each blog slug
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = blogData[slug] || { meta: {} };

  return {
    title: post.meta.title || "Blog Post Not Found | Keshav Packers and Movers",
    description: post.meta.description || "Blog post not found.",
    keywords: post.meta.keywords || "",
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      url: `/blog/${slug}`,
    },
  };
}

// Server Component
export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = blogData[slug] || {
    title: "Blog Post Not Found",
    excerpt: "",
    content: [],
    meta: {},
  };

  return (
    <div className="relative bg-lightPeach py-12">
      <div className="container mx-auto px-4">
        {/* Title Section (Replaces Hero Image) */}
        <div className="bg-white rounded-[12px] shadow-md py-8 px-4 mb-8 text-center border border-gray-200">
          <h1 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark">
            {post.title}
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {post.content.length > 0 ? (
            post.content.map((section, index) => (
              <div key={index}>
                <h2 className="text-subheading md:text-[24px] font-poppins font-poppinsBold text-textDark">
                  {section.heading}
                </h2>
                <p
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-poppinsRegular text-textMedium mt-2"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>
            ))
          ) : (
            <div className="container mx-auto px-4 py-12 text-center">
              <h2 className="text-heading sm:text-[40px] md:text-[48px] lg:text-[56px] font-poppins font-poppinsBold text-textDark">
                Blog Post Not Found
              </h2>
              <p className="text-body sm:text-subheading md:text-[20px] font-poppins font-poppinsRegular text-textMedium mt-4">
                The blog post you’re looking for doesn’t exist. Please check our{" "}
                <Link href="/blog" className="text-primary underline">
                  Blog
                </Link>{" "}
                page.
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <InlineContactForm />
        </div>
      </div>
    </div>
  );
}
