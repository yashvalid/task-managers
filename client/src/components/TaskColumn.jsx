import React, { useMemo } from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks }) => {
  const taskList = useMemo(() => 
    tasks.length === 0 ? (
      <p className="text-gray-500 text-center py-4">No tasks</p>
    ) : (
      tasks.map((task) => <TaskCard key={task._id} task={task} />)
    ), [tasks]
  );

  return (
    <div className="bg-gray-50 rounded-lg p-4 w-full md:w-[calc(50%-1rem)] shadow-sm">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {taskList}
      </div>
    </div>
  );
};

export default TaskColumn;
