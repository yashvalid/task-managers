import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/task/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        if (response.status === 200)
          setTasks(response.data.tasks)
      } catch (err) {
        console.log(err);
      }
    }
    fetchTasks();
  }, [])

  const addTask = async (task) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/task/`,
        task, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      )
      if (response.status === 200)
        setTasks([...tasks, response.data.newTask]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (_id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/task/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      if (response.status === 200)
        setTasks(tasks.filter(task => task._id !== _id));
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (_id, updatedTask) => {
    console.log(updatedTask)
    console.log(_id)
    try {
      const resposne = await axios.put(`${import.meta.env.VITE_BASE_URL}/task/${_id}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      if (resposne.status === 200)
        setTasks(tasks.map(task =>
          task._id === _id ? { ...task, ...updatedTask } : task
        ));
    } catch(err) {
      console.log(err);
    }
  };


  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error('useTaskContext must be used within a TaskProvider');

  return context;
};
