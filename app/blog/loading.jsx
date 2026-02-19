import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";

export default function Loading() {
  return (
    <>
    <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />

      <div className="mb-20">
        <SectionLayout bg="bg-white">
          <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mb-4" />
          <hr className="w-full h-[1px] mx-auto mt-4 mb-8 bg-gray-200 border-0 rounded" />

          <div className="grid gap-8 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col h-full">
                {/* Image Skeleton */}
                <div className="w-full h-[250px] bg-gray-200 rounded-lg animate-pulse" />
                
                {/* Date Skeleton */}
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse mt-3" />
                
                {/* Title Skeleton */}
                <div className="w-full h-6 bg-gray-200 rounded animate-pulse mt-2" />
                <div className="w-2/3 h-6 bg-gray-200 rounded animate-pulse mt-1 mb-3" />
                
                {/* Body Skeleton */}
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse mt-1" />
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse mt-1 mb-4" />
                
                {/* Button Skeleton */}
                <div className="w-32 h-10 bg-gray-200 rounded animate-pulse mt-auto" />
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </>
  );
}
