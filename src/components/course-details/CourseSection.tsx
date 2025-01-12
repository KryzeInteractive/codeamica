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
    <section className="relative flex h-courseSection w-full min-w-full cursor-pointer flex-col justify-center gap-5 bg-[var(--primary-text-color)] px-double py-default text-white">
      <div className="flex max-w-[65%] flex-col gap-2 px-6">
        <span className="leading-card">{course.type}</span>
        <h1 className="max-w-[90%] text-[2rem] font-bold italic">
          {course.title}
        </h1>
        <p className="leading-card">{course.description}</p>
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
      <CourseBanner course={course} />
    </section>
  );
}
