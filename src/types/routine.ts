export interface Task {
  id: string;
  title: string;
  description?: string;
  time: string; // HH:MM format
  duration: number; // minutes
  completed: boolean;
  category: string;
  color?: string;
}

export interface RoutineDay {
  date: Date;
  tasks: Task[];
}

export interface User {
  id: string;
  name: string;
  email?: string;
  theme?: 'light' | 'dark';
}
