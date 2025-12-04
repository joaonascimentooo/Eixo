import { create } from 'zustand';
import { Task } from '@/types/routine';

interface RoutineStore {
  tasks: Task[];
  selectedDate: Date;
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  toggleTask: (id: string) => void;
  setSelectedDate: (date: Date) => void;
  getTodaysTasks: () => Task[];
}

export const useRoutineStore = create<RoutineStore>((set, get) => ({
  tasks: [],
  selectedDate: new Date(),
  
  addTask: (task: Task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  
  removeTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  
  updateTask: (id: string, updates: Partial<Task>) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
  
  toggleTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  
  setSelectedDate: (date: Date) =>
    set({ selectedDate: date }),
  
  getTodaysTasks: () => {
    const { tasks, selectedDate } = get();
    return tasks.filter(
      (task) =>
        new Date(task.time).toDateString() === selectedDate.toDateString()
    );
  },
}));
