
import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "YSCAM-Scam Detector",
      description: "Developed YSCAM, a web-based platform leveraging machine learning to detect and prevent job and loan scams. Designed an intuitive interface for users to upload suspicious content and receive instant credibility assessments. Implemented algorithms for real-time scam detection and continuous learning. Collaborated with cybersecurity experts to enhance database accuracy and user trust.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe API","Machine Learning"],
      category: "Web Development",
      githubUrl: "https://github.com/users/Muhammed-Shameer-PK/achievements/yolo",
    },
    {
      id: 2,
      title: "AI Chatbot - (Mini Project)",
      description: "Developed a voice-activated AI assistant named FRIDAY using Python, integrating text-to-speech, speech recognition, and natural language processing capabilities. The assistant can perform tasks such as opening web applications, playing music, providing current time, and searching the web. It also offers mathematical calculations and Wikipedia summaries based on user queries. Designed with a user-friendly interface and robust error handling to ensure seamless interaction.",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      technologies: ["Python", "Natural Language Processing", "TensorFlow", "Flask"],
      category: "AI",
      githubUrl: "https://github.com/Muhammed-Shameer-PK/Python-Chatbot",
    },
    // {
    //   id: 3,
    //   title: "2D Platformer Game",
    //   description: "A 2D platformer game developed using Unity and C++, featuring multiple levels, enemies, and power-ups.",
    //   image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //   technologies: ["Unity", "C++", "Game Design", "2D Animation"],
    //   category: "Game Development",
    //   githubUrl: "https://github.com/Muhammed-2105",
    // },
    // {
    //   id: 4,
    //   title: "Task Manager App",
    //   description: "A mobile task manager app built with React Native, allowing users to create, update, and delete tasks with reminders.",
    //   image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //   technologies: ["Flutter","Firebase", "Push Notifications"],
    //   category: "Mobile Development",
    //   githubUrl: "https://github.com/Muhammed-2105",
    // }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 text-center animate-fade-in">
          My Projects
        </h1>
        
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-center max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          A collection of my work showcasing my skills in web development, AI, and more
        </p>
        
        <Tabs defaultValue="All" className="w-full animate-fade-in" style={{ animationDelay: "200ms" }}>
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="data-[state=active]:bg-light-accent-primary data-[state=active]:text-white dark:data-[state=active]:bg-dark-accent-primary dark:data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="card overflow-hidden hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-light-accent-secondary dark:bg-dark-accent-secondary text-light-text-primary dark:text-dark-text-primary text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                          </Button>
                        </a>
                      )}
                      
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full btn-primary">View Live</Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
