export type Projects = typeof projects;

export const projects = {
  cs: [
    {
      name: "CAN Library Wrapper for Duke Electric Vehicles",
      description: `Built a C++ CAN library for communication between microcontrollers in Duke Electric Vehicles'
      custom electric vehicle. Designed a common interface for the ESP32 and Teensy 4.1, reducing the work required
      to add new subsystems while maintaining board-to-board communication latency below 100 ms.`,
      time: "March 2026-April 2026",
    },
    {
      name: "Sonar Processing for Duke Robotics Club",
      description: `Engineered a ROS2 denoising and segmentation pipeline for a Ping360 sonar on Duke Robotics
      Club's autonomous underwater robot. Used Fourier transforms and orthogonal regression to estimate the pose
      and surface normals of walls and buoys, aligning the robot to walls 10 meters away in six out of six tests.`,
      time: "September 2025-April 2026",
      learnmore:
        "https://github.com/DukeRobotics/robosub-ros2/tree/sonar-processing",
    },
    {
      name: "Tag Game Engine",
      description: `Built a custom two-dimensional game engine in C# and .NET for a playable game of tag. Used
        QuadTrees to optimize movement and collision processing, then built player-specific cameras and an OpenGL
        rendering pipeline with customizable shaders.`,
      time: "September 2025-December 2025",
      learnmore: "",
    },
    {
      name: "DocuMINT",
      description: `Developed the backend for a 2025 Duke AI Hackathon project that turned short videos into
        detailed documentation with an LLM. Built authentication, organization, project, and information-storage
        endpoints in Quarkus; added secure password hashing and salting; and implemented video uploads with Amazon
        S3. The application could produce documentation from less than 30 seconds of video.`,
      time: "November 2025",
      learnmore: "https://duke.is/documint",
    },
  ],
  engineering: [
    {
      name: "Peripherals Board for Duke Electric Vehicles",
      description: `Designed a low-power printed circuit board in Altium Designer for Duke Electric Vehicles'
        Shell Eco-marathon car. The Teensy 4.1-based board integrated sensor and control circuitry for more than five
        vehicle functions, including windshield wipers, hazard lights, and turn signals. TC4427A gate drivers and
        MOSFETs controlled the off-board loads.`,
      time: "September 2025-April 2026",
      learnmore: "",
    },
    {
      name: "Joulemeter Board for Duke Electric Vehicles",
      description: `Designed a mixed-signal printed circuit board that measured the electric vehicle's voltage and
        current to calculate energy use. Used a voltage divider for voltage sensing and a shunt resistor with an
        INA299 power monitor for current sensing. Routed the analog measurement circuitry to limit interference from
        the board's digital CAN signals.`,
      time: "September 2025-January 2026",
      learnmore: "",
    },
    {
      name: "Hands-Free Measuring Device for Wheelchair Users",
      description: `Developed a hands-free device for Duke's EGR 101 that measured the distance traveled by a
        wheelchair with less than one percent error over distances greater than 125 meters. Designed the circuit and
        wrote the ESP32 firmware in C++ to process BNO085 IMU data. The team built the device for Duke accessibility
        staff to support campus route planning.`,
      time: "September 2025-December 2025",
      learnmore: "",
    },
  ],
};
