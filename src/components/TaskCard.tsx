'use client';

import { Task } from '@/types/routine';
import { formatTime, calculateEndTime } from '@/lib/utils';
import { Trash2, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const endTime = calculateEndTime(task.time, task.duration);

  return (
    <div
      className={`p-4 rounded-lg border transition-all ${
        task.completed
          ? 'bg-gray-100 border-gray-300 opacity-60'
          : 'bg-white border-gray-200 hover:border-blue-400'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mt-1 w-5 h-5 cursor-pointer"
          />
          <div className="flex-1">
            <h3
              className={`font-semibold ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            )}
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <Clock size={16} />
              <span>
                {formatTime(task.time)} - {formatTime(endTime)} ({task.duration}
                min)
              </span>
            </div>
            <div className="mt-2">
              <span
                className="inline-block px-2 py-1 text-xs font-medium rounded"
                style={{
                  backgroundColor: task.color || '#3b82f6',
                  color: 'white',
                  opacity: 0.8,
                }}
              >
                {task.category}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
