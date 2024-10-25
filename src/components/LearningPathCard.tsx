// components/LearningPathCard.tsx
"use client";
import Link from "next/link";
import { LearningPath } from "@/types/learningPathTypes";

interface LearningPathCardProps {
  path: LearningPath;
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <Link href={`/learning-path/${path._id}`} className="block">
      <div className="transform rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
        <h2 className="mb-2 text-xl font-semibold">{path.title}</h2>
        <p className="text-gray-600">{path.description}</p>
      </div>
    </Link>
  );
}
