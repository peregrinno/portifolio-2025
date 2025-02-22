"use client"
import { motion } from 'framer-motion';
import { DiPython, DiDjango, DiJavascript, DiReact, DiMongodb, DiPostgresql, DiMysql, DiDocker, DiGit, DiGithub } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiFlask, SiFastapi, SiOracle, SiAmazondynamodb, SiAmazonrds, SiAmazons3 } from 'react-icons/si';
import { RiDashboardLine } from "react-icons/ri";

const skillCategories = [
    {
        title: "Linguagens & Frameworks",
        skills: [
            { name: "Python", icon: DiPython },
            { name: "Django", icon: DiDjango },
            { name: "Flask", icon: SiFlask },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Javascript", icon: DiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "ReactJS", icon: DiReact },
            { name: "NextJS", icon: SiNextdotjs }
        ]
    },
    {
        title: "Bancos de Dados",
        skills: [
            { name: "NoSQL", icon: DiMongodb },
            { name: "Oracle", icon: SiOracle },
            { name: "PostgreSQL", icon: DiPostgresql },
            { name: "MySQL", icon: DiMysql },
            { name: "MongoDB", icon: DiMongodb },
            { name: "DynamoDB", icon: SiAmazondynamodb }
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS RDS", icon: SiAmazonrds },
            { name: "S3", icon: SiAmazons3 },
            { name: "Docker", icon: DiDocker },
            { name: "Git", icon: DiGit },
            { name: "GitHub", icon: DiGithub }
        ]
    },
    {
        title: "Dados & Analíticos",
        skills: [
            { name: "PowerBI", icon: RiDashboardLine },
            { name: "ETL", icon: DiPython },
            { name: "Dashboards", icon: RiDashboardLine },
            { name: "Machine Learning", icon: DiPython },
            { name: "Aprendizado Supervisionado", icon: DiPython }
        ]
    }
];

export default function Skills() {
    return (
        <section className="py-20 relative overflow-hidden" style={{ height: '98vh' }}>
            <div className="container mx-auto px-4 h-full flex flex-col">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Habilidades técnicas
                </motion.h2>

                <div className="max-w-6xl mx-auto relative flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto pr-4 space-y-8 no-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillCategories.map((category, categoryIndex) => (
                                <motion.div
                                    key={categoryIndex}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: categoryIndex * 0.1 }}
                                    className="bg-[#1A1A2E] p-6 rounded-lg border border-blue-600/20 backdrop-blur-sm"
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-blue-400">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    delay: skillIndex * 0.05
                                                }}
                                                className="px-4 py-2 bg-blue-600/20 rounded-full text-sm font-medium
                                                hover:bg-blue-600/30 transition-colors cursor-pointer flex items-center gap-2"
                                            >
                                                <skill.icon className="text-lg" />
                                                {skill.name}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}