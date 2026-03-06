import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/portfolio';

export default function Footer() {
    return (
        <footer
            style={{
                padding: '40px',
                background: '#101010',
                borderTop: '0.5px solid rgba(249,249,248,0.08)',
            }}
        >
            <div style={{
                maxWidth: '1400px', margin: '0 auto',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
            }}>
                {/* Logo */}
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', fontWeight: 600, color: '#F9F9F8', letterSpacing: '0.08em' }}>
                    JA<span style={{ color: '#E04027' }}>.</span>
                </span>

                {/* Copyright */}
                <p style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
                    color: 'rgba(249,249,248,0.35)', letterSpacing: '0.05em', textAlign: 'center',
                }}>
                    © 2026 Designed by Jegarlin Athirsh — Built with Precision.
                </p>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '20px' }}>
                    {[
                        { Icon: FiGithub, href: personal.github, label: 'GitHub' },
                        { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                        { Icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
                    ].map(({ Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ color: '#E04027', y: -2 }}
                            style={{
                                color: 'rgba(249,249,248,0.4)',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                transition: 'color 0.2s',
                            }}
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
