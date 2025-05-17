import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email,
                password
            };
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, user);
            console.log(response.data)
            if (response.status === 200) {
                setSuccess(response.data.message)
                setTimeout(() => {
                    localStorage.setItem('token', response.data.token);
                    navigate('/dashboard');
                }, 2000);
            } else
                setError("failed");
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.error || "Login failed. Please try again.");
        } finally {
            setTimeout(() => {
                setError(null);
                setSuccess(null);
                setEmail("")
                setPassword("")
            }, 3000);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white border-0 rounded-lg shadow-lg w-full max-w-xl p-6 sm:p-8 md:p-10">
                {error && <p className='p-3 bg-red-200 text-red-600 rounded text-center'>{error}</p>}
                {success && <p className='p-3 bg-green-300 text-green-600 rounded text-center'>{success}</p>}
                <h1 className="text-purple-700 font-bold text-xl sm:text-2xl mb-4 text-center">Login to Task Manager</h1>
                <p className="mb-6 text-gray-600 text-center text-sm sm:text-base">Enter your credentials to access your tasks</p>
                <form
                    onSubmit={e => handleSubmit(e)}
                    className="flex flex-col gap-6 sm:gap-8">

                    <div>
                        <label className="block font-bold mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition text-sm sm:text-base"
                    >
                        Login
                    </button>
                </form>
                <p className='mt-6 text-center text-sm'>Don't have an account? <Link to='/register' className='text-sm text-purple-600'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login
