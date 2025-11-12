export type Projects = typeof projects;

export const projects = {
  cs: [
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
      video: true,
    },
    {
      name: "Sonar Processing for Duke Robotics Club",
      description: `A ROS2 sonar node for an underwater robot to allow for estimation of robot pose and normal
      angles to detected objects (walls and buoys). Integrating Sonar denoising and object detection into the
      ROS2 program, and publishing usable data for task-planning and future sensor integration with CV.`,
      time: "September 2025-Present",
      learnmore: "",
      video: false,
    },
  ],
  engineering: [
    {
      name: "Hands-Free Measuring Device for Wheelchair Users",
      description: `A device to measure the distance traveled while in a wheelchair for Duke's EGR 101. Using a BNO085 IMU and ESP32 
        microcontroller, the user can remotely interact with the device and get measurements accurate within the inch. I developed the circuit
        design for this project, and wrote the C++ program for the ESP32 to handle BNO085 data.`,
      time: "September 2025-Present",
      learnmore: "",
      video: false,
    },
    {
      name: "Peripherals Board for Duke Electric Vehicles",
      description: `A Printed Circuit Board to control a from-scratch electric vehicle for the Shell Eco-Marathon. 
        Using Altium Designer, designed a board which can control peripheral elements on the car, including
        windshield wipers, hazard lights, and turn signals. Currently selecting components for the peripherals
        and preparing to reduce the power usage of the board as well as programming a Teensy 4.1 microcontroller.`,
      time: "September 2025-Present",
      learnmore: "",
      video: false,
    },
  ],
};
