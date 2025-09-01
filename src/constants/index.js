import project1 from "../assets/projects/Calorie.jpeg";
import project2 from "../assets/projects/sell Gaming Gear.png";
import project3 from "../assets/projects/7m.png";
import project4 from "../assets/projects/yoga.jpeg";

export const HERO_CONTENT = `Passionate and eager Mobile app developer with a keen interest in crafting reliable and efficient software solutions. While I'm a fresher in the industry, my enthusiasm for coding and learning is boundless. I have a solid foundation in Java programming and am proficient in utilizing it to develop scalable and robust applications. My goal is to leverage my skills to contribute to innovative projects, drive business success, and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an aspiring and adaptable entry-level developer equipped with a diverse skill set that encompasses Spring Boot, Flutter, React, kotlin,sqlite,firebase,mongoDB,node.js,CI/CD. Despite being in the early stages of my career, my passion for coding and technology has been the driving force behind my rapid learning and growth. I have dedicated myself to mastering these technologies through rigorous coursework, hands-on projects, and a commitment to staying updated on industry trends.`;

export const ABOUT_TEXT2 = "My journey into software development began with a fascination for problem-solving and a desire to create meaningful solutions that enhance user experiences. Whether it's building robust backend systems with node.js, crafting elegant UIs with Flutter and React, or optimizing database performance with SQL, I approach each project with enthusiasm and a determination to deliver excellence.";

export const ABOUT_TEXT3 = "I'm not just passionate about coding; I'm also an avid table tennis player, finding joy in the fast-paced nature of the game and the strategic thinking it requires. Whether I'm coding or playing table tennis, I approach each challenge with focus, determination, and a drive to continuously improve.";

export const EXPERIENCES = [
  {
    "year": "May 2024 - July 2024",
    "role": "Full-Stack Mobile Developer Intern",
    "company": "Console Kit",
    "description": "Developed a full-stack mobile application using React Native for listing and managing gaming products. Built a responsive UI with dark/light themes and shimmer loading. Integrated Firebase for OTP authorization, Razorpay for payments in test mode, and image uploads. Designed and connected REST APIs using Node.js to a MongoDB Atlas database for secure data storage.",
    "technologies": ["React Native", "Node.js", "Firebase", "MongoDB Atlas", "REST APIs"]
  },
  {
    "year": "Nov 2023 - Jan 2024",
    "role": "Software Developer Trainee",
    "company": "Airtel India",
    "description": "Designed and implemented software design patterns and RESTful APIs under the guidance of senior developers. Participated in agile development cycles, contributing to team goals and process optimization during a two-month program focused on software design.",
    "technologies": ["REST APIs", "Agile Methodologies", "Software Design Patterns"]
  },
  {
    year: "06/2024 - 07/2024",
    role: "Flutter Development Intern",
    company: "CodSoft",
    description: `Developed and maintained cross-platform mobile applications using Flutter and Dart. Created three Flutter apps: a To-Do List, Music Player, and Recipe app, implementing features such as task management, audio playback, and recipe search with offline access.`,
    technologies: ["Flutter", "Dart"],
  }
];

export const PROJECTS = [
  {
    "title": "AI Calorie Tracker",
    "image": project1,
    "description": "A cross-platform calorie tracking app that allows users to log meals and monitor nutrition. Features AI-powered food recognition using Hugging Face models, offline data persistence with SQflite, and an analytics dashboard with charts. Manages state using the BLOC pattern.",
    "technologies": ["Flutter", "Firebase", "Hugging Face", "BLOC", "SQflite", "fl_chart"]
  },
  {
    "title": "Sell Gaming",
    "image": project2,
    "description": "A full-stack mobile app for listing, editing, and managing gaming products. Features include OTP login with Firebase, image uploads, dark/light themes, and animated UI elements. The backend is powered by a custom Node.js REST API connected to MongoDB.",
    "technologies": ["React Native", "Node.js", "Firebase", "MongoDB Atlas", "REST APIs"]
  },
  {
    "title": "7 Minute Workout App",
    "image": project3,
    "description": "A fitness application designed for quick and effective home workouts. The app guides users through a series of 12 body-weight exercises performed in 30-second intervals with short rests, providing a convenient exercise solution.",
    "technologies": ["Kotlin", "Jetpack Compose", "Android SDK"]
  },
  {
    "title": "Yoga App",
    "image": project4,
    "description": "A comprehensive yoga mobile application providing personalized sessions, progress tracking, and structured courses for all skill levels. Designed with a clean, intuitive UI to guide users through their wellness journey.",
    "technologies": ["Flutter", "Dart", "Firebase"]
  }
];

export const CONTACT = {
  address: "Pilani, Rajasthan",
  phoneNo: "+91 9772379525",
  email: "ajaysinghtogawas@outlook.com",
};
