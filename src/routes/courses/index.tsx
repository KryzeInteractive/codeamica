import { createFileRoute } from "@tanstack/react-router";
import TrendingSection from "../../components/courses/TrendingSection";
import LookAround from "../../components/courses/LookAround";
import { Course, LearningPath } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../axios";

export const Route = createFileRoute("/courses/")({
  component: Courses,
});


type CourseData = (Course | LearningPath) 

const mockData: CourseData[] = [
  {
    id: "1",
    type: "Course",
    level: "Beginner",
    title: "Python for Data Science: From Basics to Insights",
    description:
      "Unlock the power of data with this Python-based data science course. Starting from the basics of Python programming, you'll progress to data analysis and visualization using libraries like Pandas, Matplotlib, and Seaborn. By the end of the course, you’ll be able to clean, analyze, and present data insights to solve real-world problems, preparing you for a career in data science or analytics.",
    estimatedHours: 40,
  } as Course,
  {
    id: "2",
    type: "Course",
    level: "Intermediate",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
  } as Course,

  {
    id: "3",
    type: "Course",
    level: "Advanced",
    title:
      "Advanced Backend Development with Node.js and Microservices Architecture",
    description:
      "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
    estimatedHours: 20,
  } as Course,

  {
    id: "4",
    type: "Learning Path",
    title: "Mastering Full-Stack Web Development with Modern JavaScript",
    description:
      "Dive into the world of full-stack development with this comprehensive course on modern JavaScript, including both front-end and back-end technologies. You'll build scalable web applications using JavaScript frameworks like React, Node.js, and Express, with a focus on best practices, design patterns, and real-world projects. Ideal for those who want to become well-rounded web developers with hands-on experience in creating dynamic and responsive web applications.",
    estimatedHours: 80,
  } as LearningPath,

  {
    id: "5",
    type: "Course",
    level: "Advanced",
    title:
      "Advanced Backend Development with Node.js and Microservices Architecture",
    description:
      "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
    estimatedHours: 80,
  } as Course, 
  {
    id: "6",
    type: "Course",
    level: "Advanced",
    title:
      "Advanced Backend Development with Node.js and Microservices Architecture",
    description:
      "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
    estimatedHours: 80,
  } as Course,
  {
    id: "7",
    type: "Course",
    level: "Advanced",
    title:
      "Advanced Backend Development with Node.js and Microservices Architecture",
    description:
      "Deepen your backend development skills by mastering Node.js and microservices architecture. This course covers advanced topics such as API design, server-side rendering, and containerization with Docker. You’ll learn how to build scalable, high-performance applications, implement microservices, and deploy your projects on cloud platforms. With real-world projects and best practices, this course prepares you to handle complex backend systems and modern deployment pipelines.",
    estimatedHours: 60,
  } as Course,
];
function Courses() {
  const [data, setData] = useState<CourseData[]>(mockData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, roadmapsResponse] = await axios.all([
        api.get("/course/get-all"),
        api.get("/learning-path/get-all")
        ])
        const courses = (coursesResponse.data as Course[]).map(
          (course) => ({
            ...course,
            type: "Course",
          }),
        ) as CourseData[];
        const roadmaps = (roadmapsResponse.data as LearningPath[]).map(
          (roadmap) => ({
            ...roadmap,
            type: "Learning Path",
          }),
        ) as CourseData[];
        setData(courses.concat(roadmaps))
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchData()
  }, [])
  
  return (
    <>
      <TrendingSection data={data.slice(0, 5)}/>
      <LookAround data={data}/>
    </>
  );
}
