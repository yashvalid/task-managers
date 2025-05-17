import React, { useState, useMemo } from 'react';
import { Check, Edit, Trash2 } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';
import PriorityBadge from './PriorityBadge';


const TaskCard = ({ task }) => {
  const { deleteTask, editTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    if (editedTitle.trim()) {
      console.log("updating")
      editTask(task._id, { title: editedTitle, description: editedDescription });
      setIsEditing(false);
    }
  };

const taskDetails = useMemo(() => (
    <div className="flex flex-row items-center w-full">
        <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800">
                {task.title}
            </h3>
            <p className="text-sm text-gray-600">
                {task.description}
            </p>
        </div>
        <div className="ml-4">
            <PriorityBadge priority={task.priority} />
        </div>
    </div>
), [task]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3 transition-all duration-200 hover:shadow-lg">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            autoFocus
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-purple-400"
            rows={2}
          />
          <div className="flex justify-end pt-2">
            <button onClick={() => setIsEditing(false)} className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button onClick={handleSave} className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-between items-start mb-2">
            {taskDetails}
            <div className="flex space-x-1">
              <button onClick={() => setIsEditing(true)} className="p-1 rounded-full hover:bg-gray-100">
                <Edit className="h-5 w-5 text-gray-400" />
              </button>
              <button onClick={() => deleteTask(task._id)} className="p-1 rounded-full hover:bg-gray-100">
                <Trash2 className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
