import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');
    const btnRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Magnetic effect on Resume button
    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;
        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
                btn.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
            } else {
                btn.style.transform = 'translate(0,0)';
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setActive(id);
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                backgroundColor: scrolled ? 'rgba(249,249,248,0.88)' : 'rgba(249,249,248,0.6)',
                borderBottom: scrolled ? '0.5px solid rgba(16,16,16,0.12)' : '0.5px solid transparent',
                transition: 'all 0.3s ease',
            }}
        >
            <nav style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 40px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <motion.span
                    whileHover={{ scale: 1.02 }}
                    style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.08em', cursor: 'default' }}
                >
                    JA<span style={{ color: '#E04027' }}>.</span>
                </motion.span>

                {/* Desktop links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
                    {links.map(link => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            className="nav-link"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px 0',
                                fontWeight: active === link ? 600 : 400,
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>

                {/* Resume CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '4px' }}
                        className="show-mobile"
                    >
                        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            overflow: 'hidden',
                            borderTop: '0.5px solid rgba(16,16,16,0.1)',
                            backgroundColor: 'rgba(249,249,248,0.96)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div style={{ padding: '16px 40px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {links.map(link => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    style={{
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        textAlign: 'left', fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '1rem', letterSpacing: '0.05em',
                                        color: active === link ? '#E04027' : '#101010',
                                        fontWeight: active === link ? 600 : 400,
                                    }}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </motion.header>
    );
}
