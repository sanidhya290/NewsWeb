"use client";  // Enables client-side rendering in Next.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";  // Import the NewsCard component

const TopNews = () => {
  // State variables to store news articles, loading state, and error state
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch news articles when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch top headlines from the news API
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=599773e8704d42a48200f5ea1636d3e9"
        );
        setEvents(response.data.articles);  // Store the articles in state
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        setError(error);  // Set the error state if an error occurs
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchEvents();  // Call the fetch function
  }, []);  // Empty dependency array ensures the effect runs only once on mount

  // Display a loading message while the data is being fetched
  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  // Display an error message if there was an error fetching the data
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading news: {error.message}
      </p>
    );

  // Sort articles by their published date in descending order
  const sortedArticles = events.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Get the top 5 most recent articles
  const topFiveArticles = sortedArticles.slice(0, 5);

  return (
    // Main container for the news section, styled with Tailwind CSS classes
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mx-auto max-w-screen-md">
      {/* Section title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-black">
        Latest News
      </h2>
      {/* Container for the list of news cards, spaced vertically */}
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Map over the top 5 articles and render a NewsCard for each */}
        {topFiveArticles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopNews;  // Export the TopNews component as the default export
