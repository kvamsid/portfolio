import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import download_icon_dark from './download-icon-dark.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github from './github.png';
import github_dark from './github_dark.png';
import website from './website.png';
import website_dark from './website_dark.png';
import v_logo from './V_logo.png';
import linkedin from './linkedin.png';
import linkedin_dark from './linkedin_dark.png';
import leetcode from './leetcode.png'
import leetcode_dark from './leetcode_yellow.png';
import about_me_image from './about_me.png';

export const assets = {
    user_image,
    about_me_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    download_icon_dark,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    github,
    github_dark,
    website,
    website_dark,
    v_logo,
    linkedin,
    linkedin_dark,
    leetcode,
    leetcode_dark,
};

export const workData = [
    {
        title: 'Todo Management – Securing REST APIs with Role-Based Authorization',
        description: 'This Spring Boot-based REST service manages todos with secure CRUD operations, role-based access control, and JWT authentication.',
        github: 'https://github.com/kvamsid/Todo-Management-Securing-REST-APIs-with-Role-Based-Authorization',
        techStack: ['Java','SpringBoot','Spring Security', 'JSON Web Token','REST API','MySQL'],

    },
    {
      title: 'Scalable Face Recognition System on AWS',
      description: 'A cloud-native face recognition app on AWS with scalable architecture, leveraging PyTorch, EC2, S3, and SQS.',
      github: 'https://github.com/kvamsid/Scalable-Multi-Tier-Face-Recognition-System-on-AWS',
      techStack: ['Python','Flask','Boto3','AWS EC2','AWS S3','AWS SQS'],
      
    },  
    {
      title: 'Github-Finder Tool',
      description: 'A responsive React app that uses GitHub APIs to search and display user profiles, including bios, repository stats, and top repositories. Built with Context API, reducers, TailwindCSS, and DaisyUI.',
      github: 'https://github.com/kvamsid/github-finder',
      techStack: ['React', 'Vite','Tailwind CSS', 'Daisy UI'],
      Live: 'https://github-finder-app-one-livid.vercel.app/',
    },
    {
        title: 'Appearance Transfer using LLMs',
        description: 'Appearance Transfer synthesizes images by balancing textual semantics with visual styles using the Kandinsky model and an LLM agent.',
        github: 'https://github.com/kvamsid/Appearance-Transfer-using-LLMs',
        techStack: ['LLMs','CLIP','Kandinsky','Stable Diffusion', 'Python', 'Flask'],
        
    },
    {
      title: 'Full-Stack E-commerce App',
      description: 'A full-stack e-commerce app with React, Spring Boot REST APIs, and H2 database for a seamless shopping experience.',
      github: 'https://github.com/kvamsid/E-Commerce-using-SpringBoot',
      techStack: ['Java','SpringBoot','REST API','MySQL','React', 'Vite','Tailwind CSS'],
      
    },
    {
        title: 'AxiSketcher - an axis mapping tool',
        description: 'A visualization tool for mapping data with customizable, non-linear axes through intuitive drawings.',
        github: 'https://github.com/kvamsid/AxiSketcher',
        techStack: ['JavaScript','D3.js','HTML'],
        Live: 'https://kvamsid.github.io/AxiSketcher/',
    },
    {
      title: 'Job Posting Website with React and Vite',
      description: 'A job listing app built with React, Vite, and Tailwind, featuring CRUD operations and mock API integration with JSON Server.',
      github: 'https://github.com/kvamsid/Job-Posting-Website-with-React-and-Vite',
      techStack: ['React', 'Vite','Tailwind CSS'],
      Live: 'https://job-posting-website-with-react-and-vite.vercel.app/',
    },
    {
      title: 'Feedback App using React',
      description: 'This application is designed to collect user feedback through an intuitive interface. Users can rate their experience and provide comments, which are then displayed in a list format.',
      github: 'https://github.com/kvamsid/Feedback-App-using-React',
      techStack: ['React','Tailwind CSS'],
      Live: 'https://feedback-app-using-react-three.vercel.app/', 
    },
    {
      title: 'Banking Application',
      description: 'A Spring Boot banking app for managing accounts, transactions, and fund transfers efficiently.',
      github: 'https://github.com/kvamsid/Banking_Application_using_SpringBoot',
      techStack: ['Java','SpringBoot','REST API','MySQL'],
      
    },
    {
      title: 'Expense Tracker App using Spring Boot',
      description: 'An Expense Tracker app for managing finances with categorized expense tracking and a seamless interface.',
      github: 'https://github.com/kvamsid/Expense-Tracker-App-using-Spring-Boot',
      techStack: ['Java','SpringBoot','REST API','MySQL'],

    },
    {
      title: 'Serverless Face Recognition Systen using AWS Lambda',
      description: 'A serverless AWS-based face recognition platform that processes video uploads with scalable, event-driven architecture.',
      github: 'https://github.com/kvamsid/Serverless-Face-Recognition-System-using-AWS-Lambda',
      techStack: ['Python','Boto3','AWS Lambda','AWS S3','AWS IAM'],
      
    },
]


