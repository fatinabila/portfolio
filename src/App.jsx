import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  // skills can include an official logo URL (iconUrl). Logos are served from devicon CDN.
  const skills = [
    { name: 'React', icon: '⚛️', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: '🟦', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: '🟢', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Angular', icon: '📐', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Next.js', icon: '⏭️', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: '.NET', icon: '🔷' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Git', icon: '🐙', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'REST APIs', icon: '🔁' },
    { name: 'UI UX Design', icon: '🎨' },
    { name: 'CD/CI', icon: '⚙️' },
    { name: 'Unit Testing', icon: '🧪' },
  ];

  const projects = [
    {
      title: 'AI Meal Maker ',
      subtitle:'Smart Recipes from What You Already Have',
      description: `A simple tool that helps you turn leftover ingredients into delicious, ready-to-cook meals. Tell the app what you have in your fridge, and it instantly generates recipes, steps, and approximate calorie info.
It’s perfect for busy people, meal-preppers, or anyone who wants cooking inspiration without scrolling through endless recipe blogs.`,
      tech: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Prompt Engineering' , 'Next.js'],
      icon: '🥣',
      url: 'https://ai-meal-maker.netlify.app',
    },
    {
      title: '[Work In Progress] AI Powered Fitness Assistant',
      subtitle: 'Your Personal Smart Coach',
      description: 'A lightweight fitness coach that learns your training style and gives personalized workout plans. The app tracks your sessions, detects fatigue patterns, and adjusts intensity to prevent overtraining while still helping you improve. It also includes AI-driven meal suggestions, weekly progress insights, and a built-in habit tracker — making it a simple but powerful all-in-one system.',
      tech: ['MCP', 'React','Next.js', 'Prompt Engineering' , 'Supabase'],
      icon: '🤖',
      url:"https://github.com/fatinabila/fitness-assistant"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out! We'll contact you at ${email}`);
    setEmail('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">&lt;/&gt;</span>
            <span className="logo-text">DevPortfolio</span>
          </div>
          <div className="nav-links">
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
            <button className="cta-button">Get In Touch</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">👋</span>
            <span>Open to new opportunities</span>
          </div>
          <h1 className="hero-title">
            Hello, I'm Fatin<br />
            <span className="gradient-text">I'm software developer</span>
          </h1>
          <p className="hero-subtitle">
            Front-end-focused software developer with 8 years of experience
            building modern web applications. 
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="secondary-button" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="about-content">
            <p>
              I’m a curious and driven front-end developer who loves turning ideas into clean, thoughtful user experiences. I learn fast, adapt quickly, and enjoy breaking complex problems into simple, practical solutions. Whether I’m working with Angular, exploring Next.js, or experimenting with AI technologies, I’m motivated by continuous improvement and real-world impact.
              <br />  <br />
             
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge" title={skill.name}>
                {skill.iconUrl ? (
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} logo`}
                    style={{ width: 20, height: 20, objectFit: 'contain', marginRight: 10 }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <span className="skill-icon" style={{ marginRight: 10 }}>{skill.icon}</span>
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={`${project.title} screenshot`} className="project-screenshot" />
                ) : (
                  <div className="project-icon">{project.icon}</div>
                )}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Open ${project.title} in new tab`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <div className="project-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            I'm always interested in hearing about new projects and opportunities.<br />
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-buttons">
            <a
              className="contact-btn"
              href="mailto:fatinabila.azahari@gmail.com"
              aria-label="Email fatinabila.azahari@gmail.com"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.33398 3.33337H16.6673C17.584 3.33337 18.334 4.08337 18.334 5.00004V15C18.334 15.9167 17.584 16.6667 16.6673 16.6667H3.33398C2.41732 16.6667 1.66732 15.9167 1.66732 15V5.00004C1.66732 4.08337 2.41732 3.33337 3.33398 3.33337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.334 5L10.0007 10.8333L1.66732 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>
            <a
              className="contact-btn"
              href="https://github.com/fatinabila"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in new tab"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C17.1375 18.1625 20 14.4125 20 10C20 4.475 15.525 0 10 0Z" fill="currentColor"/>
              </svg>
              GitHub
            </a>
            <a
              className="contact-btn"
              href="https://www.linkedin.com/in/fatinnabila/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in new tab"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79297V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="currentColor"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 DevPortfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
