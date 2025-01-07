"use client"
import React, { useEffect, useState } from 'react'
import aboutService from '../services/aboutService';

interface AboutItem {
  id: number;
  title: string;
  description?: string;
}

export default function AboutUs() {
  const [about, setAbout] = useState<AboutItem>();
  useEffect(() =>{
    const fetchAbout = async() =>{
      try {
        const data = await aboutService.getAll();
        setAbout(data);
        console.log('data ở đây', data)
      } catch(error){
        console.error('Fail to catch about data', error)
      }
    };
    fetchAbout();
  }, [])
  return (
    <div>
      <h1 className='bg-purple-300  '>About single data </h1>
     
      {about?.title}
    </div>
  );
}


