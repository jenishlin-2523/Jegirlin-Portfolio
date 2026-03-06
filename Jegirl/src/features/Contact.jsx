import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowUpRight, FiSend } from 'react-icons/fi';
import { personal } from '../data/portfolio';
import { SectionLabel } from './About';

const socials = [
    { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/jegarlinathirsh', href: personal.linkedin },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/jegarlinathirsh', href: personal.github },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
        window.location.href = mailto;
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section
            id="contact"
            style={{
                padding: '100px 40px',
                background: '#101010',
                color: '#F9F9F8',
                borderTop: '0.5px solid rgba(249,249,248,0.08)',
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                        letterSpacing: '0.18em', color: '#E04027',
                        borderLeft: '2px solid #E04027', paddingLeft: '12px',
                    }}
                >CONTACT</motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontFamily: 'Archivo Black, sans-serif',
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        letterSpacing: '-0.02em', lineHeight: 1.05,
                        marginTop: '16px', marginBottom: '64px',
                    }}
                >
                    Let's Build<br />
                    <span style={{ color: '#E04027' }}>Something.</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    {/* Contact info */}
                    <div>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'rgba(249,249,248,0.6)', lineHeight: 1.85, marginBottom: '40px' }}>
                            Open to full-time roles, freelance projects, and collaborations. Reach out and let's discuss how data and marketing can work together.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {socials.map(social => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '14px',
                                        textDecoration: 'none', color: '#F9F9F8',
                                        padding: '14px 18px',
                                        border: '0.5px solid rgba(249,249,248,0.12)',
                                        borderRadius: '10px',
                                        transition: 'border-color 0.25s, background 0.25s',
                                    }}
                                    whileHover={{ borderColor: '#E04027', backgroundColor: 'rgba(224,64,39,0.08)' }}
                                >
                                    <social.icon size={18} style={{ color: '#E04027', flexShrink: 0 }} />
                                    <div>
                                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(249,249,248,0.4)', marginBottom: '2px' }}>
                                            {social.label.toUpperCase()}
                                        </p>
                                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem' }}>{social.value}</p>
                                    </div>
                                    <FiArrowUpRight size={14} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Contact form */}
                    <motion.form
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                    >
                        {['name', 'email'].map(field => (
                            <div key={field}>
                                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(249,249,248,0.4)', display: 'block', marginBottom: '8px' }}>
                                    {field.toUpperCase()}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    required
                                    value={form[field]}
                                    onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                                    placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px',
                                        background: 'rgba(249,249,248,0.06)',
                                        border: '0.5px solid rgba(249,249,248,0.15)',
                                        borderRadius: '8px',
                                        color: '#F9F9F8',
                                        fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '0.85rem',
                                        outline: 'none',
                                        transition: 'border-color 0.25s',
                                    }}
                                    onFocus={e => e.target.style.borderColor = '#E04027'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(249,249,248,0.15)'}
                                />
                            </div>
                        ))}

                        <div>
                            <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(249,249,248,0.4)', display: 'block', marginBottom: '8px' }}>
                                MESSAGE
                            </label>
                            <textarea
                                rows={5}
                                required
                                value={form.message}
                                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Tell me about your project or opportunity..."
                                style={{
                                    width: '100%',
                                    padding: '14px 16px',
                                    background: 'rgba(249,249,248,0.06)',
                                    border: '0.5px solid rgba(249,249,248,0.15)',
                                    borderRadius: '8px',
                                    color: '#F9F9F8',
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.85rem',
                                    outline: 'none',
                                    resize: 'vertical',
                                    transition: 'border-color 0.25s',
                                }}
                                onFocus={e => e.target.style.borderColor = '#E04027'}
                                onBlur={e => e.target.style.borderColor = 'rgba(249,249,248,0.15)'}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ backgroundColor: '#c93820', scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                marginTop: '8px',
                                padding: '14px 28px',
                                background: '#E04027',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#F9F9F8',
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.85rem',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                justifyContent: 'center',
                                transition: 'background 0.2s',
                            }}
                        >
                            {sent ? '✓ Message Sent!' : (<><FiSend size={15} /> Send Message</>)}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
