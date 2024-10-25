export interface Course {
  _id: string; // or Types.ObjectId if you're using Mongoose types
  title: string;
  description: string; // Add other properties as needed
  // Add any additional properties for the Course interface
}
