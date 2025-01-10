
import { MouseEventHandler, useRef, useState } from "react";
import CourseCard, { CourseCardProps } from "./CourseCard";

//Mock data for course cards
// const mockData: CourseCardProps[] = [
//   {
//     id: 1,
//     type: "Course",
//     level: "Beginner",
//     title: "Python for Data Science: From Basics to Insights",
//     description:
//       "Unlock the power of data with this Python-based data science course. Starting from the basics of Python programming, you'll progress to data analysis and visualization using libraries like Pandas, Matplotlib, and Seaborn. By the end of the course, you’ll be able to clean, analyze, and present data insights to solve real-world problems, preparing you for a career in data science or analytics.",
//     duration: "40 hours",
//   },

//   {
//     id: 2,
//     type: "Course",
//     level: "Intermediate",
//     title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
//     description:
//       "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
//     duration: "50 hours",
//   },

//   {
//     id: 3,
//     type: "Course",
//     level: "Advanced",
//     title:
//       "Advanced Backend Development with Node.js and Microservices Architecture",
//     description:
//       "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
//     duration: "80 hours",
//   },

//   {
//     id: 4,
//     type: "Learning Path",
//     title: "Mastering Full-Stack Web Development with Modern JavaScript",
//     description:
//       "Dive into the world of full-stack development with this comprehensive course on modern JavaScript, including both front-end and back-end technologies. You'll build scalable web applications using JavaScript frameworks like React, Node.js, and Express, with a focus on best practices, design patterns, and real-world projects. Ideal for those who want to become well-rounded web developers with hands-on experience in creating dynamic and responsive web applications.",
//     duration: "80 hours",
//   },

//   {
//     id: 5,
//     type: "Course",
//     level: "Advanced",
//     title:
//       "Advanced Backend Development with Node.js and Microservices Architecture",
//     description:
//       "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
//     duration: "80 hours",
//   },
//   {
//     id: 6,
//     type: "Course",
//     level: "Advanced",
//     title:
//       "Advanced Backend Development with Node.js and Microservices Architecture",
//     description:
//       "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
//     duration: "80 hours",
//   },
//   {
//     id: 7,
//     type: "Course",
//     level: "Advanced",
//     title:
//       "Advanced Backend Development with Node.js and Microservices Architecture",
//     description:
//       "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
//     duration: "80 hours",
//   },
// ];

export default function TrendingSection({data}: {data: CourseCardProps[]}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const handleMouseDown: MouseEventHandler<HTMLElement> = (e) => {
    if (containerRef.current) {
      e.preventDefault();
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUpOrLeave: MouseEventHandler<HTMLElement> = () => {
    setIsDragging(false);
  };

  const handleMouseMove: MouseEventHandler<HTMLElement> = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full min-w-full cursor-pointer bg-[var(--primary-text-color)] py-8">
      <div className="px-default text-[2rem] font-bold leading-none text-white">
        Trending
      </div>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`h-max no-scrollbar w-full min-w-full overflow-x-auto bg-[var(--primary-text-color)] px-default py-4 cursor-${isDragging ? "grabbing" : "grab"}`}
      >
        <div
          className={`flex items-center gap-x-11 w-max`}
        >
          {data &&
            data.map((data) => {
              return (
                <CourseCard
                  key={data.id}
                  id={data.id}
                  type={data.type}
                  title={data.title}
                  description={data.description}
                  level={data.level}
                  estimatedHours={data.estimatedHours}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
