"use client"
import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { getCookie , deleteCookie , setCookie } from '@/api/auth';
import { useRouter } from 'next/navigation';
import { prefix, url } from '@/api/domain';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token')); 
  const router = useRouter();
  const token = getCookie('token');
  const [status , setStatus] = useState(null);

  const signOut = () => {
    axios.post(url + prefix + 'logout' , null , {
      headers : {
          'Authorization' : 'Bearer ' + token,
      }
    })
      .then((response) => {
          console.log(response)
          deleteCookie('token');
          setIsLoggedIn(false);
          router.push('/login')
      })
      .catch((error) => {
          console.log(error);
      });
  };


  const signIn = (token) => {
    setCookie('token', token , 7);
    setIsLoggedIn(true);
    router.push('/');
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