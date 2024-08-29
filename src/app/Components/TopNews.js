"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const TopNews = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=599773e8704d42a48200f5ea1636d3e9"
        );
        setEvents(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading news: {error.message}
      </p>
    );

  // Sort articles by published date in descending order
  const sortedArticles = events.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const topFiveArticles = sortedArticles.slice(0, 5); // Get the top 5 articles

  return (
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mx-auto max-w-screen-md">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-black">
        Latest News
      </h2>
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {topFiveArticles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopNews;
