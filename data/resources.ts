import type { Department } from "@/lib/learningPathLogic";

export type Resource = {
  name: string;
  type: "Free external" | "PracticeLink internal";
  suggestedUse: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  href?: string;
};

export const practiceLinkResources: Resource[] = [
  {
    name: "Approved AI Tools List",
    type: "PracticeLink internal",
    suggestedUse: "Check whether a tool is approved before starting a workflow.",
    difficulty: "Beginner"
  },
  {
    name: "AI Data Sensitivity Guide",
    type: "PracticeLink internal",
    suggestedUse: "Classify information before entering it into any AI system.",
    difficulty: "Beginner"
  },
  {
    name: "Human Review Checklist",
    type: "PracticeLink internal",
    suggestedUse: "Confirm factual accuracy, tone, and policy alignment before use.",
    difficulty: "Beginner"
  },
  {
    name: "Department Prompt Library",
    type: "PracticeLink internal",
    suggestedUse: "Start with approved prompt patterns tailored to daily work.",
    difficulty: "Intermediate"
  },
  {
    name: "AI Champion Office Hours",
    type: "PracticeLink internal",
    suggestedUse: "Escalate edge cases and learn from department champions.",
    difficulty: "Intermediate"
  },
  {
    name: "PracticeLink AI Adoption Hub GitHub",
    type: "PracticeLink internal",
    suggestedUse: "Review the Next.js demo portal source code and deployment-ready project structure.",
    difficulty: "Intermediate",
    href: "https://github.com/sriram369/practicelink-ai-adoption-hub"
  },
  {
    name: "ARIA Governance Assistant GitHub",
    type: "PracticeLink internal",
    suggestedUse: "Review the Slack governance assistant implementation and project repository.",
    difficulty: "Intermediate",
    href: "https://github.com/fahda2/artificial-routing-intelligence-agent"
  }
];

const generalResources: Resource[] = [
  {
    name: "Elements of AI",
    type: "Free external",
    suggestedUse: "Build accessible AI literacy and shared vocabulary.",
    difficulty: "Beginner",
    href: "https://www.elementsofai.com/"
  },
  {
    name: "Microsoft AI for Beginners",
    type: "Free external",
    suggestedUse: "Learn core AI concepts through short structured lessons.",
    difficulty: "Beginner",
    href: "https://github.com/microsoft/AI-For-Beginners"
  },
  {
    name: "Google Machine Learning Crash Course",
    type: "Free external",
    suggestedUse: "Understand practical machine learning concepts and limits.",
    difficulty: "Intermediate",
    href: "https://developers.google.com/machine-learning/crash-course"
  },
  {
    name: "Awesome ChatGPT Prompts / prompts.chat",
    type: "Free external",
    suggestedUse: "Practice prompt patterns, then adapt them to PracticeLink rules.",
    difficulty: "Beginner",
    href: "https://prompts.chat/"
  }
];

const departmentResources: Partial<Record<Department, Resource[]>> = {
  "Data / Analytics": [
    {
      name: "Google Machine Learning Crash Course",
      type: "Free external",
      suggestedUse: "Strengthen model literacy for analytics conversations.",
      difficulty: "Intermediate",
      href: "https://developers.google.com/machine-learning/crash-course"
    },
    {
      name: "Kaggle Learn: Intro to Machine Learning",
      type: "Free external",
      suggestedUse: "Practice basic model thinking with hands-on exercises.",
      difficulty: "Intermediate",
      href: "https://www.kaggle.com/learn/intro-to-machine-learning"
    },
    {
      name: "Kaggle Learn: Data Visualization",
      type: "Free external",
      suggestedUse: "Improve chart interpretation and insight communication.",
      difficulty: "Beginner",
      href: "https://www.kaggle.com/learn/data-visualization"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Review the foundations behind common AI workflows.",
      difficulty: "Beginner",
      href: "https://github.com/microsoft/AI-For-Beginners"
    }
  ],
  "IT / Engineering": [
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Create a shared baseline for AI architecture discussions.",
      difficulty: "Beginner",
      href: "https://github.com/microsoft/AI-For-Beginners"
    },
    {
      name: "LLMs-from-scratch",
      type: "Free external",
      suggestedUse: "Deepen technical understanding of language model internals.",
      difficulty: "Advanced",
      href: "https://github.com/rasbt/LLMs-from-scratch"
    },
    {
      name: "Flowise",
      type: "Free external",
      suggestedUse: "Prototype governed AI workflows and evaluation paths.",
      difficulty: "Intermediate",
      href: "https://github.com/FlowiseAI/Flowise"
    },
    {
      name: "OpenHands",
      type: "Free external",
      suggestedUse: "Explore agentic software workflows with governance review.",
      difficulty: "Advanced",
      href: "https://github.com/All-Hands-AI/OpenHands"
    },
    {
      name: "AI-For-Beginners GitHub curriculum",
      type: "Free external",
      suggestedUse: "Use structured lessons for internal champion enablement.",
      difficulty: "Intermediate",
      href: "https://github.com/microsoft/AI-For-Beginners"
    }
  ],
  Marketing: [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Study prompt formats for campaign drafting and variation.",
      difficulty: "Beginner",
      href: "https://prompts.chat/"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build foundational confidence before workflow practice.",
      difficulty: "Beginner",
      href: "https://www.elementsofai.com/"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Connect AI basics to practical marketing workflows.",
      difficulty: "Beginner",
      href: "https://github.com/microsoft/AI-For-Beginners"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Explore responsible AI examples and learning modules.",
      difficulty: "Beginner",
      href: "https://ai.google/education/"
    }
  ],
  "Sales / Client Relations": [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Practice outreach, recap, and follow-up prompt structures.",
      difficulty: "Beginner",
      href: "https://prompts.chat/"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build AI literacy for client-facing confidence.",
      difficulty: "Beginner",
      href: "https://www.elementsofai.com/"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Learn practical AI concepts before CRM workflow practice.",
      difficulty: "Beginner",
      href: "https://github.com/microsoft/AI-For-Beginners"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Review responsible-use examples before client workflows.",
      difficulty: "Beginner",
      href: "https://ai.google/education/"
    }
  ],
  "HR / Admin": [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Adapt prompt examples for summaries and onboarding drafts.",
      difficulty: "Beginner",
      href: "https://prompts.chat/"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build a shared foundation for safe everyday AI use.",
      difficulty: "Beginner",
      href: "https://www.elementsofai.com/"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Learn core AI vocabulary for policy and admin workflows.",
      difficulty: "Beginner",
      href: "https://github.com/microsoft/AI-For-Beginners"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Review responsible-use concepts for workplace support tasks.",
      difficulty: "Beginner",
      href: "https://ai.google/education/"
    }
  ]
};

export function getExternalResources(department: Department) {
  return departmentResources[department] ?? generalResources;
}
