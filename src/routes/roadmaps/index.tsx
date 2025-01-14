import { createFileRoute } from '@tanstack/react-router'
import { LearningPath } from '../../types';
import CourseCard from '../../components/courses/CourseCard';
import mockData from "../../mocks/learning_path_list.json"
export const Route = createFileRoute('/roadmaps/')({
  component: Roadmaps,
})

function Roadmaps() {
  return (
    <div className='h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-11 py-[4rem]'>
        {(mockData as LearningPath[]).map(roadmap => {
            return (
                <CourseCard key={roadmap.id} id={roadmap.id} type={roadmap.type}  title={roadmap.title} description={roadmap.description} estimatedHours={roadmap.estimatedHours}/>
            )
        })}
    </div>

  )
}
