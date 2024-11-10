// app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I&apos;m Sharjeel Ahmed  This My Portfolio</h1>
        <p>I build modern web applications with Typescript, HTML and CSS.</p>
        <a href="#projects" className="cta-button">View My Projects</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, web 3.0, & Metaverse. Passionte about technology and constantly learning new skills to stay up-to-date with the latest innovations.
        </p>
        <img src="powder-blue.png" alt="Profile" className="profile-img" />
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A static resume builder allows users to create a professional resume using predefined templates and fixed formatting, with no dynamic or interactive customization options.</p>
            <a href="https://staticresumebuilderbysharjeel.vercel.app/" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A dynamic resume builder offers real-time customization, allowing users to tailor content, layout, and design to create a personalized and interactive resume.</p>
            <a href="https://dynamicresumebuilderbysharjeel.vercel.app/" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>An HTML and CSS simple website is a basic web page built using HTML for structure and CSS for styling, creating a static, visually appealing online presence.</p>
            <a href="https://html-css-eight-sooty.vercel.app/" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
