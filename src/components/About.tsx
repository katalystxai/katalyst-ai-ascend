
import { Button } from "@/components/ui/button";
import { Shield, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                WHY <span className="text-katalyst-red">KATALYST AI</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not just another AI company. We're the catalyst that transforms ordinary businesses into market dominators through revolutionary automation solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-katalyst-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Precision Targeting</h3>
                  <p className="text-gray-400">Our AI doesn't just work - it works with surgical precision, targeting inefficiencies and eliminating them completely.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-katalyst-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">While competitors take months, we deliver market-dominating solutions in weeks, not quarters.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-katalyst-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Battle-Tested</h3>
                  <p className="text-gray-400">Our solutions are forged in the crucible of real-world challenges, proven to dominate in any market condition.</p>
                </div>
              </div>
            </div>

            <Button className="bg-katalyst-red hover:bg-katalyst-red-dark text-white px-8 py-4 text-lg font-semibold">
              Start Your Domination
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-katalyst-red/10 rounded-xl border border-katalyst-red/30">
                  <div className="text-3xl font-black text-katalyst-red mb-2">500+</div>
                  <div className="text-gray-300">Businesses Dominated</div>
                </div>
                <div className="text-center p-6 bg-katalyst-red/10 rounded-xl border border-katalyst-red/30">
                  <div className="text-3xl font-black text-katalyst-red mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center p-6 bg-katalyst-red/10 rounded-xl border border-katalyst-red/30">
                  <div className="text-3xl font-black text-katalyst-red mb-2">24/7</div>
                  <div className="text-gray-300">AI Operations</div>
                </div>
                <div className="text-center p-6 bg-katalyst-red/10 rounded-xl border border-katalyst-red/30">
                  <div className="text-3xl font-black text-katalyst-red mb-2">∞</div>
                  <div className="text-gray-300">Growth Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
