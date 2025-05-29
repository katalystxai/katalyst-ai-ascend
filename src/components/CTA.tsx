
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-katalyst-red to-katalyst-red-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            READY TO START
            <br />
            <span className="text-black">DOMINATING</span>?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stop settling for automation. Start dominating with AI solutions that transform your business into an unstoppable force.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold group"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-katalyst-red px-8 py-4 text-lg"
            >
              View Case Studies
            </Button>
          </div>

          <div className="pt-8 text-white/80">
            <p className="text-sm">
              Join 500+ businesses that chose to dominate instead of just automate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
