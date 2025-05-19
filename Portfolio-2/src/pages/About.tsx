import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Languages, Heart, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with Background Effect */}
          <div className="relative mb-12 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-light-accent-primary/10 to-blue-600/10 dark:from-dark-accent-primary/10 dark:to-blue-400/10 rounded-2xl blur-3xl transform -skew-y-3"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary text-center mb-4">
                About Me
              </h1>
              <div className="w-20 h-1 bg-light-accent-primary dark:bg-dark-accent-primary mx-auto rounded-full mb-6"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Introduction */}
              <section className="card p-8 backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-lg">
                    <User className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Who I Am
                  </h2>
                </div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
                  I'm Muhammed Shameer, a 19-year-old web developer and tech enthusiast from Kannur, Kerala, India. I'm passionate about building innovative solutions and exploring the latest advancements in technology.
                </p>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  Currently, I'm focused on deepening my knowledge in AI and future technologies to contribute to innovative solutions that can shape the future. My goal is to create impactful web applications that solve real-world problems.
                </p>
              </section>

              {/* Education */}
              <section className="card p-8 backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Education
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-light-accent-primary before:to-transparent dark:before:from-dark-accent-primary">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-light-accent-primary dark:bg-dark-accent-primary rounded-full transform -translate-x-[5px]"></div>
                    <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">
                      BTech in Computer Science and Engineering
                    </h3>
                    <p className="text-light-accent-primary dark:text-dark-accent-primary font-medium mt-1">
                      Specializing in Artificial Intelligence and Future Technologies
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                      Yenepoya School of Engineering and Technology | Present
                    </p>
                  </div>
                  
                  <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-light-accent-primary before:to-transparent dark:before:from-dark-accent-primary">
                    <div className="absolute left-0 top-1.5 w-3 h-3 bg-light-accent-primary dark:bg-dark-accent-primary rounded-full transform -translate-x-[5px]"></div>
                    <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">
                      Pre-University (PU)
                    </h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                      St. Michael's AIHSS
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Languages */}
              <section className="card p-8 backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-lg">
                    <Languages className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Languages
                  </h2>
                </div>
                <div className="space-y-3">
                  {["English", "Hindi", "Malayalam", "Tamil", "Urdu"].map((lang, index) => (
                    <div 
                      key={lang}
                      className="p-3 bg-gradient-to-r from-light-accent-secondary/30 to-light-accent-secondary/10 
                               dark:from-dark-accent-secondary/30 dark:to-dark-accent-secondary/10 
                               rounded-xl backdrop-blur-sm border border-light-accent-secondary/20 
                               dark:border-dark-accent-secondary/20 transition-transform hover:scale-105"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <span className="text-light-text-primary dark:text-dark-text-primary font-medium">{lang}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interests */}
              <section className="card p-8 backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-light-accent-primary/10 dark:bg-dark-accent-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                    Interests
                  </h2>
                </div>
                <ul className="space-y-3">
                  {[
                    "Building innovative web applications",
                    "Exploring AI and machine learning",
                    "Future technologies research",
                    "Algorithmic problem-solving",
                    "Real-world impact projects"
                  ].map((interest, index) => (
                    <li 
                      key={interest}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-light-accent-secondary/30 to-light-accent-secondary/10 
                               dark:from-dark-accent-secondary/30 dark:to-dark-accent-secondary/10 
                               rounded-xl backdrop-blur-sm border border-light-accent-secondary/20 
                               dark:border-dark-accent-secondary/20"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-light-accent-primary dark:bg-dark-accent-primary rounded-full"></div>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">{interest}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Link to="/skills">
              <Button className="btn-primary transform hover:scale-105 transition-transform">
                View My Skills
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                className="btn-outline backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 
                         border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 
                         transform hover:scale-105 transition-transform"
              >
                See My Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
