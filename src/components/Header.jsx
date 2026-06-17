import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 \${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-gradient">
                    RNJD.
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Icons - Desktop */}
                <div className="hidden md:flex gap-4 items-center">
                    <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><Github size={20} /></a>
                    <a href="#" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
                    <a href="mailto:contact@example.com" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><Mail size={20} /></a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass"
                    >
                        <div className="flex flex-col px-6 pb-6 pt-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-4 mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                                <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/10"><Github size={20} /></a>
                                <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-white/10"><Linkedin size={20} /></a>
                                <a href="mailto:contact@example.com" className="p-2 rounded-full bg-gray-100 dark:bg-white/10"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
