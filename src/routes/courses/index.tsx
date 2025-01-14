import { createFileRoute } from "@tanstack/react-router";
import TrendingSection from "../../components/courses/TrendingSection";
import LookAround from "../../components/courses/LookAround";
import { Course, LearningPath } from "../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../axios";
import mockData from "../../mocks/course_list.json";

export const Route = createFileRoute("/courses/")({
  component: Courses,
});

type CourseData = (Course | LearningPath) 

function Courses() {
  const [data, setData] = useState<CourseData[]>(mockData as CourseData[]);
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
