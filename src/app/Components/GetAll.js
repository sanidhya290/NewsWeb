"use client";  // Directive for enabling client-side rendering in Next.js

import React, { useEffect, useState } from "react";
import axios from "axios";  // Importing axios for making HTTP requests
import NewsCard from "./NewsCard";  // Importing the NewsCard component to display individual articles

const GetAll = () => {
  // State variables to store news articles, loading state, and error state
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch news articles when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch top headlines from the News API
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=599773e8704d42a48200f5ea1636d3e9"
        );
        setEvents(response.data.articles);  // Store the fetched articles in state
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        setError(error);  // Set the error state if an error occurs
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchEvents();  // Call the fetch function to load data
  }, []);  // Empty dependency array ensures the effect runs only once on mount

  // Display a loading message while data is being fetched
  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  // Display an error message if there was an error fetching the data
  if (error)
    return (
      <p className="text-center text-red-500">
        Error loading events: {error.message}
      </p>
    );

  return (
    // Main container for the grid of news cards, styled with Tailwind CSS classes
    <div className="container mx-auto px-4 py-6">
      {/* Grid layout for displaying articles in a responsive grid with gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the list of articles and render a NewsCard for each */}
        {events.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default GetAll;  // Export the GetAll component as the default export
