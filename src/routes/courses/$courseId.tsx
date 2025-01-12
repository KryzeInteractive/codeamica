import { createFileRoute, useParams } from "@tanstack/react-router";
import CourseSection from "../../components/course-details/CourseSection";
//import { SyllabusSection } from "../../components/course-details/SyllabusSection";
//import Syllabus from "../../components/course-details/SyllabusSection";
import {
  EnrollButton,
  ResumeButton,
} from "../../components/ui/CourseDetailButton";
import ProgressBar from "../../components/ui/ProgressBar";
import { useEffect, useState } from "react";
import { Course } from "../../types";
import api from "../../axios";

export interface CourseDetail {
  id: number;
  type: "Course" | "Learning Path"; //Assuming these are the names of the types
  level?: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  description: string;
  estimatedHours: number;
  prequisites: boolean;
  extraInfo?: string;
  whatYouWillLearn: string[];
  sections: CourseSection[];
}

export interface CourseSection {
  title: string;
  description: string;
  lessons: any[];
  quizzes?: any[];
  exercises?: any[];
}

//Mock course data
const mockCourse: Course = {
  id: "0",
  type: "Course",
  title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
  level: "Intermediate",
  description:
    "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
  estimatedHours: 50,
  prequisites: [],
  whatYouWillLearn: [
    "Build clean, semantic HTML5 markup to create accessible and SEO-friendly content.",
    "Understand the core concepts of JavaScript, including variables, data types, operators, and control structures.",
    "Implement fluid layouts and scalable images to maintain a visually appealing design on different devices.",
    "Explore advanced styling techniques, including typography, animations, transitions, and shadows.",
  ],
  lessons: [],
  category: "",
  rating: 0,
  studensEnrolled: 0,
  instructors: [],
  language: "",
  aboutThisCourse: "",
  version: 0,
  lastUpdated: Date.prototype,
  createdAt: Date.prototype,
  updatedAt: Date.prototype,
};

// const mockSections: CourseSection[] = [
//   {
//     title: "HTML Basics - Structure and Semantics",
//     description:
//       "Learn the foundational elements of HTML, how to structure a web page using HTML tags, and the importance of semantic HTML for accessibility and SEO",
//     lessons: ["Introduction to HTML - The Building Blocks of the Web"],
//     quizzes: ["Introduction to HTML - The Building Blocks of the Web"],
//     exercises: ["A project name for example (?)"],
//   },
//   {
//     title: "HTML Basics - Structure and Semantics",
//     description:
//       "Learn the foundational elements of HTML, how to structure a web page using HTML tags, and the importance of semantic HTML for accessibility and SEO",
//     lessons: ["Introduction to HTML - The Building Blocks of the Web"],
//     quizzes: ["Introduction to HTML - The Building Blocks of the Web"],
//     exercises: ["A project name for example (?)"],
//   },
//   {
//     title: "HTML Basics - Structure and Semantics",
//     description:
//       "Learn the foundational elements of HTML, how to structure a web page using HTML tags, and the importance of semantic HTML for accessibility and SEO",
//     lessons: ["Introduction to HTML - The Building Blocks of the Web"],
//     quizzes: ["Introduction to HTML - The Building Blocks of the Web"],
//     exercises: ["A project name for example (?)"],
//   },
//   {
//     title: "HTML Basics - Structure and Semantics",
//     description:
//       "Learn the foundational elements of HTML, how to structure a web page using HTML tags, and the importance of semantic HTML for accessibility and SEO",
//     lessons: ["Introduction to HTML - The Building Blocks of the Web"],
//     quizzes: ["Introduction to HTML - The Building Blocks of the Web"],
//     exercises: ["A project name for example (?)"],
//   },
// ];

export const Route = createFileRoute("/courses/$courseId")({
  component: CourseDetail,
});

function CourseDetail() {
  const courseId = useParams({
    from: "/courses/$courseId",
    select: (params) => params.courseId,
  });
  const [course, setCourse] = useState<Course>(mockCourse);
  const [hasEnrolled, setHasEnrolled] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await api.get(`/course/get/${courseId}`);
        const courseData = courseResponse.data as Course ;
        setCourse(({...courseData, }))
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchCourse()
  }, [])
  return (
    course && (
      <div className="min-h-dvh">
        <CourseSection
          course={course}
          hasEnrolled={hasEnrolled}
          setEnrollment={setHasEnrolled}
        />
        <div className="flex flex-col gap-6 px-double py-20">
          {hasEnrolled && (
            <>
              <section className="flex flex-col gap-[1.625rem]">
                <h2 className="text-[2rem] font-bold">Progress</h2>
                <ProgressBar progressPercent={50} />
              </section>
              <section className="flex flex-col gap-6">
                <h2 className="text-[2rem] font-bold">Current module</h2>
                {/* <SyllabusSection section={course} isLastSection={true} /> */}
              </section>
            </>
          )}
          <section className="flex flex-col gap-2">
            <h2 className="text-[2rem] font-bold">About this course</h2>
            <p className="leading-card">{course.description}</p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-[2rem] font-bold">Skills you will gain</h2>
            {(course as Course).whatYouWillLearn.map((skill, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <img src="/assets/check.svg" alt="skill-check-icon" />
                  <p>{skill}</p>
                </div>
              );
            })}
          </section>
          <h2 className="text-[2rem] font-bold">Syllabus</h2>
          {/* <Syllabus sections={course} /> */}
          <div className="flex w-full justify-center">
            {hasEnrolled ? (
              <ResumeButton handleClick={() => setHasEnrolled(false)} />
            ) : (
              <EnrollButton handleClick={() => setHasEnrolled(true)} />
            )}
          </div>
        </div>
      </div>
    )
  );
}
