import type { Department } from "@/lib/learningPathLogic";

export type Resource = {
  name: string;
  type: "Free external" | "PracticeLink internal";
  suggestedUse: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
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
  }
];

const generalResources: Resource[] = [
  {
    name: "Elements of AI",
    type: "Free external",
    suggestedUse: "Build accessible AI literacy and shared vocabulary.",
    difficulty: "Beginner"
  },
  {
    name: "Microsoft AI for Beginners",
    type: "Free external",
    suggestedUse: "Learn core AI concepts through short structured lessons.",
    difficulty: "Beginner"
  },
  {
    name: "Google Machine Learning Crash Course",
    type: "Free external",
    suggestedUse: "Understand practical machine learning concepts and limits.",
    difficulty: "Intermediate"
  },
  {
    name: "Awesome ChatGPT Prompts / prompts.chat",
    type: "Free external",
    suggestedUse: "Practice prompt patterns, then adapt them to PracticeLink rules.",
    difficulty: "Beginner"
  }
];

const departmentResources: Partial<Record<Department, Resource[]>> = {
  "Data / Analytics": [
    {
      name: "Google Machine Learning Crash Course",
      type: "Free external",
      suggestedUse: "Strengthen model literacy for analytics conversations.",
      difficulty: "Intermediate"
    },
    {
      name: "Kaggle Learn: Intro to Machine Learning",
      type: "Free external",
      suggestedUse: "Practice basic model thinking with hands-on exercises.",
      difficulty: "Intermediate"
    },
    {
      name: "Kaggle Learn: Data Visualization",
      type: "Free external",
      suggestedUse: "Improve chart interpretation and insight communication.",
      difficulty: "Beginner"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Review the foundations behind common AI workflows.",
      difficulty: "Beginner"
    }
  ],
  "IT / Engineering": [
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Create a shared baseline for AI architecture discussions.",
      difficulty: "Beginner"
    },
    {
      name: "LLMs-from-scratch",
      type: "Free external",
      suggestedUse: "Deepen technical understanding of language model internals.",
      difficulty: "Advanced"
    },
    {
      name: "Flowise",
      type: "Free external",
      suggestedUse: "Prototype governed AI workflows and evaluation paths.",
      difficulty: "Intermediate"
    },
    {
      name: "OpenHands",
      type: "Free external",
      suggestedUse: "Explore agentic software workflows with governance review.",
      difficulty: "Advanced"
    },
    {
      name: "AI-For-Beginners GitHub curriculum",
      type: "Free external",
      suggestedUse: "Use structured lessons for internal champion enablement.",
      difficulty: "Intermediate"
    }
  ],
  Marketing: [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Study prompt formats for campaign drafting and variation.",
      difficulty: "Beginner"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build foundational confidence before workflow practice.",
      difficulty: "Beginner"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Connect AI basics to practical marketing workflows.",
      difficulty: "Beginner"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Explore responsible AI examples and learning modules.",
      difficulty: "Beginner"
    }
  ],
  "Sales / Client Relations": [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Practice outreach, recap, and follow-up prompt structures.",
      difficulty: "Beginner"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build AI literacy for client-facing confidence.",
      difficulty: "Beginner"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Learn practical AI concepts before CRM workflow practice.",
      difficulty: "Beginner"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Review responsible-use examples before client workflows.",
      difficulty: "Beginner"
    }
  ],
  "HR / Admin": [
    {
      name: "prompts.chat / Awesome ChatGPT Prompts",
      type: "Free external",
      suggestedUse: "Adapt prompt examples for summaries and onboarding drafts.",
      difficulty: "Beginner"
    },
    {
      name: "Elements of AI",
      type: "Free external",
      suggestedUse: "Build a shared foundation for safe everyday AI use.",
      difficulty: "Beginner"
    },
    {
      name: "Microsoft AI for Beginners",
      type: "Free external",
      suggestedUse: "Learn core AI vocabulary for policy and admin workflows.",
      difficulty: "Beginner"
    },
    {
      name: "Google AI Education",
      type: "Free external",
      suggestedUse: "Review responsible-use concepts for workplace support tasks.",
      difficulty: "Beginner"
    }
  ]
};

export function getExternalResources(department: Department) {
  return departmentResources[department] ?? generalResources;
}
