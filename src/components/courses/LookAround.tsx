import Filter from "../ui/Filter";
import SearchBar from "../ui/SearchBar";
import CourseCard, { CourseCardProps } from "./CourseCard";
import { useEffect, useState } from "react";
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
//     level: "Intermediate",
//     title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
//     description:
//       "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
//     duration: "50 hours",
//   },
// ];

const defaultFilter = {
  level: [],
  type: ["Course", "Learning Path"],
  estimatedHours: ["All"],
};

export default function LookAround({data}: {data: CourseCardProps[]}) {
  const [courseData, setCourseData] = useState<CourseCardProps[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<Record<string, any[]>>(defaultFilter);
  useEffect(() => {
    const filterData = () => {
    let filteredData = data;
    if (searchTerm.length > 0) {
      filteredData = filteredData.filter((data) =>
        data.title.includes(searchTerm)
      );
    }
    if (JSON.stringify(filter) !== JSON.stringify(defaultFilter)) {
      filteredData = filteredData.filter(filteredByCategory);
    }
    return filteredData;
  };
  setCourseData(filterData());
  }, [searchTerm, data]);

  const onFilter = () => {
    const updatedData =
      searchTerm.length === 0
        ? data.filter((data) => filteredByCategory(data))
        : data
            .filter((data) => filteredByCategory(data))
            .filter((data) => data.title.includes(searchTerm));
    setCourseData(updatedData);
  };

  const onClear = () => {
    setFilter(defaultFilter);
    setCourseData(
      searchTerm.length === 0
        ? data
        : data.filter((data) => data.title.includes(searchTerm)),
    );
  };

  const filteredByCategory = (data: CourseCardProps) => {
    let isValid = true;
    let isValidDuration = filter.estimatedHours.includes("All");
    Object.keys(filter).forEach((key) => {
      if (key === "estimatedHours" && data.estimatedHours) {
        if (filter[key].length > 0 && !filter[key].includes("All")) {
          filter[key].forEach((value) => {
            const duration = data.estimatedHours;
            const [lowerLimit, upperLimit] = (value as string)
              .split(" ")[0]
              .split(/[-+]/)
              .map(Number);

            if (
              (upperLimit &&
                duration >= lowerLimit &&
                duration <= upperLimit) ||
              (!upperLimit && duration >= lowerLimit)
            ) {
              isValidDuration = true;
            }
          });
        }
      } 
      else if (
        filter[key].length > 0 &&
        !filter[key].includes(data[key as keyof CourseCardProps])
      ) {
        isValid = false;
      }
    });
    return isValid && isValidDuration;

  };

  return (
    <section className="w-full lg:px-default lg:pb-default px-10 pb-10">
      <h1 className="py-4 text-[2rem] font-bold text-black">Look around</h1>
      <div className="custom-gap flex flex-col md:flex-row justify-normal xl:justify-between 2xl:justify-normal gap-9 md:gap-10 lg-gap-7 xl:gap-12">
        <div className="w-full md:w-card flex-shrink-0">
          <Filter
            filter={filter}
            setFilter={setFilter}
            onFilter={onFilter}
            onClear={onClear}
          />
        </div>
        <section className="xl:min-w-cardGrid w-full lg:w-fit flex flex-col gap-y-6">
          <div className="w-full">
            <SearchBar
              onChange={(term: string) => {
                setSearchTerm(term);
              }}
            />
          </div>
          <div className="justify-items-center grid xl:w-fit min-w-fit grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-6 xl:gap-11 lg:justify-between">
            {courseData &&
              courseData.map((data) => {
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
            {courseData && courseData.length === 0 && (
              <p className="col-span-3">No course or learning path found</p>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}