
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-katalyst-red">KATALYST</span> AI
            </div>
            <p className="text-gray-400">
              Built to dominate, not just automate. Transforming businesses with intelligent AI solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Voice AI Solutions</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Custom SaaS</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-katalyst-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-katalyst-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>hello@katalystai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Katalyst AI. All rights reserved. Built to dominate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
