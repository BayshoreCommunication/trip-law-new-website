import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

const BlogCard = ({ blog }) => {
  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <Link href={`/blog/${blog?.slug}`} className="flex flex-col group h-full">
      <div className="overflow-hidden rounded-lg relative h-[250px] w-full">
        <Image
          src={blog?.featuredImage?.image?.url}
          alt={blog?.featuredImage?.altText || blog?.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p className="text-[0.9rem] text-black text-left italic mt-3">
        {postDate(blog?.createdAt)}
      </p>

      <h3 className="text-lg md:text-xl tracking-normal font-bold text-[#1B2639] text-left mt-2 mb-3 line-clamp-2 group-hover:text-[#3a4a64] transition-colors">
        {blog?.title}
      </h3>

      <div className="font-normal text-[0.95rem] text-black mb-4 line-clamp-3 fraction">
        {parse(blog?.body || "")}
      </div>

      <div className="mt-auto flex justify-start">
        <button
          type="button"
          className="text-white bg-[#1B2639] hover:bg-[#162030] font-medium text-sm md:text-base px-4 py-2 focus:outline-none rounded-md transition-colors"
        >
          Read More
        </button>
      </div>
    </Link>
  );
};

export default BlogCard;
