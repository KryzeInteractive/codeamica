import { createFileRoute } from '@tanstack/react-router'
import { LearningPath } from '../../types';
import CourseCard from '../../components/courses/CourseCard';

export const Route = createFileRoute('/roadmaps/')({
  component: Roadmaps,
})
const mockData: LearningPath[] = [
  {
    id: "0",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "1",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "2",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "3",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "4",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "5",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "6",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "7",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "8",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
  {
    id: "9",
    type: "Learning Path",
    title: "Responsive Web Design Essentials: HTML, CSS & JavaScript",
    description:
      "Master the core skills needed to design visually appealing, responsive websites. This course covers HTML, CSS, and JavaScript fundamentals with a focus on modern, mobile-friendly design principles. You'll build practical projects along the way, learning to create layouts that look great on any device, with guidance on CSS Flexbox, Grid, and essential JavaScript for interactivity.",
    estimatedHours: 50,
    courses: [],
    prequisites: [],
  },
];
function Roadmaps() {
  return (
    <div className='h-fit grid grid-cols-4 justify-items-center gap-11 py-[4rem]'>
        {mockData.map(roadmap => {
            return (
                <CourseCard key={roadmap.id} id={roadmap.id} type={roadmap.type}  title={roadmap.title} description={roadmap.description} estimatedHours={roadmap.estimatedHours}/>
            )
        })}
    </div>

  )
}
