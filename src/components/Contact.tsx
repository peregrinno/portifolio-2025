"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = {
    email: "joseluan74@gmail.com",
    phone: "81998947390",
    linkedin: "www.linkedin.com/in/luanaraujodev",
    github: "github.com/peregrinno"
};

export default function Contact() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <section className="py-20 relative" style={{ height: '99vh' }}>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Fala comigo!
                </motion.h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.a
                        href={`mailto:${contactInfo.email}`}
                        className="group relative p-8 rounded-lg bg-[#1A1A2E] border border-blue-600/20 
                     hover:border-blue-600/40 transition-all duration-300"
                        onHoverStart={() => setHoveredItem('email')}
                        onHoverEnd={() => setHoveredItem(null)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-400">Email</h3>
                            <p className="text-gray-300">{contactInfo.email}</p>
                        </div>
                        {hoveredItem === 'email' && (
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute h-1 w-1 bg-blue-400/30 rounded-full"
                                        initial={{
                                            x: Math.random() * 100 + "%",
                                            y: Math.random() * 100 + "%",
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 1,
                                            repeat: Infinity,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </motion.a>

                    <motion.a
                        href={`https://${contactInfo.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-8 rounded-lg bg-[#1A1A2E] border border-blue-600/20 
                     hover:border-blue-600/40 transition-all duration-300"
                        onHoverStart={() => setHoveredItem('linkedin')}
                        onHoverEnd={() => setHoveredItem(null)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-400">LinkedIn</h3>
                            <p className="text-gray-300">Vamos nos conectar!</p>
                        </div>
                        {hoveredItem === 'linkedin' && (
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute h-1 w-1 bg-blue-400/30 rounded-full"
                                        initial={{
                                            x: Math.random() * 100 + "%",
                                            y: Math.random() * 100 + "%",
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 1,
                                            repeat: Infinity,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </motion.a>
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <a
                        href={`https://${contactInfo.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full
                     hover:bg-blue-700 transition-colors duration-300"
                    >
                        Ver github
                    </a>
                </motion.div>
            </div>
        </section>
    );
}