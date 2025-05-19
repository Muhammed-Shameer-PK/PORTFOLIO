
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-light-accent-primary dark:text-dark-accent-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
          Page Not Found
        </h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="btn-primary">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
