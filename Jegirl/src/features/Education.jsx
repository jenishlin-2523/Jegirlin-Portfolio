import { motion } from 'framer-motion';
import { education, certifications, awards } from '../data/portfolio';
import { SectionLabel } from './About';
import { FiAward, FiBook } from 'react-icons/fi';

export default function Education() {
    return (
        <section id="education" style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
            <SectionLabel>EDUCATION & CERTS</SectionLabel>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '8px', marginBottom: '56px' }}
            >
                Academic<br /><span style={{ color: '#E04027' }}>Background</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Education cards */}
                {education.map((edu, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        style={{
                            padding: '36px',
                            border: '0.5px solid rgba(16,16,16,0.15)',
                            borderRadius: '16px',
                            background: '#F9F9F8',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: 0, right: 0,
                            width: '120px', height: '120px',
                            background: 'rgba(224,64,39,0.06)',
                            borderRadius: '0 16px 0 120px',
                            display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
                            padding: '16px',
                        }}>
                            <FiBook size={22} style={{ color: '#E04027', opacity: 0.5 }} />
                        </div>

                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.12em', color: '#857AB1', marginBottom: '14px' }}>
                            {edu.current ? 'CURRENT · B.TECH' : 'B.TECH'}
                        </p>
                        <h3 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.1rem', lineHeight: 1.3, marginBottom: '10px' }}>{edu.degree}</h3>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#444', marginBottom: '6px' }}>{edu.institution}</p>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#888' }}>{edu.location}</p>
                        <div style={{
                            marginTop: '24px',
                            padding: '10px 14px',
                            background: '#F0F0EE',
                            borderRadius: '8px',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.75rem',
                            color: '#666',
                            display: 'flex', alignItems: 'center', gap: '8px',
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                            {edu.duration}
                        </div>
                    </motion.div>
                ))}

                {/* Certifications */}
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        style={{
                            padding: '36px',
                            border: '0.5px solid rgba(133,122,177,0.4)',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, rgba(133,122,177,0.06) 0%, #F9F9F8 100%)',
                        }}
                    >
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.12em', color: '#857AB1', marginBottom: '14px' }}>
                            CERTIFICATION
                        </p>
                        <h3 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.05rem', lineHeight: 1.35, marginBottom: '10px' }}>{cert.name}</h3>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#666' }}>{cert.issuer}</p>
                        <div style={{
                            marginTop: '24px',
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '8px 16px', borderRadius: '100px',
                            background: '#857AB1', color: '#F9F9F8',
                        }}>
                            <FiAward size={14} />
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.08em' }}>VERIFIED</span>
                        </div>
                    </motion.div>
                ))}

                {/* Awards */}
                {awards.map((award, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.2 + i * 0.1 }}
                        style={{
                            padding: '32px',
                            border: '0.5px solid rgba(224,64,39,0.3)',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, rgba(224,64,39,0.05) 0%, #F9F9F8 100%)',
                            display: 'flex', alignItems: 'center', gap: '20px',
                        }}
                    >
                        <div style={{
                            width: '56px', height: '56px', flexShrink: 0,
                            borderRadius: '50%', border: '2px solid #E04027',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#E04027',
                        }}>
                            <FiAward size={22} />
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.1rem', color: '#E04027' }}>{award.title}</p>
                            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#444', marginTop: '4px' }}>{award.event}</p>
                            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#888', marginTop: '2px' }}>{award.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
