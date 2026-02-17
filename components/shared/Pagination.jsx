"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, totalPages, hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, last page, current page, and neighbors
      if (currentPage <= 3) {
        // Near the beginning
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null; // Don't show pagination if only one page
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrevPage}
        className={`px-4 py-2 rounded-md font-medium text-sm md:text-base transition-colors ${
          hasPrevPage
            ? "bg-[#1B2639] text-white hover:bg-[#162030]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex gap-1 md:gap-2">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-600 font-medium"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 md:px-4 py-2 rounded-md font-medium text-sm md:text-base transition-colors ${
                currentPage === page
                  ? "bg-[#1B2639] text-white"
                  : "bg-gray-200 text-[#1B2639] hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className={`px-4 py-2 rounded-md font-medium text-sm md:text-base transition-colors ${
          hasNextPage
            ? "bg-[#1B2639] text-white hover:bg-[#162030]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
