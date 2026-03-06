import { motion } from 'framer-motion';
import { SiPython, SiMysql, SiReact, SiTailwindcss, SiGradio, SiPandas } from 'react-icons/si';
import { FiBarChart2, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { SectionLabel } from './About';

const techIconMap = {
    Python: SiPython,
    SQL: SiMysql,
    'Power BI': FiBarChart2,
    React: SiReact,
    'Tailwind CSS': SiTailwindcss,
    Gradio: SiGradio,
    Pandas: SiPandas
};

const gradients = [
    'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
];

const codeSnippets = [
    `SELECT segment, COUNT(*) AS customers,
  AVG(total_spend) AS avg_spend
FROM shopping_behavior
GROUP BY segment
ORDER BY avg_spend DESC;`,
    `// Power BI DAX
AvgSalary =
  CALCULATE(
    AVERAGE(Jobs[Salary]),
    ALLSELECTED(Jobs[Role])
  )`,
    `# Meal Planner Logic
def calculate_macros(weight, height, age, activity):
    bmr = 10 * weight + 6.25 * height - 5 * age + 5
    tdee = bmr * activity_factors[activity]
    return {
        "calories": tdee,
        "protein": weight * 2.0,
        "carbs": (tdee * 0.4) / 4,
        "fat": (tdee * 0.2) / 9
    }`,
];

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: '100px 40px',
                background: '#F0F0EE',
                borderTop: '0.5px solid rgba(16,16,16,0.1)',
                borderBottom: '0.5px solid rgba(16,16,16,0.1)',
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <SectionLabel>PROJECTS</SectionLabel>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '8px', marginBottom: '48px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                    >
                        Selected<br /><span style={{ color: '#E04027' }}>Work</span>
                    </motion.h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: i * 0.12 }}
                            style={{
                                border: '0.5px solid #101010',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                background: '#F9F9F8',
                                minHeight: '320px',
                            }}
                        >
                            {/* Image / code preview */}
                            <div
                                className="project-card-img"
                                style={{
                                    background: gradients[i % gradients.length],
                                    padding: '32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    minHeight: '260px',
                                    position: 'relative',
                                }}
                            >
                                {/* Code snippet mockup */}
                                <pre style={{
                                    fontFamily: 'JetBrains Mono, monospace',
                                    fontSize: '0.72rem',
                                    color: 'rgba(249,249,248,0.7)',
                                    lineHeight: 1.7,
                                    whiteSpace: 'pre-wrap',
                                    marginBottom: '20px',
                                }}>{codeSnippets[i]}</pre>

                                {/* Glass tech stack badge */}
                                <div className="glass-badge" style={{ padding: '8px 14px', borderRadius: '8px', display: 'flex', gap: '12px', width: 'fit-content' }}>
                                    {project.tech.map(t => {
                                        const Icon = techIconMap[t];
                                        return (
                                            <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#F9F9F8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                {Icon && <Icon />} {t}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#857AB1', marginBottom: '10px' }}>
                                        PROJECT {String(i + 1).padStart(2, '0')}
                                    </p>
                                    <h3 style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '1.3rem', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '16px' }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#555', lineHeight: 1.75 }}>
                                        {project.description}
                                    </p>
                                    <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {project.features.map(f => (
                                            <span key={f} style={{
                                                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
                                                padding: '4px 10px', border: '0.5px solid rgba(16,16,16,0.2)',
                                                borderRadius: '4px', color: '#444', letterSpacing: '0.04em',
                                            }}>{f}</span>
                                        ))}
                                    </div>
                                </div>

                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginTop: '28px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '0.8rem',
                                        color: '#101010',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid rgba(16,16,16,0.3)',
                                        paddingBottom: '2px',
                                        width: 'fit-content',
                                    }}
                                    whileHover={{ color: '#E04027', borderColor: '#E04027' }}
                                >
                                    View Case Study
                                    <motion.span
                                        whileHover={{ rotate: 45, x: 2 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ display: 'inline-flex' }}
                                    >
                                        <FiArrowUpRight size={16} />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
