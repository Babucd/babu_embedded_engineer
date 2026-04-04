import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  school,
  college,
  work,
  logo,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "The beginning — a kid who loved to tinker",
    companyName: "Childhood",
    icon: "",
    iconBg: "#ffffff",
    date: "",
    sideImage: school,
    points: [
      "Before I knew the words \"embedded systems\" or \"microcontroller,\" I was already obsessed with how things worked. Taking things apart, wiring things up, figuring out what makes a circuit tick — that was just how I spent my time. It wasn't a hobby. It was a feeling I couldn't explain yet.",
    ],
  },
  {
    title: "Electrical & Electronics Engineering — Diploma",
    companyName: "Diploma",
    icon: "",
    iconBg: "#ffffff",
    date: "",
    subtitle: "// where it got official",
    tags: ["Arduino", "Circuit design", "Electrical theory"],
    points: [
      "Once I knew what I wanted, I went all in. The diploma was where theory met my hands — hardware-related projects through the years, and a final-year project built on Arduino that felt like a real proof of concept. This is where I confirmed: yes, this is it.",
    ],
  },
  {
    title: "B.E. Electrical & Electronics Engineering",
    companyName: "Degree",
    icon: "",
    iconBg: "#ffffff",
    date: "",
    sideImage: college,
    subtitle: "// where hardware met intelligence",
    highlight: "Hardware + AI = the moment I realised what I actually want to build with my life.",
    tags: ["ESP32", "Arduino", "GSM", "Sensors", "Machine learning", "Deep learning", "Fault detection"],
    points: [
      "This is where I truly found my space. Arduino, ESP32, GSM modules, voltage & current sensors — I built with all of it. But the real turning point came in my pre-final year: an AI-based attendance system using machine learning. That's when I felt it for the first time — hardware and AI working together. That magic was real, and I wanted more of it.",
      "For my final year, I pushed further — deep learning-based machine fault detection. It was the hardest thing I'd built. Months of work, of failing and fixing. But those struggles shaped me into a real engineer. That project didn't just graduate me — it changed how I think.",
    ],
  },
  {
    title: "Embedded Systems & IOT Engineer",
    companyName: "Current",
    icon: logo,
    iconBg: "#ffffff",
    date: "",
    sideImage: work,
    subtitle: "// Webronic · Now",
    highlight: "IoT is the natural extension of my journey — transforming my foundation in electronics into building intelligent, real-time connected systems that solve real-world problems.",
    tags: [
      "Raspberry Pi", "ESP32", "Hailo-8L", "Coral Edge TPU", "MQTT", "Node.js", 
      "Python", "Electron.js", "Embedded Linux", "IoT / IIoT", "Object detection", "Edge AI"
    ],
    points: [
      "Today I build end-to-end intelligent systems — from bare-metal microcontroller code all the way to AI models running at the edge. I work across Raspberry Pi, Arduino, and ESP32 for embedded development, and deploy computer vision & automation pipelines on edge AI accelerators like the Google Coral Edge TPU and Hailo-8L (26 TOPS).",
      "My stack spans Node.js, Python, and Electron.js, with hands-on experience in MQTT, TCP/RTSP, and device-to-cloud pipelines for IoT and industrial automation. I specialise in Raspberry Pi, real-time monitoring, and RTSP protocol-based IP camera systems — solving real-world problems where hardware, software, and AI must work together reliably."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
