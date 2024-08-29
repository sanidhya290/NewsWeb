import React from "react";
import dayjs from "dayjs"; 

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full max-w-xs sm:max-w-sm mx-auto mt-4">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-black">
        {article.title}
      </h2>
      <p className="text-xs sm:text-sm text-black mb-1">
        {article.author || "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500 mb-4">
        {dayjs(article.publishedAt).format("MMMM D, YYYY")}
      </p>
      <a
        href={article.url}
        className="text-blue-600 hover:underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
