"use client";
import { useEffect, useState } from "react";
import { LearningPath } from "@/types/learningPathTypes";
import LearningPathCard from "@/components/LearningPathCard";

export default function Page() {
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLearningPaths = async () => {
      try {
        const response = await fetch(
          "http://localhost:10004/learning-path/get-all",
        ); // Use the correct endpoint

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: LearningPath[] = await response.json(); // Explicitly type the data
        setLearningPaths(data);
      } catch (err) {
        // Type assertion
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred"); // Fallback for non-Error types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLearningPaths();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <h1 className="text-center text-lg font-semibold">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-lg text-red-500">Error: {error}</h1>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Learning Paths</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {learningPaths.map((path) => (
          <li key={path._id}>
            <LearningPathCard path={path} />
          </li>
        ))}
      </ul>
    </div>
  );
}
