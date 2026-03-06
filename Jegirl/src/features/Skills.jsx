import {
    SiPython, SiMysql, SiHtml5, SiCss,
    SiShopify, SiFacebook, SiN8N,
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionLabel } from './About';

const iconMap = {
    SiPython, SiMysql, SiHtml5, SiCss,
    SiMicrosoftexcel: FaFileExcel,
    SiPowerbi: FiBarChart2,
    SiShopify,
    SiFacebook, SiN8N,
};

const categories = ['All', 'Programming', 'Analytics', 'Marketing', 'Automation'];

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                padding: '100px 40px',
                background: '#F0F0EE',
                borderTop: '0.5px solid rgba(16,16,16,0.1)',
                borderBottom: '0.5px solid rgba(16,16,16,0.1)',
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <SectionLabel>SKILLS</SectionLabel>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '8px', marginBottom: '48px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                    >
                        Technical<br /><span style={{ color: '#E04027' }}>Expertise</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#666', maxWidth: '300px', lineHeight: 1.7 }}
                    >
                        A curated stack built for data-driven decisions and performance marketing.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '12px',
                }}>
                    {skills.map((skill, i) => {
                        const Icon = iconMap[skill.icon];
                        return (
                            <motion.div
                                key={skill.name}
                                className="bento-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                style={{
                                    padding: '28px 24px',
                                    border: '0.5px solid #101010',
                                    borderRadius: '12px',
                                    background: '#F9F9F8',
                                    cursor: 'default',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                }}
                            >
                                <div className="skill-icon" style={{ color: skill.color, fontSize: '2.2rem' }}>
                                    {Icon ? <Icon /> : <span style={{ fontSize: '2rem' }}>◆</span>}
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1rem', marginBottom: '4px' }}>{skill.name}</p>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: '#857AB1' }}>
                                        {skill.category.toUpperCase()}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Wide "and more" card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skills.length * 0.06 }}
                        style={{
                            padding: '28px 24px',
                            border: '0.5px solid #E04027',
                            borderRadius: '12px',
                            background: '#E04027',
                            color: '#F9F9F8',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            gap: '8px',
                        }}
                    >
                        <p style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.4rem', lineHeight: 1.1 }}>Always<br />Learning.</p>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', opacity: 0.8 }}>CONTINUOUSLY GROWING</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
