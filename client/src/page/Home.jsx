import React from "react";
import { CheckIcon, CalendarIcon, ListIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-6">
                Organize Your Tasks with Simplicity
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Task Manager helps you manage your tasks efficiently with a clean and intuitive interface.
                Stay organized and boost your productivity.
              </p>
              <Link to="/tasks">
                <button className="bg-task-purple hover:bg-task-purple-dark text-white px-6 py-3 text-lg rounded-lg flex items-center justify-center gap-2">
                  Get Started <ArrowRightIcon className="h-5 w-5" />
                </button>
              </Link>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Task Manager Dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
                    Why Choose Task Manager?
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center w-full md:w-1/3">
                        <div className="bg-task-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <CheckIcon className="h-7 w-7 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">Simple Task Management</h3>
                        <p className="text-gray-600">
                            Create, organize, and track your tasks with ease. Mark tasks as complete when you're done.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center w-full md:w-1/3">
                        <div className="bg-task-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <ListIcon className="h-7 w-7 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">Priority Levels</h3>
                        <p className="text-gray-600">
                            Set priority levels for your tasks to focus on what matters most at any given moment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-task-purple-dark text-purple-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Organized?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start managing your tasks effectively today with Task Manager.
              It's free and easy to get started.
            </p>
            <Link to="/dashboard">
              <button className="border border-purple-300 text-purple-600 px-6 py-3 text-lg rounded-lg transition">
                Start Using Task Manager
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ListIcon className="h-5 w-5 text-task-purple" />
            <span className="text-xl font-bold text-task-purple">Task Manager</span>
          </div>
          <p className="text-gray-600">© 2025 Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
