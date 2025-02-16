'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Experience from "./components/Experience";
export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').macthes)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(true);
    }
  },[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Experience isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
