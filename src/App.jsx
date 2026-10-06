import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">SAGAR AVUDARI</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="hero-label"></p>

          <h1>
            Hi, I'm <span>Sagar Avudari</span>
          </h1>

          <h2>
            Java Backend Developer focused on building reliable, scalable applications and API-driven solutions
          </h2>

          <p className="hero-description">
            Java Developer with hands-on experience in backend development using Java and Spring Boot, with knowledge of Spring Security and Spring AI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="/Sagar_Avudari.pdf" className="btn secondary-btn" download>
              Download Resume
            </a>
            
          </div>

        </div>
        <div className="hero-image">
         <img
  src="/Images/profile_pic.jpeg"
  alt="Sagar Avudari"
/>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">

          <p className="section-label">ABOUT</p>

          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <p>
              I am a Java Developer with hands-on experience in developing
              backend applications and web-based solutions.
            </p>

            <p>
              My experience includes REST API development, database
              integration, debugging, troubleshooting and working with
              backend services.
            </p>

            <p>
              I enjoy understanding how systems work, identifying problems
              and building reliable solutions using modern backend
              technologies.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section gray-section">
        <div className="container">

          <p className="section-label">TECHNOLOGIES</p>

          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Programming</h3>
              <p>Java, JavaScript, C</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>
                Spring Boot, Spring Data JPA, Hibernate,
                JDBC, Servlets, JSP
              </p>
            </div>

            <div className="skill-card">
              <h3>APIs</h3>
              <p>REST APIs, Request/Response Handling, API Testing</p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>MySQL, Database Integration</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Maven, Postman, Linux</p>
            </div>

            <div className="skill-card">
              <h3>DevOps</h3>
              <p>Docker, CI/CD, Argo CD</p>
            </div>

          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">

          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">Professional Experience</h2>

          <div className="experience-card">

            <div className="experience-header">
              <div>
                <h3>M2P Fintech</h3>
                <p className="role">Solution Engineering Intern</p>
              </div>

              <div className="experience-date">
                Mar 2025 – Feb 2026
                <br />
                Hyderabad
              </div>
            </div>

            <ul>
              <li>
                Supported backend services in a microservices-based
                Cash Management System.
              </li>

              <li>
                Diagnosed and resolved API failures, transaction issues
                and system errors.
              </li>

              <li>
                Analyzed logs to identify root causes and improve
                system reliability.
              </li>

              <li>
                Worked with REST API request-response handling
                and debugging.
              </li>

              <li>
                Assisted with deployment using Docker and CI/CD
                pipelines with Argo CD.
              </li>

              <li>
                Monitored system behavior and supported smooth
                transaction processing.
              </li>
            </ul>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section gray-section">
        <div className="container">

          <p className="section-label">WORK</p>

          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">

            <div className="project-card">

              <div className="project-number">01</div>

              <h3>Hospital Management System</h3>

              <p>
                Backend application developed using Spring Boot and JPA
                with REST APIs for handling application request and
                response flows.
              </p>

              <div className="tech-list">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>JPA</span>
                <span>REST API</span>
                <span>Postman</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              </div>

            </div>

            <div className="project-card">

              <div className="project-number">02</div>

              <h3>API Integration Project</h3>

              <p>
                Application focused on REST API integration, request and
                response handling, validation and troubleshooting.
              </p>

              <div className="tech-list">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>Postman</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="container">

          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">Education</h2>

          <div className="education-list">

            <div className="education-item">
              <div>
                <h3>Bachelor of Technology</h3>
                <p>
                  Computer Science and Engineering
                </p>
                <span>
                  Avn Institute of Engineering and Technology
                </span>
              </div>

              <strong>2021 – 2024</strong>
            </div>

            <div className="education-item">
              <div>
                <h3>Diploma</h3>
                <p>
                  Computer Science & Engineering
                </p>
                <span>
                  Jyothishmathi Institute of Technology and Science
                </span>
              </div>

              <strong>2018 – 2021</strong>
            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container contact-container">

          <p className="section-label">CONTACT</p>

          <h2 className="section-title">
            Let's connect.
          </h2>

          <p>
            I'm open to software development opportunities, technical discussions and professional connections.
          </p>
          

          <div className="contact-links">

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sagaravudari48@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Email
</a>

            <a
              href="https://www.linkedin.com/in/sagar-avudari-540796254/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SagarAvudari"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Sagar Avudari. Built with React.
        </p>
      </footer>
    </div>
  );
}

export default App;