
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              <span className="text-katalyst-red">KATALYST</span> AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-katalyst-red transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-katalyst-red transition-colors">
              About
            </a>
            <a href="#faq" className="text-white hover:text-katalyst-red transition-colors">
              FAQ
            </a>
            <Button className="bg-katalyst-red hover:bg-katalyst-red-dark text-white px-6 py-2">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-white hover:text-katalyst-red transition-colors">
                Services
              </a>
              <a href="#about" className="text-white hover:text-katalyst-red transition-colors">
                About
              </a>
              <a href="#faq" className="text-white hover:text-katalyst-red transition-colors">
                FAQ
              </a>
              <Button className="bg-katalyst-red hover:bg-katalyst-red-dark text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
