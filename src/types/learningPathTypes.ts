import { Course } from "./courseTypes"; // Import Course type

export interface LearningPath {
  _id: string; // or Types.ObjectId
  title: string;
  description: string;
  courses: Course[]; // Array of courses
}
    