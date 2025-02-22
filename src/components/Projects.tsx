/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Project {
    title: string;
    client: string;
    category: string;
    year: string;
    description: string;
    images: string[];
}

const projects: Project[] = [
    {
        title: "Rika App",
        client: "Projeto pessoal",
        category: "Micro-SaaS",
        year: "2025",
        description: "SaaS para acompanhamento de ciclo feminino onde as usuárias podem acompanhar seu ciclo.",
        images: ["/projetos/rika/1.webp", "/projetos/rika/2.webp", "/projetos/rika/3.webp", "/projetos/rika/4.webp", "/projetos/rika/5.webp"]
    },
    {
        title: "Andares Clothing",
        client: "Andares Clothing",
        category: "Web app",
        year: "2025",
        description: "Sistema de gestão completo de confecção e vendas de roupas para a empresa Andares Clothing",
        images: ["/projetos/andares/1.webp", "/projetos/andares/2.webp", "/projetos/andares/3.webp", "/projetos/andares/4.webp", "/projetos/andares/5.webp"]
    },
    {
        title: "App de Agendamento de Reuniões",
        client: "Grande Recife - Consorcio de Transporte Metropolitano",
        category: "Web app",
        year: "2024",
        description: "Aplicação web para os colaboradores do Grande Recife poderem agendar suas reuniões nas salas de reuniões da sede do Grande Recife.",
        images: ["/projetos/agenda/1.webp", "/projetos/agenda/2.webp", "/projetos/agenda/3.webp", "/projetos/agenda/4.webp",]
    },
    {
        title: "IJW Royale",
        client: "Comunidade Católica Restauração",
        category: "Micro-SaaS",
        year: "2024",
        description: "Mini game em formato de SaaS aonde os jogadores pode coleciona insignias de Santos.",
        images: ["/projetos/ijw/1.webp", "/projetos/ijw/2.webp"]
    },
    {
        title: "Caruaru Ganha com a Nota",
        client: "Prefeitura Municipal de Caruaru",
        category: "Site",
        year: "2023",
        description: "Portal desenvolvido para promover um programa de nota fiscal premiada criado pela Prefeitura de Caruaru.",
        images: ["/projetos/cgn/1.webp"]
    },
    {
        title: "Gestor de estagiários",
        client: "Grande Recife - Consorcio de Transporte Metropolitano",
        category: "Web app",
        year: "2023",
        description: "Sistema completo de gestão de estagiários, cadastro, gestão de contratos e avaliação.",
        images: ["/projetos/gestor-estagiarios/1.webp", "/projetos/gestor-estagiarios/2.webp"]
    },
    {
        title: "Cartorio de Processos administrativos",
        client: "Prefeitura Municipal de Caruaru",
        category: "Web app",
        year: "2023",
        description: "Sistema interno para processos administrativos solicitados pelos colaboradores da Prefeitura.",
        images: ["/projetos/cartorio/1.webp"]
    },
    {
        title: "SoliCONSEF",
        client: "Prefeitura Municipal de Caruaru",
        category: "Web app",
        year: "2023",
        description: "Sistema interno para que as secretarias possam fazer as solicitações de recursos para serem avaliadas e aprovadas.",
        images: ["/projetos/soliconsef/1.webp"]
    },
    // Add more projects here
];
// Add after the Project interface
const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProjects = projects.filter(
        project => selectedCategory === "Todos" || project.category === selectedCategory
    );

    return (
        <section className="py-20 relative bg-[#0B0B1A]/70" style={{ height: '98vh' }}>
            <div className="container mx-auto px-4 h-full flex flex-col">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-4 text-center"
                >
                    Projetos
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-1xl mb-12 text-center"
                >
                    Mais relevantes
                </motion.p>

                {/* Category Filter */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center gap-4 mb-8 flex-wrap"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-[#1A1A2E] text-gray-400 hover:bg-blue-600/20 hover:text-blue-400'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="max-w-6xl mx-auto relative flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto pr-4 space-y-8 no-scrollbar">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#1A1A2E] p-6 rounded-lg border border-blue-600/20 backdrop-blur-sm 
                                             cursor-pointer hover:border-blue-600/40 transition-all"
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setCurrentImageIndex(0);
                                    }}
                                >
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        loading='lazy'
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-2">{project.client}</p>
                                    <p className="text-gray-500">{project.year}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                >
                    <div className="bg-[#1A1A2E] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-blue-400">{selectedProject.title}</h3>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="relative aspect-video mb-6">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                                {/* Navigation arrows */}
                                <div className="absolute inset-0 flex items-center justify-between p-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex((prev) =>
                                                prev === 0 ? selectedProject.images.length - 1 : prev - 1
                                            );
                                        }}
                                        className="bg-black/50 rounded-full p-2 hover:bg-black/70"
                                    >
                                        <ChevronLeftIcon className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex((prev) =>
                                                prev === selectedProject.images.length - 1 ? 0 : prev + 1
                                            );
                                        }}
                                        className="bg-black/50 rounded-full p-2 hover:bg-black/70"
                                    >
                                        <ChevronRightIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-400">{selectedProject.client}</p>
                                    <p className="text-gray-500">{selectedProject.year}</p>
                                </div>
                                <p className="text-gray-300">{selectedProject.description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}