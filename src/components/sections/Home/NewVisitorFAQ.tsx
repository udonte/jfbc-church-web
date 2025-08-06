import ActionButton from "@/components/ui/ActionButton";
import { useState } from "react";
import {
  FiChevronDown,
  FiMapPin,
  FiClock,
  FiUser,
  FiSmile,
} from "react-icons/fi";

const FAQItem = ({
  question,
  answer,
  icon: Icon,
}: {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0 px-4">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <Icon className="mr-3 text-primary" />
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        </div>
        <FiChevronDown
          className={`transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 pl-9">{answer}</p>
      </div>
    </div>
  );
};

const NewVisitorFAQ = () => {
  const faqs = [
    {
      question: "What should I wear?",
      answer:
        "Come as you are! Most people dress casually, but you'll see everything from jeans to traditional attire. We care more about you than what you wear.",
      icon: FiUser,
    },
    {
      question: "How long are services?",
      answer:
        "Our Sunday services typically last about 180 minutes. Midweek services are usually 90 minutes. You're welcome to stay afterward for fellowship.",
      icon: FiClock,
    },
    {
      question: "Where do I park?",
      answer:
        "We have reserved parking for car owners right near the main entrance. Look for the signs or ask one of our ushers for assistance.",
      icon: FiMapPin,
    },
    {
      question: "What about my kids?",
      answer:
        "We have excellent children's programs for all ages! Our secure check-in system ensures your kids are safe while having fun and learning about Jesus.",
      icon: FiSmile,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              New Here? We've Got You Covered
            </h2>
            <p className="text-lg text-gray-600">
              Answers to common questions for first-time visitors
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
              />
            ))}
          </div>

          {/* Plan Your Visit CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to experience our church family in person?
            </p>
            <ActionButton page="/contact" variant="primary" size="lg">
              Plan a Visit
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewVisitorFAQ;
