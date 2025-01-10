import clsx from "clsx";
import { useEffect, useState } from "react";
import { CourseSection } from "../../routes/courses/$courseId";

export default function Syllabus({ sections }: { sections: CourseSection[] }) {
  const [expandedAll, setExpandedAll] = useState<boolean>(false);
  return (
    <section className="w-full">
      <div className="flex items-end justify-between border border-l-black border-r-black border-t-black p-6">
        <div className="flex flex-col gap-syllabusCol">
          <h3 className="text-2xl font-bold">Overview</h3>
          <p className="leading-card">16 lessons - 15 quizzes - 5 exercises</p>
        </div>
        <p
          className="cursor-pointer font-bold leading-card"
          onClick={() => setExpandedAll((prev) => !prev)}
        >
          {expandedAll ? "Collapse all sections" : "Expand all sections"}
        </p>
      </div>
      {sections.map((section, index) => {
        return (
          <SyllabusSection
            section={section}
            index={index}
            expanded={expandedAll}
            isLastSection={index === sections.length - 1}
          />
        );
      })}
    </section>
  );
}

export function SyllabusSection({
  section,
  index = 0,
  expanded = false,
  isLastSection = false,
}: {
  section: CourseSection;
  index?: number;
  expanded?: boolean;
  isLastSection?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);
  return (
    <section
      className={clsx(
        "flex flex-col gap-4 border p-6",
        isLastSection
          ? "border-black"
          : "border-l-black border-r-black border-t-black",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-black text-[1.25rem] text-white">
            {index + 1}
          </div>
          <div className="flex max-w-[76%] flex-col">
            <h4 className="text-2xl font-bold">{section.title}</h4>
            <p className="leading-card">{section.description}</p>
          </div>
        </div>
        <img
          className={clsx(
            "cursor-pointer",
            isExpanded ? "rotate-180" : "rotate-0",
          )}
          src="/assets/down-arrow.svg"
          alt="arrow-icon"
          width={40}
          height={40}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      </div>
      {isExpanded && (
        <section className="flex flex-col gap-4 px-[3.25rem]">
          <div className="flex items-center gap-[2.375rem]">
            <img src="/assets/lesson.svg" alt="lesson-icon" />
            <p className="basis-1/12">Lesson</p>
            <p>{section.lessons[0]}</p>
          </div>
          <div className="flex items-center gap-[2.375rem]">
            <img src="/assets/quiz.svg" alt="quiz-icon" />
            <p className="basis-1/12">Quiz</p>
            {/* <p>{section.quizzes[0]}</p> */}
          </div>
          <div className="flex items-center gap-[2.375rem]">
            <img src="/assets/exercise.svg" alt="lesson-icon" />
            <p className="basis-1/12">Exercise</p>
            {/* <p>{section.exercises[0]}</p> */}
          </div>
        </section>
      )}
    </section>
  );
}
