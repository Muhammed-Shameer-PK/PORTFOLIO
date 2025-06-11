import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6 text-center animate-fade-in">
          Get in Touch
        </h1>
        
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-center max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          Have a project in mind or want to discuss a job opportunity? Feel free to reach out.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="card p-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-light-accent-secondary dark:bg-dark-accent-secondary p-3 rounded-full">
                  <Mail className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">Email</h3>
                  <a href="mailto:muhammedshameer616@gmail.com" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors">
                    muhammedshameer616@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-light-accent-secondary dark:bg-dark-accent-secondary p-3 rounded-full">
                  <Phone className="w-6 h-6 text-light-accent-primary dark:text-dark-accent-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary">Phone</h3>
                  <a href="tel:+916282679146" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent-primary dark:hover:text-dark-accent-primary transition-colors">
                    +91 6282679146
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-3">Social Profiles</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Muhammed-2105" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-light-accent-secondary dark:bg-dark-accent-secondary p-3 rounded-full hover:bg-light-accent-primary hover:text-white dark:hover:bg-dark-accent-primary transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/muhammed-shameer-4591b9289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-light-accent-secondary dark:bg-dark-accent-secondary p-3 rounded-full hover:bg-light-accent-primary hover:text-white dark:hover:bg-dark-accent-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/Muhammed_s_21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-light-accent-secondary dark:bg-dark-accent-secondary p-3 rounded-full hover:bg-light-accent-primary hover:text-white dark:hover:bg-dark-accent-primary transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-light-text-primary dark:text-dark-text-primary mb-3">Location</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  Kannur, Kerala, India
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card p-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h2 className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-light-accent-secondary/50 dark:bg-dark-accent-secondary/50 border-light-accent-secondary dark:border-dark-accent-secondary/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="bg-light-accent-secondary/50 dark:bg-dark-accent-secondary/50 border-light-accent-secondary dark:border-dark-accent-secondary/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                  className="bg-light-accent-secondary/50 dark:bg-dark-accent-secondary/50 border-light-accent-secondary dark:border-dark-accent-secondary/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={5}
                  className="bg-light-accent-secondary/50 dark:bg-dark-accent-secondary/50 border-light-accent-secondary dark:border-dark-accent-secondary/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
