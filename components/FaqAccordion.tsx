"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <button
            type="button"
            className="w-full flex items-center justify-between p-6 text-left font-body font-medium text-neutral-900 hover:text-primary transition-colors"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="px-6 font-body text-neutral-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
