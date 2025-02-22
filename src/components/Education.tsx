"use client"
import { motion } from 'framer-motion';

const education = [
    {
        institution: "FACUVALE - PÓS-GRADUAÇÃO EaD",
        course: "Especialização em Inteligência Artificial",
        period: "fevereiro de 2025 - julho de 2025",
        isOngoing: true
    },
    {
        institution: "FACUVALE - PÓS-GRADUAÇÃO EaD",
        course: "Especialização em Arquitetura de Software",
        period: "outubro de 2024 - fevereiro de 2025"
    },
    {
        institution: "Faculdade Única",
        course: "Graduação em Análise de Sistemas de Computação",
        period: "fevereiro de 2022 - setembro de 2024"
    },
    {
        institution: "Universidade de Pernambuco",
        course: "Graduação em Sistemas de Informação",
        period: "janeiro de 2020 - agosto de 2023"
    }
];

export default function Education() {
    return (
        <section className="py-20 relative bg-[#0B0B1A]/70" style={{ height: '98vh' }}>
            <div className="container mx-auto px-4 h-full flex flex-col">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Formação acadêmica
                </motion.h2>

                <div className="max-w-4xl mx-auto relative flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto pr-4 space-y-8 no-scrollbar">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="mb-12 relative"
                            >
                                <div className="flex items-center space-x-8">
                                    <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center
                              border border-blue-600/40 backdrop-blur-sm">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="w-16 h-16 rounded-full border-t-2 border-r-2 border-blue-400"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-blue-400">
                                            {edu.course}
                                        </h3>
                                        <p className="text-xl text-gray-300 mt-2">
                                            {edu.institution}
                                        </p>
                                        <p className="text-gray-400 mt-1">
                                            {edu.period}
                                        </p>
                                        {edu.isOngoing && (
                                            <span className="inline-block mt-2 px-3 py-1 bg-blue-600/20 
                                   rounded-full text-sm text-blue-400 border border-blue-600/40">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Constellation effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-1 w-1 bg-blue-400/30 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}