import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, MonitorSmartphone, Database, Terminal, GitBranch } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Développement Web",
            icon: <Layout className="text-blue-500" size={28} />,
            skills: [
                { name: "React JS", level: 90 },
                { name: "HTML / CSS / Tailwind", level: 95 },
                { name: "JavaScript / TypeScript", level: 85 },
                { name: "Node.js / Express", level: 80 }
            ]
        },
        {
            title: "Développement Desktop",
            icon: <Terminal className="text-purple-500" size={28} />,
            skills: [
                { name: "C# / .NET", level: 85 },
                { name: "Java / JavaFX", level: 80 },
                { name: "Python", level: 75 },
                { name: "Electron", level: 70 }
            ]
        },
        {
            title: "Développement Mobile",
            icon: <MonitorSmartphone className="text-indigo-500" size={28} />,
            skills: [
                { name: "React Native", level: 85 },
                { name: "Flutter", level: 75 },
                { name: "Android Studio (Java/Kotlin)", level: 80 }
            ]
        },
        {
            title: "Bases de Données & Outils",
            icon: <Database className="text-teal-500" size={28} />,
            skills: [
                { name: "MySQL / PostgreSQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "Git / GitHub", level: 90 },
                { name: "Docker / CI/CD", level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Mes <span className="text-gradient">Compétences</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Une expertise technique polyvalente adaptée aux besoins de vos projets, du frontend au backend, sur toutes les plateformes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `\${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
