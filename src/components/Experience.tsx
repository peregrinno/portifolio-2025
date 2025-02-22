"use client"
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Pitang",
        role: "Desenvolvedor de Software Pleno",
        period: "fevereiro de 2025 - Presente",
        location: "Recife, Pernambuco, Brasil"
    },
    {
        company: "SafeCompany",
        role: "Desenvolvedor Backend",
        period: "agosto de 2024 - fevereiro de 2025",
        location: "Recife, Pernambuco, Brasil"
    },
    {
        company: "Grande Recife Consórcio de Transporte Metropolitano",
        role: "Desenvolvedor Full Stack",
        period: "novembro de 2023 - julho de 2024",
        location: "Recife, Pernambuco, Brasil"
    },
    {
        company: "Grupo Aposta Ganha",
        role: "Analista de Dados",
        period: "agosto de 2023 - outubro de 2023",
        location: "Caruaru, Pernambuco, Brasil"
    },
    {
        company: "Prefeitura de Caruaru",
        role: "Desenvolvedor Full Stack",
        period: "março de 2023 - agosto de 2023",
        location: "Caruaru, Pernambuco, Brasil"
    },
    {
        company: "Unique Construtora",
        role: "Analista de Dados",
        period: "outubro de 2022 - março de 2023",
        location: "Caruaru, Pernambuco, Brasil"
    },
    {
        company: "Comunidade Católica Restauração",
        role: "CTO",
        period: "janeiro de 2018 - maio de 2022",
        location: "Caruaru, Pernambuco, Brasil"
    },
    {
        company: "Universidade Federal do Pará",
        role: "Técnico de Suporte em TI",
        period: "dezembro de 2015 - janeiro de 2018",
        location: "Belém, Pará, Brasil"
    }
];

export default function Experience() {
    return (
        <section className="py-20 bg-[#0B0B1A]/50" style={{ height: '98vh' }}>
            <div className="container mx-auto px-4 h-full flex flex-col">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Experiência profissional
                </motion.h2>

                <div className="max-w-1xl mx-auto relative flex-1 overflow-hidden">
                    <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-blue-600/50" />

                    <div className="h-full overflow-y-auto pr-4 space-y-8 no-scrollbar">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[7px] top-2 z-10 shadow-lg shadow-blue-600/50" />

                                <div className="bg-[#1A1A2E]/50 p-6 rounded-lg border border-blue-600/20">
                                    <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
                                    <p className="text-xl text-gray-300 mt-2">{exp.role}</p>
                                    <p className="text-gray-400 mt-1">{exp.period}</p>
                                    <p className="text-gray-500">{exp.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}