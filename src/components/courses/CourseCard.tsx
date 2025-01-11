import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx"

export interface CourseCardProps {
    id: string,
    type: "Course" | "Learning Path",  //Assuming these are the names of the types
    level?: "Beginner" | "Intermediate" | "Advanced",
    title: string,
    description: string,
    estimatedHours: number
}

//Utility function
const limitTextLength = (text: string, numberOfCharacter: number) => {
    if (text.length > numberOfCharacter) 
        return text.substring(0, numberOfCharacter).concat("...");
    return text;
}

const maxNumberOfChars = 86;

export default function CourseCard({id, type, level, title, description, estimatedHours }: CourseCardProps) {
    const navigate = useNavigate();
    return (
      <div className="relative flex h-card w-card shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-[5px] border border-black bg-[var(--background)]"
      onClick={() => {
        navigate({
          to: `/${type === "Course" ? "courses" : "roadmaps"}/${id}`
        })
      }}>
        <div
          className={clsx(
            "h-10 w-full items-center border-b border-black px-6 py-2 leading-card",
            {
              "bg-[var(--roadmap-card-color)] text-white":
                type === "Learning Path",
              "rounded-[5px] bg-[var(--beginner-card-color)]":
                type === "Course" && level === "Beginner",
              "rounded-[5px] bg-[var(--intermediate-card-color)]":
                type === "Course" && level === "Intermediate",
              "rounded-[5px] bg-[var(--advanced-card-color)]":
                type === "Course" && level === "Advanced",
            },
          )}
        >
          {type === "Course" ? "Course" : "Roadmap"}
        </div>
        <section className="h-[204px] w-full px-6 py-2">
          <p className="mb-2 font-bold italic leading-card text-black">
            {title}
          </p>
          <p className="leading-card text-black">
            {limitTextLength(description, maxNumberOfChars)}
          </p>
        </section>
        <footer
          className={clsx(
            "flex h-10 w-full items-center border border-t-black px-6 py-2 font-bold leading-card",
            {
              "justify-between": level !== null && level !== undefined,
              "justify-end": level === null || level === undefined,
            },
          )}
        >
          {level && <p>{level}</p>}
          <p>{estimatedHours} {estimatedHours > 1 ? "hours" : "hour"}</p>
        </footer>
      </div>
    );
}