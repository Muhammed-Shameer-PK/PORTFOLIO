import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 relative">
            {/* Text Content with Arrow Box */}
            <div className="flex-1 animate-fade-in z-10 bg-light-background/95 dark:bg-dark-background/95 p-8 md:p-12 
                shadow-xl backdrop-blur-sm md:translate-x-12 relative
                before:content-[''] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2
                before:border-t-[25px] before:border-b-[25px] before:border-r-[25px]
                before:border-t-transparent before:border-b-transparent
                before:border-r-light-background/95 dark:before:border-r-dark-background/95
                before:translate-x-[25px]">
              <p className="text-light-accent-primary dark:text-dark-accent-primary font-medium mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
                Muhammed Shameer
              </h1>
              <h2 className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-6">
                Web Developer & Tech Enthusiast
              </h2>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-lg">
                Passionate about building innovative solutions and exploring the latest
                advancements in technology. Specialized in MERN stack development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="btn-primary">
                    Hire Me
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="btn-outline">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Image Section with Larger Size and New Shape */}
            <div className="flex-1 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative">
                {/* Background gradient with clip-path */}
                <div className="bg-gradient-to-br from-light-accent-primary to-blue-600 dark:from-dark-accent-primary dark:to-blue-400 
                    w-[400px] h-[500px] md:w-[500px] md:h-[600px] mx-auto 
                    clip-path-polygon-[20%_0%,_100%_0%,_100%_80%,_80%_100%,_0%_100%,_0%_20%]">
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[380px] h-[480px] md:w-[480px] md:h-[580px] flex items-center justify-center overflow-hidden
                      bg-light-background dark:bg-dark-background 
                      clip-path-polygon-[20%_0%,_100%_0%,_100%_80%,_80%_100%,_0%_100%,_0%_20%]">
                    <img
                      src="src\profile.jpg"
                      alt="Muhammed Shameer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <section className="py-16 bg-light-accent-secondary dark:bg-dark-accent-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              My Expertise
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Focused on modern web technologies and creating exceptional user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* MERN Stack */}
            <div className="card p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="mb-4 text-light-accent-primary dark:text-dark-accent-primary font-bold text-2xl">MERN Stack</div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                Full-stack development with MongoDB, Express.js, React, and Node.js
              </p>
            </div>
            
            {/* Programming Languages */}
            <div className="card p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="mb-4 text-light-accent-primary dark:text-dark-accent-primary font-bold text-2xl">Languages</div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                Proficient in C++, Java, Python, and JavaScript
              </p>
            </div>
            
            {/* Problem Solving */}
            <div className="card p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="mb-4 text-light-accent-primary dark:text-dark-accent-primary font-bold text-2xl">Problem Solving</div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                Strong analytical thinking and efficient problem-solving abilities
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/skills">
              <Button variant="outline" className="btn-outline">
                View All Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* AI Chatbot */}
            <div className="card overflow-hidden hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="h-60 bg-gray-200 dark:bg-gray-700">
                {/* Project Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-light-accent-secondary to-gray-200 dark:from-dark-accent-secondary dark:to-gray-700">
                  <span className="text-light-text-secondary dark:text-dark-text-secondary font-medium">AI Chatbot</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                  AI Chatbot
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  An AI-powered chatbot built using Python that can answer user queries and perform tasks like booking appointments.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-light-accent-secondary dark:bg-dark-accent-secondary text-light-text-primary dark:text-dark-text-primary text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-light-accent-secondary dark:bg-dark-accent-secondary text-light-text-primary dark:text-dark-text-primary text-xs px-2 py-1 rounded">NLP</span>
                  <span className="bg-light-accent-secondary dark:bg-dark-accent-secondary text-light-text-primary dark:text-dark-text-primary text-xs px-2 py-1 rounded">AI</span>
                </div>
                <Link to="/projects">
                  <Button variant="outline" className="w-full btn-outline">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button className="btn-primary">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
