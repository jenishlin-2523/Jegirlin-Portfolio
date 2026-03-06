import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionLabel } from './About';

function CountUp({ target, suffix = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1200;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, step);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Experience() {
    return (
        <section id="experience" style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
            <SectionLabel>EXPERIENCE</SectionLabel>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '8px', marginBottom: '60px' }}
            >
                Where I've<br /><span style={{ color: '#E04027' }}>Worked</span>
            </motion.h2>

            {experience.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        padding: '40px',
                        border: '0.5px solid rgba(16,16,16,0.15)',
                        borderRadius: '16px',
                        background: '#F9F9F8',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Accent line */}
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: '#E04027', borderRadius: '4px 0 0 4px' }} />

                    {/* Left: Info */}
                    <div>
                        <div style={{ marginBottom: '8px' }}>
                            <span style={{
                                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
                                letterSpacing: '0.12em', padding: '4px 10px',
                                background: '#857AB1', color: '#F9F9F8', borderRadius: '100px',
                            }}>
                                {exp.type.toUpperCase()}
                            </span>
                        </div>
                        <h3 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.5rem', letterSpacing: '-0.01em', marginTop: '12px' }}>{exp.title}</h3>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#E04027', marginTop: '6px', fontWeight: 600 }}>{exp.company}</p>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#888', marginTop: '4px' }}>{exp.duration}</p>

                        <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {exp.points.map((pt, j) => (
                                <motion.li
                                    key={j}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + j * 0.1 }}
                                    style={{
                                        display: 'flex', gap: '10px',
                                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#444', lineHeight: 1.6, listStyle: 'none',
                                    }}
                                >
                                    <span style={{ color: '#E04027', flexShrink: 0 }}>→</span>
                                    {pt}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Data metrics */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignContent: 'flex-start' }}>
                        {exp.metrics.map((m, k) => (
                            <div
                                key={k}
                                style={{
                                    flex: '1 1 120px',
                                    padding: '24px 20px',
                                    border: '0.5px solid rgba(16,16,16,0.12)',
                                    borderRadius: '12px',
                                    background: '#F0F0EE',
                                }}
                            >
                                <p className="count-num" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                                    <CountUp target={m.value} />
                                </p>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#666', letterSpacing: '0.06em', marginTop: '6px' }}>
                                    {m.label.toUpperCase()}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