export const experienceInfo= [
    {
    company: "Oracle",
    role: "Full-Stack Developer",
    location: "Pune, India",
    duration: "June 2021 - June 2023",
    bullets: [
        "Played a key role in developing a comprehensive end-to-end banking application for over 200 customer banks with more than 1 million active users, catering to a diverse range of corporate and retail banking needs.",
        "Led the modularization of a monolithic banking application to a microservices-based architecture, enhancing the product scalability, including a 20% boost in system performance, and a 30% reduction in downtime.",
        "Developed and integrated more than 30 RESTful web services using JAX-RS API and Jersey implementation, ensuring robust and scalable solutions for seamless communication between frontend and backend systems.",
        "Seamlessly integrated more than 10 UI screens using Knockout.js and Oracle JavaScript Extension Toolkit (JET), creating responsive front-end experiences that significantly enhanced user engagement and satisfaction.",
        "Engaged in multiple client consultation sessions, demonstrating a strong commitment to addressing customer needs and providing valuable technical assistance and adeptly resolved more than 50 application-related bugs.",
        "Implemented JUnit test cases for various modules, boosting code coverage from 27% to 85%. Ensured validation of all functional paths, including edge cases, significantly enhancing code reliability and maintainability.",
    ],
    },
    {
    company: "Arizona State University",
    role: "Graduate Teaching Assistant",
    location: "Tempe, AZ, USA",
    duration: "May 2024 - August 2024",
    bullets: [
        "Conducted instructional sessions and held dedicated office hours to address student inquiries and clarify complex concepts.",
        "Assisted in meticulously grading weekly assignments, programming tasks, and project reports, ensuring accuracy and fairness in assessments.",
        "Collaborated with faculty supervisors and instructors, adapting to evolving academic needs and contributing to instructional excellence.",
    ],
    },
];
  

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Arizona State University (NAmU Scholar)', description: 'Master of Science in Computer Science', GPA:'4.0', time:'Aug 2023 - May 2025' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'NIT Nagpur', description: 'B.Tech in Computer Engineering', GPA:'8.92', time:'July 2017 - May 2021'}
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
export const skillsInfo= [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Experienced"},
        { name: "Python", level: "Experienced"},
        { name: "C++", level: "Intermediate"},
        { name: "JavaScript", level: "Intermediate"},
        { name: "C", level: "Beginner"},
      ],
    },
    {
        title: "Backend Development",
        skills: [
          { name: "SpringBoot", level: "Experienced"},
          { name: "Spring MVC", level: "Experienced"},
          { name: "Spring Data JPA", level: "Experienced"},
          { name: "REST APIs", level: "Experienced"},
          { name: "Flask", level: "Intermediate"},
        ],
      },
      {
        title: "Frontend Development",
        skills: [
          { name: "React", level: "Experienced"},
          { name: "Tailwind CSS", level: "Experienced"},
          { name: "HTML and CSS", level: "Experienced"},
          { name: "Next.js", level: "Intermediate"},
          { name: "D3.js", level: "Intermediate"},
          { name: "Oracle JET", level: "Intermediate"},
        ],
      },
      {
        title: "Database",
        skills: [
          { name: "Oracle Database", level: "Experienced"},
          { name: "Postgre SQL", level: "Experienced"},
          { name: "MySQL", level: "Intermediate"},
          { name: "Neo-4j", level: "Intermediate"},
          { name: "MongoDB", level: "Beginner"},
        ],
      },
      {
        title: "DevOps and Tools",
        skills: [
          { name: "Git", level: "Experienced"},
          { name: "AWS(EC2, S3, Lambda)", level: "Experienced"},
          { name: "Gradle", level: "Experienced"},
          { name: "Maven", level: "Experienced"},
          { name: "Jenkins", level: "Intermediate"},
          { name: "Docker", level: "Intermediate"},
        ],
      },
      {
        title: "Software Development",
        skills: [
          { name: "Object Oriented Programming", level: "Experienced"},
          { name: "System Design", level: "Experienced"},
          { name: "Agile Methodologies", level: "Experienced"},
          { name: "Design Patterns", level: "Intermediate"},
        ],
      }
  ];
  
  