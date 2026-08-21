import Utilitybox from "../assets/Img/Utilitybox.png";
import youtubeanalytics from "../assets/Img/youtubedata.png";
import gamebox from "../assets/Img/gamebox.png";
import quizotg from "../assets/Img/quizotg.png";
import Funphoto from "../assets/Img/videoeditor.png";
import tchat from "../assets/Img/tchat.png";
import Lava from "../assets/Img/lava.png";

const portfolioData = {
  name: "Tarun Kushwaha",
  resume:
    "https://drive.google.com/file/d/1i6pStZ_srxktQzNP6jzkn01sLQ56iDa9/view?usp=drive_link",
  profession: "Full-Stack Developer (MERN)",
  skillsSet: {
    frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "HTML",
      "CSS",
    ],
    backend: ["Node.js", "Express.js", "MongoDB"],
    mobile: ["React Native", "Expo"],
    tools: ["Git", "GitHub", "Figma"],
  },
  intro:
    "I build scalable web, extensions and mobile applications with clean UI, strong performance, and real-world usability — from idea to deployment.",
  aboutme:
    "I began my career as an Electrical Maintenance Engineer before making a successful transition into web development, which I learned independently. I have worked as a Frontend / Full-Stack Developer at S7Works, Flynt Social, and as a freelancer, building production-ready apps. I have developed and published applications across web, mobile, and browser extensions, including two apps on the Amazon Appstore and a browser extension on the Microsoft Edge Store. I am passionate about creating impactful user experiences and pride myself on being a self-driven developer.",
  projects: [
    {
      projectname: "Quiz OTG – Full-Stack Quiz Platform",
      description:
        "A full-stack cross-platform quiz application (web + Android) with AI-powered question generation, CSV uploads, and a scalable backend. Designed for performance and deployed on the Amazon Appstore.",
      liveurl: "https://quizotg.netlify.app/",
      apkurl:
        "https://drive.google.com/file/d/1jkw5TEG9nY0icfMUrEn4uHRpyFTih-kE/view?usp=drive_link",
      storeurl: "https://www.amazon.com/gp/product/B0DTB5FM28",
      github: "https://github.com/tarunkumarkushwaha/QuizOTGvite",
      imagesrc: quizotg,
      serialno: 1,
      backendrepo: "https://github.com/tarunkumarkushwaha/QuizTimeQuestionAPI",
      techstackused:
        "React, React Native, Node.js, Express.js, MongoDB, Tailwind CSS",
    },
    {
      projectname: "Gamebox – React Native Game Collection",
      description:
        "A mobile game collection built with React Native, featuring interactive games like Simon Game, Snake Water Gun, and Rock Paper Scissors, focused on smooth gameplay and engaging UI.",
      liveurl: "https://gamebox--g23d6io3zq.expo.app/",
      github: "https://github.com/tarunkumarkushwaha/memoriseThis",
      imagesrc: gamebox,
      serialno: 2,
      backendrepo: "",
      techstackused: "React Native, Expo",
    },
    {
      projectname: "Lavamesh – Local first Project manager App",
      description:
        "a real-time project collaboration platform for centralized project management and team coordination. With live updates using Socket.io, role-based workflows, project approvals, and collaborative task management. local JSON backup functionality, allowing project data to be exported and restored without relying on third-party services..",
      liveurl: "https://lavamesh.vercel.app/",
      github: "https://github.com/tarunkumarkushwaha/lavamesh",
      imagesrc: Lava,
      serialno: 3,
      backendrepo: "",
      techstackused: "Next.js, Socket.io",
    },
    {
      projectname: "YouTube Analytics – Data Insights Dashboard",
      description:
        "A web application that fetches and visualizes YouTube data using APIs, providing insights into channel performance through charts and analytics dashboards.",
      liveurl: "https://youtubeanalyticsbytarun.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/YoutubeAnalytics",
      imagesrc: youtubeanalytics,
      serialno: 4,
      backendrepo: "https://github.com/tarunkumarkushwaha/YoutubeAnalytics",
      techstackused: "React, Node.js, Express.js, Tailwind CSS, Material UI",
    },
    {
      projectname: "T-Chat – Real-Time Chat Application",
      description:
        "A real-time chat application built with Socket.io, supporting instant messaging and user interactions with a full-stack architecture.",
      liveurl: "https://tarun-tchat.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/3W-assignment2",
      imagesrc: tchat,
      serialno: 5,
      backendrepo: "https://github.com/tarunkumarkushwaha/3W-assignment2",
      techstackused: "React, Socket.io, Node.js, Express.js, MongoDB",
    },
    {
      projectname: "Utility Box – Multi-Utility Productivity App",
      description:
        "A productivity-focused platform combining multiple tools like JSON formatter, regex tester, calendar, notepad, and data visualization. Also available as a browser extension for quick access.",
      liveurl: "https://utilityboxreactor.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/reactor-using-vite",
      extension:
        "https://microsoftedge.microsoft.com/addons/detail/utility-tools-extension/odgcbccpihfaomfbdadmmgmonpomimch",
      imagesrc: Utilitybox,
      serialno: 3,
      backendrepo: "",
      techstackused: "React, Tailwind CSS",
    }
    // {
    //   projectname: "T-Connect – Social Dashboard UI",
    //   description:
    //     "A modern UI-focused web application inspired by social and task management platforms, featuring responsive layouts, custom components, and smooth user interactions.",
    //   liveurl: "https://t-connect-tarun.netlify.app/",
    //   github: "https://github.com/tarunkumarkushwaha/T-connect",
    //   imagesrc: Funphoto,
    //   serialno: 6,
    //   backendrepo: "",
    //   techstackused: "React, Tailwind CSS",
    // },
  ],
  contact: {
    email: "tkk.tarunkushwaha05@gmail.com",
    phone: "+91 7400744121",
  },
};

export default portfolioData;
