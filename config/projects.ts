export type Projects = typeof projects;

export const projects = {
  projects: [
    {
      name: "DocuMINT",
      description: `An AI-powered tool to automate work documentation using just a single video. Empowers 
        organizations and groups to collaborate on projects and keep track of development progress. Developed the
        Quarkus Backend for this project, handling user authentication, organization handling, and project endpoints.
        Also developed a file-uploading system using S3 (Amazon Simple Storage Service) and assisted refactoring
        the AI data processing to the backend. Closely collaborated with the front-end developer. Developed for
        the 2025 Duke AI Hackathon.`,
      time: "November 2025",
      learnmore: "https://www.youtube.com/watch?v=FDAM1zpeOrc",
    },
    {
      name: "Hands-Free Measuring Device for Wheelchair Users",
      description: `A device to measure the distance traveled while in a wheelchair for Duke's EGR 101. Using a BNO085 IMU and ESP32 
        microcontroller, the user can remotely interact with the device and get measurements accurate within the inch. I developed the circuit
        design for this project, and wrote the C++ program for the ESP32 to handle BNO085 data. `,
      time: "September 2025-Present",
      learnmore: "",
    },
    {
      name: "Peripherals Board",
      description:
        "Developing a Peripherals PCB for Duke Electric Vehicles. Using Altium Designer, designed a board which can control peripheral elements on the car.",
      time: "September 2025-Present",
      learnmore: "",
    },
  ],
};
