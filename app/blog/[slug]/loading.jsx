import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";

export default function Loading() {
  return (
    <>
      <PageHeroSection image="/assets/hero-img/blog.jpg" titleH2="Blog" />

      <div className="mb-20">
        <SectionLayout bg="bg-white">
          {/* Title Skeleton */}
          <div className="w-3/4 h-8 md:h-10 bg-gray-200 rounded animate-pulse mb-4" />
          <hr className="w-full h-[1px] mx-auto mt-0 mb-6 bg-gray-200 border-0 rounded" />

          <div className="grid gap-12 mb-10 grid-cols-1 sm:grid-cols-3">
            {/* Main Content Column */}
            <div className="col-span-2">
              {/* Featured Image Skeleton */}
              <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse mb-4" />
              
              {/* Date Skeleton */}
              <div className="w-32 h-4 bg-gray-200 rounded animate-pulse mb-4" />
              
              {/* Body Content Skeleton */}
              <div className="space-y-3">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="col-span-2 sm:col-span-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-6 mb-4">
                  <div className="w-[180px] h-[100px] bg-gray-200 rounded animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" />
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
}
