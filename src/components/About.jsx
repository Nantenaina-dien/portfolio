import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, Briefcase } from 'lucide-react';
import img from "../assets/1.png";

const About = () => {
    const infoCards = [
        { icon: <Award className="text-blue-500" size={24} />, title: 'Expérience', subtitle: 'Projets diversifiés' },
        { icon: <BookOpen className="text-purple-500" size={24} />, title: 'Formation', subtitle: 'Licence en Info' },
        { icon: <Briefcase className="text-indigo-500" size={24} />, title: 'Disponibilité', subtitle: 'Freelance & Freelance' },
    ];

    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        À <span className="text-gradient">propos de moi</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Découvrez mon parcours, ma vision et ce qui m'anime au quotidien dans l'univers du développement logiciel.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass p-2 max-w-md mx-auto relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl z-10">
                                <img src={img} alt="profiles" />
                            </div>
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                 {/* <User size={120} className="text-gray-400 dark:text-gray-600" /> */}
                                {/* Decorative elements inside the image box */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {infoCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="glass p-6 rounded-2xl flex flex-col items-center text-center justify-center hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm mb-4">
                                        {card.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                Passionné par l'informatique depuis mon plus jeune âge, j'ai consolidé mes acquis par une
                                <strong className="text-gray-900 dark:text-white font-medium"> Licence en informatique générale</strong>.
                            </p>
                            <p>
                                Mon expertise s'étend sur trois axes majeurs : le développement <span className="text-primary font-medium">Web</span>,
                                la création d'applications <span className="text-purple-500 font-medium">Desktop</span> robustes, et le monde <span className="text-indigo-500 font-medium">Mobile</span>.
                            </p>
                            <p>
                                Je suis continuellement à la recherche de nouveaux défis techniques et j'attache une grande importance à la qualité du code, à l'expérience utilisateur (UX/UI) et aux performances des solutions que je propose.
                            </p>
                        </div>

                        <div>
                            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform shadow-xl">
                                Travaillons ensemble
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
