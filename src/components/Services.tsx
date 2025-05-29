
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Code, Zap, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Voice AI Solutions",
      description: "Advanced conversational AI that understands, responds, and acts with human-like intelligence.",
      features: ["Natural Language Processing", "Multi-language Support", "Real-time Response", "Custom Voice Models"]
    },
    {
      icon: Code,
      title: "Custom SaaS Builds",
      description: "Tailored software solutions designed to scale your business and dominate your market.",
      features: ["Cloud-native Architecture", "API Integrations", "Scalable Infrastructure", "Security First"]
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Smart workflows that eliminate human error and maximize operational efficiency.",
      features: ["Process Optimization", "Error Prevention", "24/7 Operations", "Smart Decision Making"]
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "AI-driven strategies that identify opportunities and maximize your bottom line.",
      features: ["Predictive Analytics", "Market Intelligence", "Customer Insights", "Growth Acceleration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            OUR <span className="text-katalyst-red">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just automate processes - we build intelligent systems that dominate markets and drive exponential growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:bg-black hover:text-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-katalyst-red rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-katalyst-red transition-colors">
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-katalyst-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
