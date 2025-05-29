
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                BUILT TO{" "}
                <span className="text-katalyst-red animate-glow">DOMINATE</span>
                <br />
                NOT JUST AUTOMATE
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Transform your business with cutting-edge AI automation solutions. 
                Decrease human efforts & errors while maximizing revenue through 
                intelligent voice AI and custom SaaS builds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-katalyst-red hover:bg-katalyst-red-dark text-white px-8 py-4 text-lg font-semibold group"
              >
                Start Dominating Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-katalyst-red text-katalyst-red hover:bg-katalyst-red hover:text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-katalyst-red">99%</div>
                <div className="text-gray-400">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-katalyst-red">3x</div>
                <div className="text-gray-400">Revenue Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-katalyst-red">24/7</div>
                <div className="text-gray-400">AI Operations</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-katalyst-red/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-700">
              <div className="space-y-4">
                <div className="h-4 bg-katalyst-red rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="h-16 bg-gradient-to-br from-katalyst-red to-katalyst-red-dark rounded"></div>
                  <div className="h-16 bg-gray-700 rounded"></div>
                  <div className="h-16 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
