"use client"
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import LoadingOverlay from '@/components/LoadingOverlay';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Welcome = dynamic(() => import('@/components/Welcome'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Education = dynamic(() => import('@/components/Education'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide overlay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['welcome', 'experience', 'projects', 'skills', 'education', 'contact'];

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>

      <main className="min-h-screen md:flex">
        <div className="md:w-1/3 md:fixed md:h-screen md:left-0">
          <Hero
            activeSection={activeSection}
            onSectionChange={(id) => {
              const element = document.getElementById(id);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        <div className="md:ml-[33.333%] md:w-2/3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <section id="welcome"><Welcome /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="skills"><Skills /></section>
            <section id="education"><Education /></section>
            <section id="contact"><Contact /></section>
          </motion.div>
        </div>
      </main>
    </>
  );
}