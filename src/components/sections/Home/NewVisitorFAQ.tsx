import { FAQData } from "@/constants/home";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0 px-4">
      <button
        className="flex items-center justify-between w-full py-4 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
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
            {FAQData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewVisitorFAQ;
