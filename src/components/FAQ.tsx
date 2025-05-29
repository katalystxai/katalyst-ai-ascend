
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can Katalyst AI transform my business?",
      answer: "Unlike traditional automation that takes months, our AI solutions can be deployed and start showing results within 2-4 weeks. We're built for speed and immediate market dominance."
    },
    {
      question: "What makes your voice AI different from competitors?",
      answer: "Our voice AI doesn't just respond - it understands context, learns from every interaction, and makes intelligent decisions. It's like having a genius-level employee that never sleeps, never makes mistakes, and gets smarter every day."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our solutions are designed to seamlessly integrate with any existing infrastructure. We don't replace your systems - we supercharge them with AI that makes everything work better, faster, and smarter."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Our clients typically see 200-400% ROI within the first year. This comes from reduced operational costs, eliminated human errors, 24/7 operations, and AI-driven revenue optimization strategies."
    },
    {
      question: "Is my data secure with Katalyst AI?",
      answer: "Security isn't just a feature - it's our foundation. We use military-grade encryption, zero-trust architecture, and comply with all major security standards. Your data is more secure with us than in most enterprise environments."
    },
    {
      question: "Do you offer ongoing support and optimization?",
      answer: "We don't just build and leave. Our AI solutions continuously learn and improve. Plus, our team provides 24/7 support and regular optimization to ensure your competitive advantage keeps growing."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            FREQUENTLY ASKED <span className="text-katalyst-red">QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about dominating your market with AI automation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-katalyst-red"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-katalyst-red">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
