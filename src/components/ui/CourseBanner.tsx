import { Course, LearningPath } from "../../types";

export default function CourseBanner({ course }: { course: Course | LearningPath }) {
  return (
    <div className="flex w-full justify-center">
      <div className="relative mt-10 md:absolute md:bottom-[0] flex w-[90%] min-w-fit md:translate-y-1/2 flex-col items-center justify-between gap-5 border border-black bg-white px-4 py-3 text-black md:flex-row md:gap-0 xl:w-infoSection xl:px-8 xl:py-6">
        {(course as Course).level && (
          <div className="flex flex-1 items-center gap-2">
            <img
              src="/assets/skill-level.svg"
              alt="skill-level-icon"
              className="h-[2rem] w-[2rem] lg:h-[50px] lg:w-[50px]"
            />
            <div>
              <span className="text-[.75rem] leading-card xl:text-[1rem]">
                Skill level
              </span>
              <p className="text-[.9rem] font-bold lg:text-[1rem] xl:text-2xl">
                {(course as Course).level}
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-1 items-center gap-2">
          <img
            src="/assets/complete-time.svg"
            alt="complete-time-icon"
            className="h-[2rem] w-[2rem] lg:h-[50px] lg:w-[50px]"
          />
          <div>
            <span className="text-[.75rem] leading-card xl:text-[1rem]">
              Time to complete
            </span>
            <p className="text-[.9rem] font-bold lg:text-[1rem] xl:text-2xl">
              {course.estimatedHours}{" "}
              {course.estimatedHours > 1 ? "hours" : "hour"}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <img
            src="/assets/requirement.svg"
            alt="requirement-icon"
            className="h-[2rem] w-[2rem] lg:h-[50px] lg:w-[50px]"
          />
          <div className="w-[110px] md:w-auto">
            <span className="text-[.75rem] leading-card xl:text-[1rem]">
              Prequisites
            </span>
            <p className="text-[.9rem] font-bold lg:text-[1rem] xl:text-2xl">
              {course.prequisites.length > 0 ? course.prequisites : "None"}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <img
            src="/assets/requirement.svg"
            alt="requirement-icon"
            className="h-[2rem] w-[2rem] lg:h-[50px] lg:w-[50px]"
          />
          <div>
            <span className="text-[.75rem] leading-card xl:text-[1rem]">
              Something else
            </span>
            <p className="text-[.9rem] font-bold lg:text-[1rem] xl:text-2xl">
              I dunno
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}