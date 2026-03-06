import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { personal } from '../data/portfolio';

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const nameParts = personal.name.toUpperCase().split(' ');

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(16,16,16,0.12)',
                padding: '100px 40px 60px',
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
            }}
        >
            {/* Top row: Name + headshot */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap',
            }}>
                {/* Left: Large name */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                    {nameParts.map((word, i) => (
                        <motion.div
                            key={word}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontFamily: 'Archivo Black, sans-serif',
                                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                                fontWeight: 900,
                                letterSpacing: '-0.02em',
                                lineHeight: 0.95,
                                color: '#101010',
                            }}
                        >
                            {word}
                        </motion.div>
                    ))}

                    {/* Role tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        style={{
                            marginTop: '28px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                        }}
                    >
                        {['Email Marketing', 'SQL', 'Power BI', 'Python'].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.08em',
                                    padding: '5px 12px',
                                    border: '0.5px solid #857AB1',
                                    color: '#857AB1',
                                    borderRadius: '100px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        style={{ marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                    >
                        <MagneticBtn onClick={scrollToProjects} filled>
                            View Projects ↓
                        </MagneticBtn>
                        <MagneticBtn onClick={scrollToContact}>
                            Contact Me →
                        </MagneticBtn>
                    </motion.div>
                </div>

                {/* Right: headshot */}


            </div>

            {/* Marquee tagline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{
                    marginTop: '60px',
                    borderTop: '0.5px solid rgba(16,16,16,0.15)',
                    borderBottom: '0.5px solid rgba(16,16,16,0.15)',
                    padding: '14px 0',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                }}
            >
                <div className="marquee-inner">
                    {Array(6).fill(null).map((_, i) => (
                        <span key={i} style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.85rem',
                            letterSpacing: '0.15em',
                            color: '#6B6B6B',
                            marginRight: '60px',
                        }}>
                            {personal.tagline}
                            <span style={{ color: '#E04027', marginLeft: '60px' }}>✦</span>
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', bottom: '28px', right: '40px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    opacity: 0.4,
                }}
            >
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', writingMode: 'vertical-rl' }}>SCROLL</span>
                <FiArrowDown size={14} />
            </motion.div>
        </section>
    );
}

function MagneticBtn({ children, onClick, filled }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80) {
                el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
            } else {
                el.style.transform = 'translate(0,0)';
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <button
            ref={ref}
            onClick={onClick}
            style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.82rem',
                letterSpacing: '0.05em',
                padding: '12px 28px',
                border: filled ? 'none' : '1px solid #101010',
                backgroundColor: filled ? '#E04027' : 'transparent',
                color: filled ? '#F9F9F8' : '#101010',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background 0.25s ease, color 0.25s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => {
                if (!filled) {
                    e.currentTarget.style.backgroundColor = '#101010';
                    e.currentTarget.style.color = '#F9F9F8';
                } else {
                    e.currentTarget.style.backgroundColor = '#c93820';
                }
            }}
            onMouseLeave={e => {
                if (!filled) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#101010';
                } else {
                    e.currentTarget.style.backgroundColor = '#E04027';
                }
            }}
        >
            {children}
        </button>
    );
}
