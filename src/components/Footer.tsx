
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-accent-secondary dark:bg-dark-accent-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold font-poppins text-light-text-primary dark:text-dark-text-primary">
              Muhammed Shameer<span className="text-light-accent-primary dark:text-dark-accent-primary">.</span>
            </Link>
            <p className="mt-2 text-light-text-secondary dark:text-dark-text-secondary text-sm max-w-md">
              Web Developer and Tech Enthusiast from Kerala, India. Specializing in MERN stack development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Muhammed-2105" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:transform hover:scale-110 transition-all"
              >
                <Github className="social-icon" />
              </a>
              <a 
                href="https://linkedin.com/in/muhammed-shameer-4591b9289" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:transform hover:scale-110 transition-all"
              >
                <Linkedin className="social-icon" />
              </a>
              <a 
                href="https://twitter.com/Muhammed_s_21" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:transform hover:scale-110 transition-all"
              >
                <Twitter className="social-icon" />
              </a>
              <a 
                href="mailto:muhammedshameer616@gmail.com" 
                aria-label="Email"
                className="hover:transform hover:scale-110 transition-all"
              >
                <Mail className="social-icon" />
              </a>
            </div>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              © {currentYear} Muhammed Shameer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
