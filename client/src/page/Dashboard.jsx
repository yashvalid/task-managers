import React, { useState, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { BookCheck, Plus } from 'lucide-react';
import TaskColumn from '../components/TaskColumn';
import TaskForm from '../components/TaskForm';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const { tasks } = useTaskContext();
    const [isFormOpen, setIsFormOpen] = useState(false);

    const todoTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8 max-w-6xl mt-20">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-purple-600">Task Board</h1>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors shadow-sm"
                    >
                        <Plus className="h-5 w-5 mr-1" />
                        Add Task
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
                    <BookCheck />
                    <TaskColumn title="Tasks" tasks={todoTasks} />
                </div>

                <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            </div>
        </>
    );
};

export default Dashboard;
