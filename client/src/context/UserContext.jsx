import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const userContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export const useUserContext = () => {
    const context = useContext(userContext);
    if(!context)
        throw new Error('useTaskContext must be used within a TaskProvider');
    return context
}


