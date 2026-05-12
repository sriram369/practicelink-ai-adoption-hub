export type Department =
  | "Physician / Provider Services"
  | "Marketing"
  | "Sales / Client Relations"
  | "Data / Analytics"
  | "HR / Admin"
  | "Finance"
  | "IT / Engineering";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export type Task =
  | "Candidate research"
  | "Email drafting"
  | "Campaign drafting"
  | "CRM follow-up"
  | "Meeting summary"
  | "Data analysis"
  | "Policy / onboarding support"
  | "Tool evaluation"
  | "Content classification";

export type DataSensitivity =
  | "Public / general"
  | "Internal company data"
  | "Employer / client data"
  | "Physician profile data"
  | "Financial / contract data"
  | "Highly sensitive / restricted data";

export type RiskLevel = "Low Risk" | "Medium Risk" | "High Risk";

export type LearningPathInput = {
  department: Department;
  skillLevel: SkillLevel;
  task: Task;
  dataSensitivity: DataSensitivity;
};

export type LearningPathOutput = {
  recommendedTier: string;
  riskLevel: RiskLevel;
  departmentPath: string[];
  toolGuidance: string;
  thirtyDayGoal: string;
  samplePrompt: string;
  governanceReviewRequired: boolean;
};

export const departments: Department[] = [
  "Physician / Provider Services",
  "Marketing",
  "Sales / Client Relations",
  "Data / Analytics",
  "HR / Admin",
  "Finance",
  "IT / Engineering"
];

export const skillLevels: SkillLevel[] = ["Beginner", "Intermediate", "Advanced"];

export const tasks: Task[] = [
  "Candidate research",
  "Email drafting",
  "Campaign drafting",
  "CRM follow-up",
  "Meeting summary",
  "Data analysis",
  "Policy / onboarding support",
  "Tool evaluation",
  "Content classification"
];

export const dataSensitivities: DataSensitivity[] = [
  "Public / general",
  "Internal company data",
  "Employer / client data",
  "Physician profile data",
  "Financial / contract data",
  "Highly sensitive / restricted data"
];

export const defaultLearningPathInput: LearningPathInput = {
  department: "Physician / Provider Services",
  skillLevel: "Beginner",
  task: "Candidate research",
  dataSensitivity: "Physician profile data"
};

const departmentPaths: Record<Department, string[]> = {
  "Physician / Provider Services": [
    "AI Foundations",
    "Data Safety for Physician Profile Data",
    "Candidate Research Workflow",
    "Prompt Practice: Profile Summaries",
    "AI Champion Review"
  ],
  Marketing: [
    "AI Foundations",
    "Campaign Drafting Workflow",
    "Brand Voice and Review Rules",
    "Content Variation Practice",
    "Agentforce Readiness"
  ],
  "Sales / Client Relations": [
    "AI Foundations",
    "CRM and Outreach Support",
    "Follow-up Drafting",
    "Meeting Note Summaries",
    "Agentforce Workflow Practice"
  ],
  "Data / Analytics": [
    "AI Foundations",
    "Safe Data Handling",
    "Question-to-Insight Workflow",
    "Dashboard Interpretation",
    "Insight Summary Review"
  ],
  "HR / Admin": [
    "AI Foundations",
    "Meeting Summary Workflow",
    "Email Drafting Practice",
    "Policy Summary Support",
    "Onboarding Content Review"
  ],
  Finance: [
    "AI Foundations",
    "Financial Data Safety",
    "Contract and Report Summaries",
    "Human Review Rules",
    "Governance Escalation"
  ],
  "IT / Engineering": [
    "Advanced AI Foundations",
    "Secure Tool Evaluation",
    "Prompt and Automation Design",
    "AI Governance Support",
    "AI Champion Enablement"
  ]
};

const thirtyDayGoals: Record<Department, string> = {
  "Physician / Provider Services":
    "Learn how to summarize candidate profiles, prepare recruiter notes, and identify job-fit signals using approved AI workflows.",
  Marketing:
    "Create safe campaign drafts and content variations while following brand and governance review rules.",
  "Sales / Client Relations":
    "Use AI to draft outreach, summarize meetings, and prepare CRM follow-ups without exposing sensitive client data.",
  "Data / Analytics":
    "Use AI to turn business questions into insights while maintaining safe data handling and human review.",
  "HR / Admin":
    "Use AI for meeting summaries, email drafting, and onboarding support while protecting internal information.",
  Finance:
    "Use AI only for approved summary and analysis workflows with strict review and escalation.",
  "IT / Engineering":
    "Support safe AI adoption by evaluating tools, designing workflows, and helping departments follow governance rules."
};

const samplePrompts: Record<Department, string> = {
  "Physician / Provider Services":
    "Summarize this candidate profile into recruiter prep notes using only the provided details. Do not infer missing credentials, personal traits, or protected information.",
  Marketing:
    "Draft three campaign message variations for this audience. Keep the tone professional and mark any claims that require human review.",
  "Sales / Client Relations":
    "Turn these meeting notes into a concise follow-up email and CRM summary. Do not include confidential details that are not necessary for the follow-up.",
  "Data / Analytics":
    "Summarize the key trends in this dashboard and list three possible business questions for human review.",
  "HR / Admin":
    "Summarize these meeting notes into action items, owners, and deadlines. Do not include sensitive employee information unless required.",
  Finance:
    "Summarize this financial report at a high level and flag areas that require human review. Do not generate final recommendations without approval.",
  "IT / Engineering":
    "Evaluate this AI tool against data sensitivity, integration needs, user value, and governance risk. Return approved, experimental, or not approved."
};

export function getRecommendedTier(skillLevel: SkillLevel) {
  if (skillLevel === "Beginner") return "Tier 1 + Tier 2 Required";
  if (skillLevel === "Intermediate") return "Tier 2 - Department Workflow Training";
  return "Tier 3 - AI Champion Track";
}

export function getRiskLevel(dataSensitivity: DataSensitivity): RiskLevel {
  if (dataSensitivity === "Public / general") return "Low Risk";
  if (
    dataSensitivity === "Financial / contract data" ||
    dataSensitivity === "Highly sensitive / restricted data"
  ) {
    return "High Risk";
  }
  return "Medium Risk";
}

export function getToolGuidance(riskLevel: RiskLevel) {
  if (riskLevel === "Low Risk") {
    return "Use approved AI tools for drafting, summarization, and brainstorming. Do not disclose confidential business information.";
  }

  if (riskLevel === "Medium Risk") {
    return "Use approved enterprise AI tools only. Avoid public AI tools and remove unnecessary personal or employer-identifying details.";
  }

  return "Do not use public AI tools. Use only approved enterprise workflows and escalate to an AI Champion or governance owner before processing.";
}

export function buildLearningPath(input: LearningPathInput): LearningPathOutput {
  const riskLevel = getRiskLevel(input.dataSensitivity);

  return {
    recommendedTier: getRecommendedTier(input.skillLevel),
    riskLevel,
    departmentPath: departmentPaths[input.department],
    toolGuidance: getToolGuidance(riskLevel),
    thirtyDayGoal: thirtyDayGoals[input.department],
    samplePrompt: samplePrompts[input.department],
    governanceReviewRequired: input.dataSensitivity === "Highly sensitive / restricted data"
  };
}
