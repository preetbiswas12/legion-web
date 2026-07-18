export interface Question {
  question: string;
  answer: string;
  answerStyle: string;
  questionStyle: string;
  fontSizeScaling?: string;
}

export const questions: Question[] = [
  {
    question: 'What is Legion CLI?',
    answer:
      'Legion CLI is a developer-first command-line tool that helps you build, test, and deploy code faster. It comes with 4,000+ skills, 650+ plugins, and 600+ integrations to supercharge your workflow.\n',
    answerStyle: 'h-45',
    questionStyle: 'mb-35 -bottom-35',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question: 'How do I install Legion CLI?',
    answer:
      'Install globally using npm: npm install -g @legioncli/cli. Works on Windows, Mac, and Linux. No additional dependencies required.\n',
    answerStyle: 'h-35',
    questionStyle: 'mb-25 -bottom-25',
    fontSizeScaling: 'text-[clamp(0.78rem,2vw,1rem)]',
  },
  {
    question: 'What languages and frameworks does it support?',
    answer:
      'Legion CLI supports JavaScript, TypeScript, Python, Go, Rust, and more. It integrates with popular frameworks like React, Next.js, Vue, Angular, Django, FastAPI, Spring Boot, and many others.',
    answerStyle: 'h-50',
    questionStyle: 'mb-38 -bottom-38',
    fontSizeScaling: 'text-[clamp(0.75rem,3vw,1rem)]',
  },
  {
    question: 'Is Legion CLI open source?',
    answer:
      'Yes! Legion CLI is fully open source and available on GitHub. You can contribute, report issues, or fork the project.',
    answerStyle: 'h-30',
    questionStyle: 'mb-22 -bottom-22',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
  {
    question: 'How do I update to the latest version?',
    answer:
      'Run npm update -g @legioncli/cli to get the latest version. Check the changelog for new features and breaking changes.',
    answerStyle: 'h-30',
    questionStyle: 'mb-22 -bottom-22',
    fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
  },
];
