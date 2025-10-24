import { Link } from "react-router-dom";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 dark:text-gray-200 dark:bg-gray-900 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-2xl font-bold mb-3">GroupConnect</h2>
          <p className="text-sm leading-relaxed">
            Empowering students to find study partners, form groups, and
            learn smarter together. Collaboration starts here.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/features" className="hover:text-blue-400">Features</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Community</a></li>
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-4 mb-3">
            <a href="#" className="hover:text-blue-400"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Mail size={20} /></a>
          </div>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:support@groupconnect.com" className="hover:text-blue-400">
              arnoldkk422@gmail.com
            </a>
          </p>
        </div>
      </div>

       
      <div className="border-t border-gray-700 dark:border-gray-300 mt-10 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">GroupConnect</span>.  
          All rights reserved.
        </p>
        <i className="text-gray-500">Powered by Arnold</i>
      </div>
    </footer>
  );
};

export default Footer;
