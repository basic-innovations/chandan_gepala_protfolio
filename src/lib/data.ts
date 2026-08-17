
import { Github, Linkedin, Mail } from 'lucide-react';

export const personalInfo = {
  name: 'Chandan Gepala',
  title: 'Mobile Application Developer',
  headline: 'Crafting Seamless Mobile Experiences',
  techStack: ['Java', 'Kotlin', 'Flutter'],
  bio: "My journey in technology, from local Indian startups to international research centers, has been a progression of tackling increasingly complex challenges. I began by building foundational hospital management systems, then moved to architecting mission-critical Healthtech solutions where I enhanced device reliability, data security, and performance for diagnostic hardware. I've also scaled a fast-growing community app with over 10,000 users, focusing on user experience and optimization. Most recently, my work has ventured into the future of connectivity, developing proof-of-concepts for 6G-enabled Industrial IoT systems. Throughout these diverse experiences, my goal remains to build robust, efficient, and impactful digital solutions that solve real-world problems.",
  email: 'chandangepala@gmail.com',
  phone: '+919509952931',
  location: 'Jaipur, India',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chandangepala/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chandangepala',
      icon: Github,
    },
    { name: 'Email', url: 'mailto:chandangepala@gmail.com', icon: Mail },
  ],
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1P1i_Fk2I2LotFouCqbTKE1kziFynclh9',
};

export const skills = [
  {
    category: 'Languages',
    items: ['Kotlin', 'Java', 'Dart', 'SQL'],
  },
  {
    category: 'Frameworks & SDKs',
    items: [
      'Android SDK',
      'Flutter',
      'Jetpack Compose',
      'Node.js',
      'RESTful APIs',
    ],
  },
  {
    category: 'Databases',
    items: ['Firebase', 'Room', 'SQLite', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Android Studio',
      'VS Code',
      'Git',
      'GitHub',
      'Postman',
      'Jira',
      'Figma',
    ],
  },
];

export const projects = [
  {
    slug: 'mobiapp-ultra',
    title: 'Mobilab Connect',
    summary:
      'A companion app for the Mobilab Device, a portable blood testing analyzer, enabling rapid and accurate diagnostic tests via IoT technology.',
    image_id: 'project-mobiapp-ultra',
    techStack: ['Kotlin', 'Android SDK', 'Firebase', 'REST APIs'],
    problem:
      'Healthcare professionals required a mobile solution to operate a portable blood testing device, conduct tests efficiently, and get real-time analysis of key health parameters.',
    solution:
      'Mobilab Connect is a companion app designed for use with the Mobilab Device, a portable blood testing analyzer developed by Primary Healthtech Private Limited. This app enables healthcare professionals to conduct rapid and accurate diagnostic tests by leveraging IoT technology for real-time analysis of key health parameters.',
    githubUrl: null,
    liveUrl: null,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.primaryhealthtech.mobiappUltraV2',
  },
  {
    slug: 'gumb',
    title: 'Gumb: Chat for communities',
    summary:
      'A feature-rich messenger for communities like sports teams, gaming guilds, and study groups with tools for organization.',
    image_id: 'project-gumb',
    techStack: ['Kotlin', 'Android SDK', 'Firebase', 'REST APIs'],
    problem:
      'Online communities often use multiple disconnected tools for communication, scheduling, and organization, leading to confusion and inefficiency.',
    solution:
      'Gumb is the all-in-one app for team scheduling, event organization, and calendar coordination. Whether you run a sports team, club, music group, project team, or company - Gumb keeps schedules, attendance, tasks, and communication in one central place.',
    githubUrl: null,
    liveUrl: null,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gumb',
  },
  {
    slug: 'jaipur-quest',
    title: 'Jaipur Quest',
    summary:
      'An AI-enabled tourist guide app showcasing a complete list of tourist attractions.',
    image_id: 'project-jaipur-quest',
    techStack: ['Flutter', 'Provider', 'Gemini API', 'Firestore', 'Firebase Cloud Functions'],
    problem:
      'Tourists in Jaipur often need a comprehensive guide to discover attractions and learn about their history in an interactive way.',
    solution:
      'Developed an AI-enabled tourist guide app showcasing a complete list of tourist attractions. Integrated text-to-speech functionality to enhance accessibility and user interaction. Enabled users to instantly access historical information by taking a photo of a landmark. Built the application using Flutter, managing state with the Provider package and integrating the Gemini 2.5 Flash API for AI-driven features. Leveraged Firestore and Firebase Cloud Functions for all backend services.',
    githubUrl: 'https://github.com/chandangepala/jaipur_quest',
    liveUrl: null,
  },
  {
    slug: 'kwizzease',
    title: 'KwizzEase',
    summary:
      'An intelligent quiz generation tool that streamlines educational content creation by converting static documents into engaging, interactive quizzes.',
    image_id: 'project-kwizzease',
    techStack: ['Flutter', 'Cubit', 'Gemini API', 'Dart'],
    problem:
      'Educators and content creators spend significant time manually creating quizzes from documents, a tedious and inefficient process.',
    solution:
      "KwizzEase uses the Gemini API to automatically convert documents into interactive quizzes. The cross-platform application, built with Flutter and Cubit, accelerates the development process by using AI tools for code generation, and delivers a high-performance experience for document uploads, quiz customization, and in-depth performance analysis.",
    githubUrl: 'https://github.com/chandangepala/wizz-ease',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kwizz.ease.kwizz_ease&hl=en',
    liveUrl: 'https://kwizzease.com/',
  },
  {
    slug: 'clean-lakholav',
    title: 'Clean Lakholav',
    summary: 'A community engagement project to restore and maintain a historical water body.',
    image_id: 'project-clean-lakholav',
    techStack: ['Jetpack Compose', 'Kotlin', 'Spring Boot', 'Firebase'],
    problem:
      'A historical water body required restoration and long-term maintenance, which needed significant community involvement and organization.',
    solution:
      'Initiated a community engagement project to address the restoration. A client application was developed using Jetpack Compose and Kotlin to help organize efforts. REST APIs were built with Spring Boot to handle data, and a website was deployed using Firebase for backend services and hosting to facilitate social outreach and volunteer coordination.',
    githubUrl: null,
    liveUrl: 'http://cleanlakholav.com/',
  },
];
