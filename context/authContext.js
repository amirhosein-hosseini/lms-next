"use client"
import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getCookie , deleteCookie , setCookie } from '@/api/auth';
import { useRouter } from 'next/navigation';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token')); 
  const router = useRouter();
  const token = getCookie('token');
  const [status , setStatus] = useState(null);

  const signOut = () => {
    axios.post(domain + 'logout' , null , {
      headers : {
          'Authorization' : 'Bearer ' + token,
      }
    })
      .then((response) => {
          toast.success(response.data.message);
          setStatus(response.data.status)
          deleteCookie('token');
          setIsLoggedIn(false);
          router.push('/signin')
      })
      .catch((error) => {
          toast.error(error?.response?.data?.message);
      });
  };


  const signIn = (token) => {
    setCookie('token', token , 7);
    setIsLoggedIn(true);
    router.push('/')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn  , signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};