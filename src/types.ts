export interface Course {
  id: string;
  type: "Course";
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  description: string;
  estimatedHours: number;
  rating: number;
  studensEnrolled: number;
  instructors: string[];
  language: string;
  aboutThisCourse: string;
  whatYouWillLearn: string[];
  prequisites: string[];
  lessons: string[];
  version: number;
  lastUpdated: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface LearningPath {
  id: string;
  type: "Learning Path";
  title: string;
  description: string;
  estimatedHours: number;
  courses: string[];
  prequisites: string[];
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  email: string;
  password: string;
  name: string;
  provided_role: "user" | "admin"
}