/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HomeIcon, BriefcaseIcon, WrenchScrewdriverIcon, AcademicCapIcon, EnvelopeIcon, CursorArrowRippleIcon } from '@heroicons/react/24/outline';
import Particles from './particles/particles';



interface HeroProps {
    activeSection?: string;
    onSectionChange?: (section: string) => void;
}

const navigationItems = [
    { id: 'welcome', icon: HomeIcon, label: 'Home' },
    { id: 'experience', icon: BriefcaseIcon, label: 'Experiência' },
    { id: 'projects', icon: CursorArrowRippleIcon, label: 'Projetos' },
    { id: 'skills', icon: WrenchScrewdriverIcon, label: 'Skills' },
    { id: 'education', icon: AcademicCapIcon, label: 'Formação' },
    { id: 'contact', icon: EnvelopeIcon, label: 'Contato' }
];

export default function Hero({ activeSection = 'welcome', onSectionChange }: HeroProps) {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTitleBySection = () => {
        switch (activeSection) {
            case 'experience':
                return 'Jornada';
            case 'projects':
                return 'Projetos';
            case 'skills':
                return 'Skills';
            case 'education':
                return 'Formação';
            case 'contact':
                return 'Contato';
            default:
                return 'Luan Araujo';
        }
    };

    return (
        <section id="hero" className="h-screen flex items-center justify-center relative bg-[#0B0B1A]">
            {/* Floating Astronaut */}
            <motion.div
                className="absolute top-10 right-10 w-24 md:w-32 z-10"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/astronaut.png"
                    alt="Floating Astronaut"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Background Stars Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="relative z-10 px-4">
                <motion.div
                    key={activeSection}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {activeSection === 'welcome' && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 flex justify-center"
                        >
                            <div className="w-64 h-64 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600/30">
                                <img
                                    src="/my-picture.png"
                                    alt="Luan Araujo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    )}

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
                        {getTitleBySection()}
                    </h1>

                    {activeSection === 'welcome' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl md:text-4xl mb-8 text-gray-300">
                                Software Engineer
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                                Engenheiro de Software focado em micro serviços, cloud e escalabilidade.
                                Experiência em diversas áreas e metodologias ágeis.
                            </p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="mt-12 space-x-4"
                            >
                                <a
                                    href="/luan-araujo-resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block transition-all"
                                >
                                    Currículo
                                </a>
                                <a
                                    href="https://wa.me/5581998947390?text='Olá, Luan! Vi seu portifólio e gostaria de conversar sobre o seu trabalho!'"
                                    target='_blank'
                                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full inline-block transition-all"
                                >
                                    Fale comigo
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Navigation */}
            <div className="fixed md:absolute bottom-0 left-0 right-0 md:bottom-8 md:left-1/2 md:-translate-x-1/2 z-20 bg-[#0B0B1A]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 md:py-0">
                <div className="flex items-center justify-center space-x-4">
                    {navigationItems.map(({ id, icon: Icon, label }) => (
                        <div key={id} className="relative flex flex-col items-center">
                            <motion.button
                                onClick={() => onSectionChange?.(id)}
                                onHoverStart={() => setHoveredNav(id)}
                                onHoverEnd={() => setHoveredNav(null)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                                    ${activeSection === id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-[#1A1A2E] text-gray-400 hover:bg-blue-600/20 hover:text-blue-400'
                                    }`}
                            >
                                <Icon className="w-6 h-6" />
                            </motion.button>

                            {hoveredNav === id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-10 w-full flex flex-col items-center"
                                >
                                    <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md whitespace-nowrap">
                                        {label}
                                    </div>
                                    <div className="w-2 h-2 bg-blue-600 rotate-45" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}