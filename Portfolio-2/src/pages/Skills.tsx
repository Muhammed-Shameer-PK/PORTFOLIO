import { Progress } from "@/components/ui/progress";
import { Code2, Globe, Wrench, Brain, Layers, ChevronRight, CheckCircle2 } from "lucide-react";
import { Icon } from '@iconify/react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

const Skills = () => {
  const categoryIcons = {
    "Web Development": <Globe className="w-6 h-6" />,
    "Programming Languages": <Code2 className="w-6 h-6" />,
    "Tools & Technologies": <Wrench className="w-6 h-6" />,
    "Soft Skills": <Brain className="w-6 h-6" />
  };

  const getSkillLevel = (level: number): string => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Proficient";
  };

  const getSkillColor = (level: number): string => {
    if (level >= 90) return "text-green-500 dark:text-green-400";
    if (level >= 80) return "text-blue-500 dark:text-blue-400";
    if (level >= 70) return "text-purple-500 dark:text-purple-400";
    return "text-orange-500 dark:text-orange-400";
  };

  // Skills data with categories and proficiency levels
  const skills: Skill[] = [
    // Web Development
    { name: "HTML & CSS", level: 90, category: "Web Development" },
    { name: "JavaScript", level: 70, category: "Web Development" },
    { name: "React.js", level: 85, category: "Web Development" },
    { name: "Node.js", level: 80, category: "Web Development" },
    { name: "Express.js", level: 80, category: "Web Development" },
    { name: "MongoDB", level: 75, category: "Web Development" },
    { name: "Responsive Design", level: 90, category: "Web Development" },
    
    // Programming Languages
    { name: "JavaScript", level: 85, category: "Programming Languages" },
    { name: "Python", level: 70, category: "Programming Languages" },
    { name: "C++", level: 65, category: "Programming Languages" },
    { name: "Java", level: 60, category: "Programming Languages" },
    
    // Tools & Technologies
    { name: "Git & GitHub", level: 85, category: "Tools & Technologies" },
    { name: "VS Code", level: 95, category: "Tools & Technologies" },
    { name: "Figma", level: 60, category: "Tools & Technologies" },
    { name: "REST API", level: 80, category: "Tools & Technologies" },
    { name: "npm/yarn", level: 85, category: "Tools & Technologies" },
    
    // Soft Skills
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Communication", level: 85, category: "Soft Skills" },
    { name: "Team Collaboration", level: 80, category: "Soft Skills" },
    { name: "Adaptability", level: 90, category: "Soft Skills" },
    { name: "Time Management", level: 75, category: "Soft Skills" },
  ];

  const techStack: TechStack[] = [
    { name: "React", icon: "logos:react", color: "#61DAFB" },
    { name: "Node.js", icon: "logos:nodejs", color: "#339933" },
    { name: "Express", icon: "simple-icons:express", color: "#000000" },
    { name: "MongoDB", icon: "logos:mongodb", color: "#47A248" },
    { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
    { name: "HTML5", icon: "logos:html-5", color: "#E34F26" },
    { name: "CSS3", icon: "logos:css-3", color: "#1572B6" },
    { name: "Git", icon: "logos:git", color: "#F05032" },
    { name: "Python", icon: "logos:python", color: "#3776AB" },
    { name: "Postman", icon: "logos:postman", color: "#FF6C37" },
    { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
    { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
    { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
  ];

  // Group skills by category
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Geometric Background */}
        <div className="relative mb-16 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-light-accent-primary/10 via-blue-600/10 to-purple-600/10 
                       dark:from-dark-accent-primary/10 dark:via-blue-400/10 dark:to-purple-400/10 rounded-3xl blur-3xl transform -skew-y-3"></div>
          <div className="relative text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              Skills & Expertise
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-light-accent-primary via-blue-600 to-purple-600 
                         dark:from-dark-accent-primary dark:via-blue-400 dark:to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical abilities and professional competencies,
              showcasing expertise across various domains of web development and technology.
            </p>
          </div>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category} 
              className="card backdrop-blur-sm bg-light-background/50 dark:bg-dark-background/50 
                       border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 
                       rounded-2xl p-8 shadow-xl animate-fade-in hover:shadow-2xl transition-all duration-300" 
              style={{ animationDelay: `${(categoryIndex + 2) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-light-accent-primary/20 via-blue-600/20 to-purple-600/20 
                            dark:from-dark-accent-primary/20 dark:via-blue-400/20 dark:to-purple-400/20 rounded-xl">
                  <div className="text-light-accent-primary dark:text-dark-accent-primary">
                    {categoryIcons[category] || <Layers className="w-6 h-6" />}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                  {category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={`${skill.name}-${index}`} 
                      className="group p-4 rounded-xl border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 
                               hover:border-light-accent-primary dark:hover:border-dark-accent-primary
                               bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent
                               hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${getSkillColor(skill.level)}`} />
                        <div>
                          <div className="text-light-text-primary dark:text-dark-text-primary font-medium">
                            {skill.name}
                          </div>
                          <div className={`text-sm ${getSkillColor(skill.level)} font-medium mt-1`}>
                            {getSkillLevel(skill.level)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technologies & Tools Section */}
        <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-light-accent-primary via-blue-600 to-purple-600 
                       dark:from-dark-accent-primary dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Technologies & Frameworks
          </h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-center mb-8 max-w-2xl mx-auto">
            Core technologies and tools I work with to build modern web applications
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${700 + index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-light-accent-primary/20 via-blue-600/20 to-purple-600/20 
                              dark:from-dark-accent-primary/20 dark:via-blue-400/20 dark:to-purple-400/20 
                              transform rotate-6 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-light-background/50 dark:bg-dark-background/50 backdrop-blur-sm 
                            border border-light-accent-secondary/20 dark:border-dark-accent-secondary/20 
                            rounded-xl p-6 flex flex-col items-center justify-center aspect-square gap-3
                            hover:border-light-accent-primary dark:hover:border-dark-accent-primary 
                            transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Icon 
                    icon={tech.icon}
                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-light-text-primary dark:text-dark-text-primary font-medium text-center text-sm">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
