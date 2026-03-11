// Portfolio data – Single source of truth

export const personal = {
    name: "Jegarlin Athirsh K.B",
    nameShort: "Jegarlin",
    role: "Email Marketing Executive | SQL | Power BI | Python",
    tagline: "Transforming data into insights and campaigns into results.",
    email: "jegarlinathirsh@gmail.com",
    phone: "+91 63839 49323",
    linkedin: "https://linkedin.com/in/jegarlinathirsh",
    github: "https://github.com/jegarlin",
    portfolio: "https://jegarlin.vercel.app",
};

export const about = `I'm a curious mind at the intersection of data and marketing — passionate about turning 
raw numbers into clear narratives and driving impactful campaigns. Currently pursuing B.Tech in AI & Data Science, 
I combine analytical precision with strategic marketing thinking. I love building dashboards that tell stories, 
writing SQL queries that uncover hidden patterns, and automating workflows that save real time.`;

export const skills = [
    { name: "Python", icon: "SiPython", category: "Programming", color: "#3776AB" },
    { name: "SQL", icon: "SiMysql", category: "Programming", color: "#4479A1" },
    { name: "HTML", icon: "SiHtml5", category: "Programming", color: "#E34F26" },
    { name: "CSS", icon: "SiCss", category: "Programming", color: "#1572B6" },
    { name: "Excel", icon: "SiMicrosoftexcel", category: "Analytics", color: "#217346" },
    { name: "Power BI", icon: "SiPowerbi", category: "Analytics", color: "#F2C811" },
    { name: "Shopify", icon: "SiShopify", category: "Marketing", color: "#96BF48" },
    { name: "Meta Ads", icon: "SiFacebook", category: "Marketing", color: "#1877F2" },
    { name: "n8n", icon: "SiN8N", category: "Automation", color: "#EA4B71" },
];

export const experience = [
    {
        title: "Data Analyst Intern",
        company: "InLighnX Global Pvt Ltd",
        duration: "October 2025",
        type: "Internship",
        points: [
            "Data cleaning and analysis using SQL and Excel",
            "Created interactive dashboards using Power BI",
            "Presented data insights for business decision-making",
        ],
        metrics: [
            { label: "Dashboards Built", value: 5 },
            { label: "Reports Delivered", value: 12 },
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: "Customer Shopping Behavior Analysis",
        description:
            "Analyzed customer purchasing patterns to identify high-value segments, seasonal trends, and product performance using interactive dashboards.",
        tech: ["SQL", "Python", "Power BI"],
        features: ["Data segmentation", "Trend visualization", "Business insights"],
        image: null, // generated placeholder
        link: "#",
    },
    {
        id: 2,
        title: "Data Jobs Market Dashboard",
        description:
            "Interactive Power BI dashboard analyzing global data job market trends including salaries, job roles, and geographic distribution with drill-through analytics.",
        tech: ["Power BI"],
        features: ["KPIs", "Drill-through analytics", "Role-based insights"],
        image: null,
        link: "#",
    },
    {
        id: 3,
        title: "South Indian Healthy Meal Planner",
        description: "A smart, personalized 4-week meal planner designed to balance high protein and authentic flavors based on BMI, BMR, and TDEE calculations.",
        tech: ["Python", "Gradio", "Pandas"],
        features: [
            "AI-driven personalization based on body metrics",
            "4-week rotating schedule (Veg & Non-Veg)",
            "Automated macro tracking (Calories, Protein, Carbs, Fat)",
            "Dynamic PDF report generation for meal schedules"
        ],
        image: null, // generated placeholder
        link: "https://github.com/jegirlin/Meal_prep" // Update with your actual repo
    }
];

export const education = [
    {
        degree: "B.Tech – Artificial Intelligence & Data Science",
        institution: "St. Xavier's Catholic College of Engineering",
        location: "Nagercoil",
        duration: "Nov 2022 – May 2026",
        current: true,
    },
];

export const certifications = [
    {
        name: "IBM Data Analyst Professional Certificate",
        issuer: "IBM / Coursera",
        type: "cert",
    },
];

export const awards = [
    {
        title: "1st Prize",
        event: "Intercollegiate Competition",
        year: "2024",
    },
    {
        title: "1st Prize",
        event: "Business Quiz",
        year: "2024",
    },
];

export const stats = [
    { label: "Projects Completed", value: 3 },
    { label: "Awards Won", value: 2 },
    { label: "Certifications", value: 1 },
    { label: "Months of Experience", value: 6 },
];

