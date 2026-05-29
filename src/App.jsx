import React, { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  // Smooth scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { id: 1, title: 'Automated Timetable Generator', category: 'devops', desc: 'Cloud-based scheduling algorithm with automated resource allocation.', tags: ['React', 'Node.js', 'AWS', 'Docker'] },
    { id: 2, title: 'Interactive Mood Food Picker', category: 'frontend', desc: 'A vibrant web app leveraging custom JavaScript logic for mystery food generation.', tags: ['JavaScript', 'CSS3', 'HTML5'] },
    { id: 3, title: 'Eco-Education Platform', category: 'frontend', desc: 'A colorful, child-friendly educational site focused on environmental awareness.', tags: ['React', 'CSS Animations'] },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div style={styles.container}>
      {/* --- STYLESHEET INJECTION FOR ANIMATIONS --- */}
      <style>{hoverAnimations}</style>

      {/* --- NAVIGATION BAR --- */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>anjali<span style={styles.accent}>.</span></div>
        <div style={styles.navLinks}>
          <span className="nav-item" style={styles.navLink} onClick={() => scrollToSection('about')}>About</span>
          <span className="nav-item" style={styles.navLink} onClick={() => scrollToSection('skills')}>Skills</span>
          <span className="nav-item" style={styles.navLink} onClick={() => scrollToSection('projects')}>Projects</span>
          <span className="nav-item" style={styles.navLink} onClick={() => scrollToSection('contact')}>Contact</span>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style={styles.hero} id="about">
        <div style={styles.heroContent}>
          <div style={styles.badge}>Available for Opportunities</div>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.gradientText}>Anjali Kumari</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Cloud & DevOps Engineer / Frontend Developer. Building scalable infrastructure and interactive, high-performance web experiences.
          </p>
          <div style={styles.btnGroup}>
            <button className="btn-primary" style={styles.btnPrimary} onClick={() => scrollToSection('projects')}>View Work</button>
            <button className="btn-secondary" style={styles.btnSecondary} onClick={() => scrollToSection('contact')}>Let's Talk</button>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION (ADVANCED GRID) --- */}
      <section style={styles.section} id="skills">
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <div style={styles.grid}>
          <div className="card" style={styles.skillCard}>
            <div style={styles.iconWrapper}>☁️</div>
            <h3 style={styles.cardTitle}>Cloud & DevOps</h3>
            <p style={styles.cardText}>AWS, Google Cloud Platform, Cloud Shell, CI/CD pipelines, and Linux administration.</p>
          </div>
          <div className="card" style={styles.skillCard}>
            <div style={styles.iconWrapper}>💻</div>
            <h3 style={styles.cardTitle}>Frontend Dev</h3>
            <p style={styles.cardText}>React, JavaScript (ES6+), semantic HTML5, and advanced modern CSS/SASS layout architectures.</p>
          </div>
          <div className="card" style={styles.skillCard}>
            <div style={styles.iconWrapper}>🛠️</div>
            <h3 style={styles.cardTitle}>Tools & Systems</h3>
            <p style={styles.cardText}>Git, GitHub version control workflows, automated scripting, and system configuration.</p>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (WITH DYNAMIC FILTER) --- */}
      <section style={styles.section} id="projects">
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        
        {/* Filter Tabs */}
        <div style={styles.tabContainer}>
          {['all', 'devops', 'frontend'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tabBtn,
                ...(activeTab === tab ? styles.activeTabBtn : {}),
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Dynamic Cards */}
        <div style={styles.grid}>
          {filteredProjects.map((project) => (
            <div className="card" key={project.id} style={styles.projectCard}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardText}>{project.desc}</p>
              <div style={styles.tagWrapper}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section style={styles.contactSection} id="contact">
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={{ ...styles.cardText, textAlign: 'center', marginBottom: '2rem' }}>
          Want to collaborate on a project or discussing cloud/devops opportunities? Drop a line!
        </p>
        <div style={styles.contactCard}>
          <p style={{ margin: '0.5rem 0' }}>📧 Email: <a href="mailto:your.email@example.com" style={styles.link}>your.email@example.com</a></p>
          <p style={{ margin: '0.5rem 0' }}>🔗 GitHub: <a href="https://github.com/AnjalikumariA" target="_blank" rel="noreferrer" style={styles.link}>AnjalikumariA</a></p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={styles.footer}>
        <p>© 2026 Anjali Kumari. Built with React & Advanced CSS.</p>
      </footer>
    </div>
  );
}

// --- ADVANCED CSS & STYLING ARCHITECTURE ---
const styles = {
  container: {
    backgroundColor: '#0a0a0c',
    color: '#f3f4f6',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    padding: '0 2rem',
    overflowX: 'hidden',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'between',
    alignItems: 'center',
    padding: '1.5rem 0',
    maxWidth: '1100px',
    margin: '0 auto',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    flex: 1,
  },
  accent: {
    color: '#4f46e5',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '500',
    color: '#9ca3af',
    transition: 'color 0.3s ease',
  },
  hero: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '8rem 0 6rem 0',
    display: 'flex',
    alignItems: 'center',
  },
  heroContent: {
    maxWidth: '700px',
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    backgroundColor: 'rgba(79, 70, 229, 0.15)',
    color: '#818cf8',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    border: '1px solid rgba(79, 70, 229, 0.3)',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.15',
    margin: '0 0 1.5rem 0',
    letterSpacing: '-1px',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#9ca3af',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
  },
  btnGroup: {
    display: 'flex',
    gap: '1rem',
  },
  btnPrimary: {
    padding: '0.8rem 2rem',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  },
  btnSecondary: {
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: '#f3f4f6',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  },
  section: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '5rem 0',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '3rem',
    position: 'relative',
    display: 'inline-block',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    backgroundColor: '#121214',
    border: '1px solid rgba(255,255,255,0.03)',
    borderRadius: '12px',
    padding: '2.5rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  iconWrapper: {
    fontSize: '2rem',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '0 0 0.75rem 0',
  },
  cardText: {
    color: '#9ca3af',
    lineHeight: '1.5',
    margin: 0,
    fontSize: '0.95rem',
  },
  tabContainer: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '2.5rem',
  },
  tabBtn: {
    padding: '0.5rem 1.25rem',
    backgroundColor: '#121214',
    color: '#9ca3af',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.85rem',
    transition: 'all 0.2s ease',
  },
  activeTabBtn: {
    backgroundColor: '#4f46e5',
    color: '#fff',
    borderColor: '#4f46e5',
  },
  projectCard: {
    backgroundColor: '#121214',
    border: '1px solid rgba(255,255,255,0.03)',
    borderRadius: '12px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'between',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  tagWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1.5rem',
  },
  tag: {
    fontSize: '0.75rem',
    padding: '0.2rem 0.6rem',
    backgroundColor: 'rgba(255,255,255,0.04)',
    color: '#cbd5e1',
    borderRadius: '4px',
    border: '1px solid rgba(255,255,255,0.02)',
  },
  contactSection: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '6rem 0',
  },
  contactCard: {
    backgroundColor: '#121214',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
  },
  link: {
    color: '#818cf8',
    textDecoration: 'none',
    fontWeight: '500',
  },
  footer: {
    textAlign: 'center',
    padding: '2.5rem 0',
    fontSize: '0.85rem',
    color: '#6b7280',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    maxWidth: '1100px',
    margin: '0 auto',
  },
};

// Injection string to handle hover and transform transitions smoothly
const hoverAnimations = `
  .nav-item:hover { color: #f3f4f6 !important; }
  .btn-primary:hover { background-color: #4338ca !important; transform: translateY(-2px); }
  .btn-secondary:hover { background-color: rgba(255,255,255,0.03) !important; border-color: rgba(255,255,255,0.3) !important; }
  .card:hover { transform: translateY(-6px); border-color: rgba(99, 102, 241, 0.25) !important; box-shadow: 0 10px 30px -15px rgba(0,0,0,0.7); }
`;