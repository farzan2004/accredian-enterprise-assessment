export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "About the Course",
    faqs: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
    ],
  },
  {
    title: "About the Delivery",
    faqs: [
      {
        question: "Can the courses be customized for specific industries or teams?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
      {
        question: "Who are the instructors for these programs?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
      {
        question: "What formats are the programs delivered in?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
    ],
  },
  {
    title: "Miscellaneous",
    faqs: [
      {
        question: "How do we get started with Accredian?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
      {
        question: "What is the ideal team size of corporate training?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dummy answer for now.",
      },
    ],
  },
];