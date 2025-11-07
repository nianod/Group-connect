import { Link } from "react-router-dom";
import { Github, Mail, Linkedin, Instagram, Users, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
 
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                GroupConnect
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Empowering students to find study partners, form groups, and learn smarter together. 
              Collaboration starts here.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Users size={16} />
              <span>Connect • Collaborate • Succeed</span>
            </div>
          </div>
 
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen size={18} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Features", path: "/features" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

 
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: "FAQs", href: "#" },
                { name: "Community", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "Terms of Service", href: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Github, href: "https://github.com/nianod/Group-connect", label: "GitHub" },
                { icon: Linkedin, href: "www.linkedin.com/in/arnold-wanza-b51654330", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/ar_nold._/?hl=en", label: "Instagram" },
                { icon: Mail, href: "mailto:arnoldkk422@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
            <div className="text-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Have questions?
              </p>
              <a 
                href="mailto:arnoldkk422@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                arnoldkk422@gmail.com
              </a>
            </div>
          </div>
        </div>

        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-white">GroupConnect</span>. 
                All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Crafted with passion by
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent font-semibold">
                Arnold
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;