import React from "react";
import dayjs from "dayjs";  // Importing dayjs library to handle date formatting

// NewsCard component accepts a single prop `article`
const NewsCard = ({ article }) => {
  return (
    // Container div for the card, styled with Tailwind CSS classes
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full max-w-xs sm:max-w-sm mx-auto mt-4">
      
      {/* Article title displayed in a heading */}
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-black">
        {article.title}
      </h2>
      
      {/* Article author displayed in a paragraph */}
      <p className="text-xs sm:text-sm text-black mb-1">
        {article.author || "Unknown Author"}  {/* Default to "Unknown Author" if author is not provided */}
      </p>
      
      {/* Article publication date, formatted using dayjs */}
      <p className="text-xs text-gray-500 mb-4">
        {dayjs(article.publishedAt).format("MMMM D, YYYY")} {/* Format: Month Day, Year */}
      </p>
      
      {/* Link to the full article */}
      <a
        href={article.url}
        className="text-blue-600 hover:underline text-sm"  {/* Tailwind classes for link styling */}
        target="_blank"  {/* Open link in a new tab */}
        rel="noopener noreferrer"  {/* Security measures for external links */}
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;  // Export the NewsCard component as the default export
