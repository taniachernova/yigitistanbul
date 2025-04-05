import React from 'react';
import Link from 'next/link';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  paths: string[]; // Her sayfanın yolu
}

export default function PageNavigation({ currentPage, totalPages, paths }: PageNavigationProps) {
  return (
    <div className="flex justify-center items-center space-x-3 mt-8 mb-6">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const isCurrentPage = pageNumber === currentPage;
        
        return (
          <Link
            key={pageNumber}
            href={paths[index]}
            className={`px-6 py-3 font-bold rounded-full transition ${
              isCurrentPage
                ? 'bg-[#FFD700] text-amber-900 hover:bg-amber-400'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
} 