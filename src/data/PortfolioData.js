import Quiztime from '../assets/Img/Productmanager.png';
import Utilitybox from '../assets/Img/Utilitybox.png';
import movieselector from '../assets/Img/movieselector.png';
import Streamflowz from '../assets/Img/Gelatomod.png';
import quizotg from '../assets/Img/quizotg.png';
import Funphoto from '../assets/Img/videoeditor.png';

const portfolioData = {
    name: "Tarun Kushwaha",
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
            techstackused: "React, React Native, Express.js, Tailwind CSS, Material UI"
        },
        {
            projectname: "Inventory Manager",
            description: "A product inventory management application to track active orders and inventory levels efficiently.",
            liveurl: "https://product-inventory-manager.vercel.app/",
            github: "https://github.com/tarunkumarkushwaha/productInventoryManager",
            imagesrc: Quiztime,
            serialno: 2,
            techstackused: "React, TanStack Query, Chakra UI"
        },
        {
            projectname: "Utility Box",
            description: "A multi-utility React app (notepad, calculator, weather, dictionary, image search, to-do list). Also published as a browser extension on Microsoft Edge Store.",
            liveurl: "https://utilityboxreactor.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/reactor-using-vite",
            extension: "https://microsoftedge.microsoft.com/addons/detail/utility-tools-extension/odgcbccpihfaomfbdadmmgmonpomimch",
            imagesrc: Utilitybox,
            serialno: 3,
            techstackused: "React, Tailwind CSS"
        },
        {
            projectname: "Movie Selector",
            description: "A movie and TV show details site that fetches information from a free public API.",
            liveurl: "https://selectyourshow.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/selectyourshow",
            imagesrc: movieselector,
            serialno: 4,
            techstackused: "React, CSS"
        },
        {
            projectname: "Gelato Mod",
            description: "A modified UI clone of the Gelato website with an improved layout.",
            liveurl: "https://gelato-mod-tarun.vercel.app/",
            github: "https://github.com/tarunkumarkushwaha/gelato-mod-tarun",
            imagesrc: Streamflowz,
            serialno: 5,
            techstackused: "React, Tailwind CSS"
        },
        {
            projectname: "T-connect",
            description: "A UI demo for a social media task manager app.",
            liveurl: "https://t-connect-tarun.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/T-connect",
            imagesrc: Funphoto,
            serialno: 6,
            techstackused: "React, Tailwind CSS"
        }
    ],
    contact: {
        email: "tkk.tarunkushwaha05@gmail.com",
        phone: "+91 7400744121"
    }
};


export default portfolioData