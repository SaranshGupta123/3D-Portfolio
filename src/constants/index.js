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
  dbms,
  php,
  tailwind,
  VideoEditing,
  nodejs,
  mongodb,
  mysql,
  git,
  Smallarmsfactory,
  CodSoft,
  Shooter,
  Spotify,
  Ecommerce,
  library,
  zomato,
  portfolio,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "PHP Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "dbms",
    icon: dbms,
  },
  {
    name: "Video Editing",
    icon: VideoEditing,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Small Arms Factory",
    company_website: "https://ddpdoo.gov.in/units/SAF",
    icon: Smallarmsfactory,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CodSoft",
    company_website: "https://www.codsoft.in/",
    icon: CodSoft,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
];

const projects = [
  {
    name: "Shooter Game",
    description:
      "I created a basic shooting game using HTML, CSS, JavaScript, and Three.js, featuring simple 3D graphics and straightforward shooting mechanics. This project demonstrates fundamental interactive gameplay and 3D rendering.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: Shooter,
    hosted_link: "https://github.com/SaranshGupta123/ShooterGame",
  },
  {
    name: "Spotify UI Clone",
    description:
      "I built a Spotify UI clone using HTML, CSS, and JavaScript, recreating the sleek design and layout of Spotify's interface. This project highlights responsive web design and interactive elements for an authentic user experience.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Spotify,
    hosted_link: "https://github.com/SaranshGupta123/Spotify-UI-Clone-main",
  },
  {
    name: "E-Commerce Website",
    description:
      "I developed an e-commerce website using ReactJS and TypeScript, featuring a responsive interface and smooth user interactions. This project highlights my skills in building dynamic, type-safe web applications.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: Ecommerce,
    hosted_link: "https://github.com/SaranshGupta123/Ecommerce",
  },
  {
    name: "Library",
    description:
      "I developed a library website using HTML, CSS, JavaScript, PHP, and MySQL, enabling users to browse and manage books efficiently. This project showcases dynamic content handling and database integration for smooth functionality.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    hosted_link:
      "https://github.com/SaranshGupta123/Library",
  },
  {
    name: "Zomato Clone",
    description:
      "I created a Zomato clone web app using HTML, CSS, JavaScript, Tailwind and ReactJS, replicating key features of the food delivery platform. This project demonstrates an intuitive user interface, responsive design, and interactive elements to enhance the browsing experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    hosted_link: "https://github.com/SaranshGupta123/zomato_clone-master",
  },
  {
    name: "Threejs PortFolio",
    description:
      "I developed a portfolio using Three.js, Tailwind CSS, and JavaScript, combining 3D visual elements with a clean, responsive design. This project showcases interactive animations and a unique presentation style for personal branding.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    hosted_link:
      "https://github.com/SaranshGupta123/3D-Portfolio",
  },
];

const personalInfo = {
  name: "Saransh",
  fullName: "Saransh Gupta",
  email: "Saranshgupta123456789.sg.sg@gmail.com",
  role: "Full Stack Developer",
  about: `Dedicated Web Developer skilled in PHP, HTML, JavaScript, and Three.js, with a strong focus on building responsive applications, enhancing performance, and delivering user-centered experiences across various real-world projects.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1clU7T7AeH_MvY0P1x2DlOQBAGtog9GTN/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/saranshg123/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/SaranshGupta123",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
