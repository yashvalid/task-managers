import axios from 'axios';
import { useEffect } from 'react'
import { useUserContext } from '../context/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const { setUser } = useUserContext();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/login');
            setLoading(false);
            return;
        }
        const authenticate = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                if (response.status === 200)
                    setUser(response.data.user);
                else
                    navigate('/login');
            } catch (err) {
                console.log(err)
                navigate('/login')
            } finally {
                setLoading(false);
            }
        }

        authenticate();
    }, [token]);

    if (loading)
        return <div>Loading...</div>
    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectedWrapper
