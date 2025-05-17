import React from 'react'
import { List, LogIn, UserPlus } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

const Navbar = () => {
    const location = useLocation();
    const { user } = useUserContext();
    return (
        <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-6 py-4 border-gray-400 border-0">
                <div className="flex items-center gap-2">
                    <List className="text-purple-600 w-6 h-6" />
                    <h1 className="text-purple-600 font-bold text-xl">TaskMaster</h1>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <div className="flex items-center gap-1 text-gray-700 hover:text-purple-600 cursor-pointer">
                        <List className="w-4 h-4" />
                        <span>Tasks</span>
                    </div>
                    {user ? <div className={`flex items-center gap-1 ${location.pathname === '/login' ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-400 cursor-pointer`}>
                        <span>{user.name}</span>
                    </div> :
                        <>
                            <Link to='/login'>
                                <div className={`flex items-center gap-1 ${location.pathname === '/login' ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-400 cursor-pointer`}>
                                    <LogIn className="w-4 h-4" />
                                    <span>Login</span>
                                </div>
                            </Link>
                            <Link to='/register'>
                                <div className={`flex items-center gap-1 ${location.pathname === '/register' ? 'text-purple-600' : 'text-gray-400'} hover:text-purple-400 cursor-pointer`}>
                                    <UserPlus className="w-4 h-4" />
                                    <span>Sign Up</span>
                                </div>
                            </Link>
                        </>}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
