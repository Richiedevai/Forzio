import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Plus, Calendar, User, Tag, AlertCircle } from 'lucide-react';
import { Task } from '../../types';
import { motion } from 'framer-motion';

interface TaskBoardProps {
  tasks: Task[];
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void;
  onCreateTask: () => void;
}

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-800' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900/20' },
  { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900/20' },
  { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900/20' },
];

const priorityColors = {
  low: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  medium: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  high: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
  urgent: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
};

export const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onTaskUpdate, onCreateTask }) => {
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const handleDragEnd = (result: any) => {
    setDraggedTask(null);
    
    if (!result.destination) return;

    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId as Task['status'];
    
    onTaskUpdate(taskId, { status: newStatus });
  };

  const handleDragStart = (start: any) => {
    setDraggedTask(start.draggableId);
  };

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Task Board</h3>
        <button
          onClick={onCreateTask}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {columns.map((column) => (
            <div key={column.id} className={`${column.color} rounded-xl p-4`}>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                {column.title} ({getTasksByStatus(column.id as Task['status']).length})
              </h4>
              
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`space-y-3 min-h-[200px] ${
                      snapshot.isDraggingOver ? 'bg-primary-50 dark:bg-primary-900/10 rounded-lg' : ''
                    }`}
                  >
                    {getTasksByStatus(column.id as Task['status']).map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <motion.div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 cursor-grab active:cursor-grabbing ${
                              snapshot.isDragging ? 'shadow-lg scale-105' : ''
                            } ${draggedTask === task.id ? 'opacity-50' : ''}`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                                {task.title}
                              </h5>
                              <span className={`px-2 py-1 text-xs font-medium rounded ${priorityColors[task.priority]}`}>
                                {task.priority}
                              </span>
                            </div>
                            
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                              {task.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center space-x-2">
                                {task.dueDate && (
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                                  </div>
                                )}
                                {task.assignedTo && (
                                  <div className="flex items-center space-x-1">
                                    <User className="w-3 h-3" />
                                    <span>{task.assignedTo}</span>
                                  </div>
                                )}
                              </div>
                              
                              {task.tags.length > 0 && (
                                <div className="flex items-center space-x-1">
                                  <Tag className="w-3 h-3" />
                                  <span>{task.tags.length}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};