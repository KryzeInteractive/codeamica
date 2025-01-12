import { createFileRoute, useParams } from '@tanstack/react-router'
import { EnrollButton, ResumeButton } from '../../components/ui/CourseDetailButton';
import CourseSection from '../../components/course-details/CourseSection';
import ProgressBar from '../../components/ui/ProgressBar';
import { useState, useEffect } from 'react';
import api from '../../axios';
import { LearningPath } from '../../types';

export const Route = createFileRoute('/roadmaps/$roadmapId')({
  component: RoadmapDetail,
})

const mockRoadmap: LearningPath = {
    id: "0",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  }

function RoadmapDetail() {
  const roadmapId = useParams({
    from: "/roadmaps/$roadmapId",
    select: (params) => params.courseId,
  });
  const [roadmap, setRoadmap] = useState<LearningPath>(mockRoadmap);
  const [hasEnrolled, setHasEnrolled] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseResponse = await api.get(`/roadmap/get/${roadmapId}`);
        const roadmapData = courseResponse.data as LearningPath;
        setRoadmap(({...roadmapData, }))
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchCourse()
  }, [])
  return (
    roadmap && (
      <div className="min-h-dvh">
        <CourseSection
          course={roadmap}
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
            <h2 className="text-[2rem] font-bold">About this roadmap</h2>
            <p className="leading-card">{roadmap.description}</p>
          </section>
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
  )
}
