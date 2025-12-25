import Utilitybox from '../assets/Img/Utilitybox.png';
import movieselector from '../assets/Img/movieselector.png';
import gamebox from '../assets/Img/gamebox.png';
import quizotg from '../assets/Img/quizotg.png';
import Funphoto from '../assets/Img/videoeditor.png';
import filemanager from "../assets/Img/filemanager.png"

const portfolioData = {
    name: "Tarun Kushwaha",
    resume:"https://drive.google.com/file/d/1i6pStZ_srxktQzNP6jzkn01sLQ56iDa9/view?usp=drive_link",
    profession: "Frontend / Full-Stack JavaScript Developer",
    skillsSet: [
        { "enabled": true, "name": "HTML", "sequence": 1, "percentage": 98 },
        { "enabled": true, "name": "CSS", "sequence": 2, "percentage": 97 },
        { "enabled": true, "name": "JavaScript", "sequence": 3, "percentage": 95 },
        { "enabled": true, "name": "Tailwind CSS", "sequence": 4, "percentage": 99 },
        { "enabled": true, "name": "React", "sequence": 5, "percentage": 90 },
        { "enabled": true, "name": "React Native", "sequence": 6, "percentage": 80 },
        { "enabled": true, "name": "Next.js", "sequence": 7, "percentage": 90 },
        { "enabled": true, "name": "Redux", "sequence": 8, "percentage": 95 },
        { "enabled": true, "name": "Node.js", "sequence": 9, "percentage": 92 },
        { "enabled": true, "name": "MongoDB", "sequence": 10, "percentage": 70 },
        { "enabled": true, "name": "Git", "sequence": 11, "percentage": 95 },
        { "enabled": true, "name": "GitHub", "sequence": 12, "percentage": 95 },
        { "enabled": true, "name": "Figma", "sequence": 13, "percentage": 95 },
        { "enabled": true, "name": "Expo", "sequence": 14, "percentage": 75 }
    ],
    intro: "I began my career as an Electrical Maintenance Engineer before making a successful transition into web development, which I learned independently. Over the past 2.5 years, I have worked as a Frontend / Full-Stack Developer at S7Works, Flynt Social, and as a freelancer, building production-ready apps. I have developed and published applications across web, mobile, and browser extensions, including two apps on the Amazon Appstore and a browser extension on the Microsoft Edge Store. I am passionate about creating impactful user experiences and pride myself on being a self-driven developer.",
    projects: [
        {
            projectname: "Quiz OTG",
            description: "A full-stack quiz platform available on web and Android. Features include preloaded quizzes, AI-powered question generation, CSV uploads, and responsive UI. Published on the Amazon Appstore.",
            liveurl: "https://quizotg.netlify.app/",
            apkurl: "https://drive.google.com/file/d/1jkw5TEG9nY0icfMUrEn4uHRpyFTih-kE/view?usp=drive_link",
            storeurl: "https://www.amazon.com/gp/product/B0DTB5FM28",
            github: "https://github.com/tarunkumarkushwaha/QuizOTGvite",
            imagesrc: quizotg,
            serialno: 1,
            backendrepo:"https://github.com/tarunkumarkushwaha/QuizTimeQuestionAPI",
            techstackused: "React, React Native, Express.js, Tailwind CSS, Material UI"
        },
        {
            projectname: "Gamebox",
            description: "A react native game with mini games like simon game, snake water gun, Rock Paper Scissors, craco teeth(comming soon), etc. Note: web preveiw may contain fewer games.",
            liveurl: "https://gamebox--w0pjpgmldq.expo.app",
            github: "https://github.com/tarunkumarkushwaha/memoriseThis",
            imagesrc: gamebox,
            serialno: 2,
            backendrepo:"",
            techstackused: "React Native"
        },
        {
            projectname: "Utility Box",
            description: "A multi-utility React app with everyday tools in one place.Includes a notepad, calendar, task manager, JSON formatter, bar graphs and pie charts generator, age calculator , reminder and countdown timer.The browser extension version adds tools like color picker and regex editor.",
            liveurl: "https://utilityboxreactor.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/reactor-using-vite",
            extension: "https://microsoftedge.microsoft.com/addons/detail/utility-tools-extension/odgcbccpihfaomfbdadmmgmonpomimch",
            imagesrc: Utilitybox,
            serialno: 3,
            backendrepo:"",
            techstackused: "React, Tailwind CSS"
        },
        {
            projectname: "Movie Selector",
            description: "A movie and TV show details site that fetches information from a free public API.",
            liveurl: "https://selectyourshow.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/selectyourshow",
            imagesrc: movieselector,
            serialno: 4,
            backendrepo:"",
            techstackused: "React, CSS"
        },
        {
            projectname: "FileFolder",
            description: "Frontend of file manager app.",
            liveurl: "https://filefolder-one.vercel.app/",
            github: "https://github.com/tarunkumarkushwaha/filefolder",
            imagesrc: filemanager,
            serialno: 5,
            backendrepo:"",
            techstackused: "React, Tailwind CSS"
        },
        {
            projectname: "T-connect",
            description: "A UI demo for a social media task manager app.",
            liveurl: "https://t-connect-tarun.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/T-connect",
            imagesrc: Funphoto,
            serialno: 6,
            backendrepo:"",
            techstackused: "React, Tailwind CSS"
        }
    ],
    contact: {
        email: "tkk.tarunkushwaha05@gmail.com",
        phone: "+91 7400744121"
    }
};


export default portfolioData