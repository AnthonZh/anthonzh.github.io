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
      learnmore: "https://duke.is/documint",
    },
    {
      name: "Tag!",
      description: `A 2-dimensional rendering of the classic game, Tag. Using a specialized game engine, the game handles
        physics, collisions, controls, and rendering in C# and OpenGL (with OpenTK). Implementing arcade-like controls
        and networking so that players are able to enjoy Tag across the world (and with one less dimension they are used to).
        A project inspired by my participation in the Duke Programming, Arts, and Design (DPAD) student organization.`,
      time: "September 2025-Present",
      learnmore: "",
    },
    {
      name: "Sonar Processing for Duke Robotics Club",
      description: `A ROS2 sonar node for an underwater robot to allow for estimation of robot pose and normal
      angles to detected objects (walls and buoys). Integrating Sonar denoising and object detection into the
      ROS2 program, and publishing usable data for task-planning and future sensor integration with CV. Uses Fourier
      transforms for the primary denoising function and orthogonal regressions in order to estimate poses and
      normal angles of objects found in the view of a Ping360 Sonar sensor.`,
      time: "September 2025-Present",
      learnmore:
        "https://github.com/DukeRobotics/robosub-ros2/tree/sonar-processing",
    },
  ],
  engineering: [
    {
      name: "Hands-Free Measuring Device for Wheelchair Users",
      description: `A device to measure the distance traveled while in a wheelchair for Duke's EGR 101. Designed for Chris Sparrow, 
        Director of Physical Accessibility at Duke, in order to improve accessibility in the University and assist in path
        planning. Using a BNO085 IMU and ESP32 
        microcontroller, the user can remotely interact with the device and get measurements accurate within the inch. I developed the circuit
        design for this project, and wrote the C++ program for the ESP32 to handle BNO085 data.`,
      time: "September 2025-December 2025",
      learnmore: "",
    },
    {
      name: "Peripherals Board for Duke Electric Vehicles",
      description: `A Printed Circuit Board to control a from-scratch electric vehicle for the Shell Eco-Marathon. 
        Using Altium Designer, designed a board which can control peripheral elements on the car, including
        windshield wipers, hazard lights, and turn signals. Uses a Teensy 4.1 microcontroller to take inputs from
        a switchboard and output to offboard components. Outputs are controlled using TC4427ACPA Gate Drivers and MOSFETs
        for energy-efficient logic`,
      time: "September 2025-Present",
      learnmore: "",
    },
    {
      name: "Joulemeter Board for Duke Electric Vehicles",
      description: `A Printed Circuit Board to measure the voltage and current of the electric vehicle in order to calculate the
        the power usage of the vehicle. Uses a voltage divider to measure voltage and a shunt resistor with an INA299 to measure
        the amperage of the vehicle. Mixed-signal PCB layoutting considers the interactions between the analog outputs of the
        INA299 and the voltage divider and the digital signals from the CAN Transceiver on the board.`,
      time: "September 2025-Present",
      learnmore: "",
    },
  ],
};
