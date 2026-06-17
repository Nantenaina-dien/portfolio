import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            category: 'Web',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            description: "Panel d'administration complet avec graphiques de ventes, gestion des stocks et authentification sécurisée.",
            techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 2,
            title: 'Gestionnaire de Tâches Pro',
            category: 'Desktop',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
            description: 'Application de bureau robuste pour la gestion de projets avec synchronisation hors-ligne.',
            techStack: ['C#', '.NET', 'WPF', 'SQLite'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            id: 3,
            title: 'Fitness Tracker App',
            category: 'Mobile',
            image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800',
            description: "Suivi de l'activité physique avec intégration GPS, graphiques de progression et plans d'entraînement.",
            techStack: ['React Native', 'Firebase', 'Redux'],
            githubLink: '#',
            liveLink: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Mes <span className="text-gradient">Réalisations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Découvrez une sélection de mes projets récents démontrant mon savoir-faire technique et ma capacité à résoudre des problèmes concrets.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-overlay"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md text-xs font-semibold rounded-full shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <a href={project.githubLink} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.liveLink} className="flex items-center gap-2 text-sm text-primary font-medium hover:text-blue-600 transition-colors">
                                        Demo <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 dark:border-gray-800 font-medium hover:border-primary hover:text-primary transition-colors">
                        Voir plus de projets sur GitHub <Github size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
