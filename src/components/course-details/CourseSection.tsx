//import { CourseDetail } from "../../routes/courses/$courseId";
import { Course, LearningPath } from "../../types";
import CourseBanner from "../ui/CourseBanner";
import { EnrollButton, ResumeButton } from "../ui/CourseDetailButton";

export default function CourseSection({
  course,
  hasEnrolled,
  setEnrollment,
}: {
  course: Course | LearningPath
  hasEnrolled: boolean;
  setEnrollment: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section className="relative flex h-courseSection w-full min-w-full cursor-pointer flex-col justify-center gap-5 bg-[var(--primary-text-color)] px-0 py-0 text-white xl:px-double xl:py-default">
      <div className="flex max-w-[100%] flex-col gap-2 px-6 lg:max-w-[80%] xl:max-w-[65%]">
        <span className="text-[1rem] leading-card lg:text-[1.5rem]">
          {course.type}
        </span>
        <h1 className="max-w-[90%] text-[1rem] font-bold italic sm:text-[1.5rem] md:text-[2rem]">
          {course.title}
        </h1>
        <p className="text-[.8rem] leading-card sm:text-[1rem]">
          {course.description}
        </p>
      </div>
      {hasEnrolled ? (
        <ResumeButton
          handleClick={() => {
            setEnrollment(false);
          }}
        />
      ) : (
        <EnrollButton
          handleClick={() => {
            setEnrollment(true);
          }}
        />
      )}
      <div className="hidden md:block">
        <CourseBanner course={course} />
      </div>
    </section>
  );
}
