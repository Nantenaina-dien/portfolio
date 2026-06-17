import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Smartphone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            {/* Background decoration elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 -right-64 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-max text-sm font-medium border border-blue-100 dark:border-blue-800/50">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Disponible pour de nouveaux projets
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Bonjour, je suis <br />
                        <span className="text-gradient">R. Nantenaina Jean de Dieu</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        Licencié en informatique générale. Je conçois et développe des applications performantes, esthétiques et innovantes pour le Web, le Desktop et le Mobile.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#projects" className="px-6 py-3 rounded-xl bg-primary text-white font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25">
                            Voir mon travail <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            Me contacter
                        </a>
                    </div>

                    <div className="flex gap-8 mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 flex items-center gap-2"><Code size={16} /> Web Dev</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 flex items-center gap-2"><Monitor size={16} /> Desktop Dev</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-500 flex items-center gap-2"><Smartphone size={16} /> Mobile Dev</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    {/* Main Profile Image / Illustration Area */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass flex items-center justify-center p-8 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 shadow-2xl">
                        <div className="absolute inset-0 border-2 border-white/20 dark:border-white/10 rounded-full animate-spin-slow"></div>
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            {/* Fallback image if no real photo */}
                            <Code size={64} className="text-gray-400 dark:text-gray-600" />
                        </div>

                        {/* Floating tech badges */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <Code className="text-blue-500" size={24} />
                        </motion.div>
                        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <Monitor className="text-purple-500" size={24} />
                        </motion.div>
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                            <Smartphone className="text-indigo-500" size={24} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
