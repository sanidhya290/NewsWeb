"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const GetAll = () => {
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
        Error loading events: {error.message}
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};

export default GetAll;
