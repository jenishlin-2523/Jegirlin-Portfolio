import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { about } from '../data/portfolio';

const interests = ['Data Analytics', 'Email Marketing', 'Automation', 'Campaign Tracking', 'Dashboard Design', 'SQL Queries'];

export default function About() {
    return (
        <section id="about" style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
            <SectionLabel>ABOUT</SectionLabel>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '48px', alignItems: 'start' }}>
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
                        Data Meets<br />
                        <span style={{ color: '#E04027' }}>Marketing.</span>
                    </h2>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem', lineHeight: 1.85, color: '#444', maxWidth: '520px' }}>
                        {about}
                    </p>
                </motion.div>

                {/* Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#857AB1', marginBottom: '20px' }}>
                        FOCUS AREAS
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {interests.map((interest, i) => (
                            <motion.span
                                key={interest}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.06 }}
                                style={{
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.78rem',
                                    padding: '8px 16px',
                                    border: '0.5px solid #101010',
                                    borderRadius: '4px',
                                    letterSpacing: '0.04em',
                                    cursor: 'default',
                                    transition: 'background 0.2s, color 0.2s',
                                }}
                                whileHover={{ backgroundColor: '#101010', color: '#F9F9F8' }}
                            >
                                {interest}
                            </motion.span>
                        ))}
                    </div>

                    {/* Mini stat */}
                    <div style={{ marginTop: '40px', padding: '24px', border: '0.5px solid rgba(16,16,16,0.15)', borderRadius: '12px', background: '#F0F0EE' }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#857AB1', marginBottom: '8px' }}>CURRENT STATUS</p>
                        <p style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1rem' }}>Open to Work</p>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#666', marginTop: '4px' }}>Email Marketing · Data Analytics · Python</p>
                        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#444' }}>Available for opportunities</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
        </section>
    );
}

export function SectionLabel({ children }) {
    return (
        <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: '#E04027',
                borderLeft: '2px solid #E04027',
                paddingLeft: '12px',
                marginBottom: '0',
            }}
        >
            {children}
        </motion.p>
    );
}
