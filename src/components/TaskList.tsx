'use client';

import { Task } from '@/types/routine';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  const sortedTasks = [...tasks].sort((a, b) => {
    return a.time.localeCompare(b.time);
  });

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhuma tarefa para este dia</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sortedTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
