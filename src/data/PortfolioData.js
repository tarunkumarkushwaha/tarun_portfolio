import Utilitybox from "../assets/Img/Utilitybox.png";
import movieselector from "../assets/Img/movieselector.png";
import gamebox from "../assets/Img/gamebox.png";
import quizotg from "../assets/Img/quizotg.png";
import Funphoto from "../assets/Img/videoeditor.png";
import filemanager from "../assets/Img/filemanager.png";

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
    "CSS"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  mobile: [
    "React Native",
    "Expo"
  ],
  tools: [
    "Git",
    "GitHub",
    "Figma"
  ]
},
  intro:
    "I build scalable web, extensions and mobile applications with clean UI, strong performance, and real-world usability — from idea to deployment.",
  aboutme:
    "I began my career as an Electrical Maintenance Engineer before making a successful transition into web development, which I learned independently. Over the past 2.5 years, I have worked as a Frontend / Full-Stack Developer at S7Works, Flynt Social, and as a freelancer, building production-ready apps. I have developed and published applications across web, mobile, and browser extensions, including two apps on the Amazon Appstore and a browser extension on the Microsoft Edge Store. I am passionate about creating impactful user experiences and pride myself on being a self-driven developer.",
  projects: [
    {
      projectname: "Quiz OTG",
      description:
        "A full-stack quiz platform available on web and Android. Features include preloaded quizzes, AI-powered question generation, CSV uploads, and responsive UI. Published on the Amazon Appstore.",
      liveurl: "https://quizotg.netlify.app/",
      apkurl:
        "https://drive.google.com/file/d/1jkw5TEG9nY0icfMUrEn4uHRpyFTih-kE/view?usp=drive_link",
      storeurl: "https://www.amazon.com/gp/product/B0DTB5FM28",
      github: "https://github.com/tarunkumarkushwaha/QuizOTGvite",
      imagesrc: quizotg,
      serialno: 1,
      backendrepo: "https://github.com/tarunkumarkushwaha/QuizTimeQuestionAPI",
      techstackused:
        "React, React Native, Express.js, Tailwind CSS, Material UI",
    },
    {
      projectname: "Gamebox",
      description:
        "A react native game with mini games like simon game, snake water gun, Rock Paper Scissors, craco teeth(comming soon), etc. Note: web preveiw may contain fewer games.",
      liveurl: "https://gamebox--g23d6io3zq.expo.app/",
      github: "https://github.com/tarunkumarkushwaha/memoriseThis",
      imagesrc: gamebox,
      serialno: 2,
      backendrepo: "",
      techstackused: "React Native",
    },
    {
      projectname: "Utility Box",
      description:
        "A multi-utility React app with everyday tools in one place.Includes a notepad, calendar, task manager, JSON formatter, bar graphs and pie charts generator, age calculator , reminder and countdown timer.The browser extension version adds tools like color picker and regex editor.",
      liveurl: "https://utilityboxreactor.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/reactor-using-vite",
      extension:
        "https://microsoftedge.microsoft.com/addons/detail/utility-tools-extension/odgcbccpihfaomfbdadmmgmonpomimch",
      imagesrc: Utilitybox,
      serialno: 3,
      backendrepo: "",
      techstackused: "React, Tailwind CSS",
    },
    {
      projectname: "Movie Selector",
      description:
        "A movie and TV show details site that fetches information from a free public API.",
      liveurl: "https://selectyourshow.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/selectyourshow",
      imagesrc: movieselector,
      serialno: 4,
      backendrepo: "",
      techstackused: "React, CSS",
    },
    {
      projectname: "FileFolder",
      description: "Frontend of file manager app.",
      liveurl: "https://filefolder-one.vercel.app/",
      github: "https://github.com/tarunkumarkushwaha/filefolder",
      imagesrc: filemanager,
      serialno: 5,
      backendrepo: "",
      techstackused: "React, Tailwind CSS",
    },
    {
      projectname: "T-connect",
      description: "A UI demo for a social media task manager app.",
      liveurl: "https://t-connect-tarun.netlify.app/",
      github: "https://github.com/tarunkumarkushwaha/T-connect",
      imagesrc: Funphoto,
      serialno: 6,
      backendrepo: "",
      techstackused: "React, Tailwind CSS",
    },
  ],
  contact: {
    email: "tkk.tarunkushwaha05@gmail.com",
    phone: "+91 7400744121",
  },
};

export default portfolioData;
