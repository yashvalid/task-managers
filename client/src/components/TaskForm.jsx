import React, { useState, useCallback } from 'react';
import { Plus, X } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = ({ isOpen, onClose }) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleTitleChange = useCallback((e) => setTitle(e.target.value), []);
  const handleDescriptionChange = useCallback((e) => setDescription(e.target.value), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, priority});
    setTitle('');
    setDescription('');
    setPriority('Medium');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Add New Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Task title"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Task description"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          />
          <div className="grid grid-cols-2 gap-4">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-md flex items-center">
              <Plus className="h-4 w-4 mr-1" /> Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
