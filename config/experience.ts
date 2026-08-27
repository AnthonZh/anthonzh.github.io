export type Experience = (typeof experience)[number];

export type ExperienceMonth = {
  month: number;
  year: number;
};

export const experienceTimelineStart = { month: 2, year: 2024 } as const;

export const experience = [
  {
    role: "Student AI Researcher",
    organization: "University of Alabama at Birmingham",
    location: "Remote",
    start: { month: 2, year: 2024 },
    end: { month: 5, year: 2025 },
    phases: [
      {
        label: "Researcher",
        start: { month: 2, year: 2024 },
        end: { month: 5, year: 2025 },
      },
    ],
    summary:
      "At UAB, I developed Poisson Flow Consistency Training in PyTorch, reducing the training setup from two models to one while retaining similar image quality. I adapted the method for low-dose CT denoising, where it improved perceptual image patch similarity by 76%. We published the work as an arXiv preprint.",
  },
  {
    role: "Computer Vision Lead",
    organization: "Duke Robotics Club",
    location: "Durham, NC",
    start: { month: 9, year: 2025 },
    end: null,
    phases: [
      {
        label: "Member",
        start: { month: 9, year: 2025 },
        end: { month: 7, year: 2026 },
      },
      {
        label: "CV Lead",
        start: { month: 8, year: 2026 },
        end: null,
      },
    ],
    summary:
      "As a member, I built a Ping360 sonar denoising and segmentation pipeline for our autonomous underwater robot. Using the pipeline, we aligned the robot to walls 10 meters away in six out of six tests and used more than eight pool sessions to find system bugs. As Computer Vision Lead, I am building a robot-agnostic simulator for testing without the physical robot.",
  },
  {
    role: "Auxiliaries Lead",
    organization: "Duke Electric Vehicles",
    location: "Durham, NC",
    start: { month: 9, year: 2025 },
    end: null,
    phases: [
      {
        label: "Member",
        start: { month: 9, year: 2025 },
        end: { month: 4, year: 2026 },
      },
      {
        label: "Aux Lead",
        start: { month: 5, year: 2026 },
        end: null,
      },
    ],
    summary:
      "I started on the electrical team by designing a low-power PCB for more than five vehicle sensor and control functions, then implemented a C++ CAN architecture with less than 100 ms board-to-board latency. As Auxiliaries Lead, I am turning that work into more than eight onboarding projects that introduce new members to embedded systems and PCB design.",
  },
  {
    role: "Undergraduate Research Assistant",
    organization: "Duke Robot Dexterity Lab",
    location: "Durham, NC",
    start: { month: 1, year: 2026 },
    end: null,
    phases: [
      {
        label: "Research Assistant",
        start: { month: 1, year: 2026 },
        end: null,
      },
    ],
    summary:
      "I study contact-based methods for dexterous robot manipulation using less than 30 minutes of data. To collect training examples, I built a multimodal sensing pipeline around FoundationPose, ZED depth sensing, and Rokoko gloves, then used it to record more than 10 hand-object trajectories.",
  },
  {
    role: "Enterprise AI Intern",
    organization: "Humana Inc.",
    location: "Louisville, KY",
    start: { month: 5, year: 2026 },
    end: { month: 8, year: 2026 },
    phases: [
      {
        label: "Enterprise AI Intern",
        start: { month: 5, year: 2026 },
        end: { month: 8, year: 2026 },
      },
    ],
    summary:
      "At Humana, I shipped a full-stack error-reporting application for more than 1,000 associates. I designed FastAPI services for agentic workflows and cut incident triage time by more than 95%, then built Azure and Google Cloud tools that raised agent accuracy by 14%.",
  },
] as const;
