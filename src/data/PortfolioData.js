import Quiztime from '../assets/Img/Productmanager.png';
import Utilitybox from '../assets/Img/Utilitybox.png';
import movieselector from '../assets/Img/movieselector.png';
import Streamflowz from '../assets/Img/Gelatomod.png';
import quizotg from '../assets/Img/quizotg.png';
import Funphoto from '../assets/Img/videoeditor.png';


const portfolioData = {
    name: "Tarun kushwaha",
    profession: "Full Stack Developer",
    skillsSet: [
        {
            "enabled": true,
            "name": "Figma",
            "sequence": 15,
            "percentage": 95
        },
        {
            "enabled": true,
            "name": "Node.js",
            "sequence": 7,
            "percentage": 92
        },
        {
            "enabled": true,
            "name": "MongoDB",
            "sequence": 13,
            "percentage": 70
        },
        {
            "enabled": true,
            "name": "Redux",
            "sequence": 7,
            "percentage": 95
        },
        {
            "enabled": true,
            "name": "Javascript",
            "sequence": 3,
            "percentage": 95
        },
        {
            "enabled": true,
            "name": "Git",
            "sequence": 5,
            "percentage": 95
        },
        {
            "enabled": true,
            "name": "Github",
            "sequence": 11,
            "percentage": 95
        },
        {
            "enabled": true,
            "name": "Next.js",
            "sequence": 6,
            "percentage": 90
        },
        {
            "enabled": true,
            "name": "React",
            "sequence": 5,
            "percentage": 90
        },
        {
            "enabled": true,
            "name": "Tailwind",
            "sequence": 4,
            "percentage": 99
        },
        {
            "enabled": true,
            "name": "CSS",
            "sequence": 2,
            "percentage": 97
        },
        {
            "name": "HTML",
            "sequence": 1,
            "percentage": 98
        }
    ],
    intro: "I started my career as an electrical maintenance engineer before making a successful transition into web development, which I learned independently. Over the past few years, I have built and developed 3 independent projects, refining my skills along the way. I have also worked on two Next.js projects during my 1-year tenure as a frontend developer at S7works and another year as a freelance developer. I am passionate about web development and pride myself on being a self-driven, self-made developer.",
    projects: [
        {
            projectname: "Utility Box",
            description: "utility box is a multi-purpose web app. It has many useful features like notepad, calculator, and todos",
            liveurl: "https://utilityboxreactor.netlify.app/",
            github:"https://github.com/tarunkumarkushwaha/reactor-using-vite",
            imagesrc: Utilitybox,
            serialno: 1,
            techstackused: "react, tailwind, css"
        },
        {
            projectname: "Inventory Manager",
            description: "A product inventory app to track active orders and manage inventory",
            liveurl: "https://product-inventory-manager.vercel.app/",
            github:"https://github.com/tarunkumarkushwaha/productInventoryManager",
            imagesrc: Quiztime,
            serialno: 2,
            techstackused: "React, Tanstack Query, Chakra UI."
        },
        {
            projectname: "Quiz OTG",
            description: "Quiz otg is a test app which lets you customise your test and questions",
            liveurl: "https://quizotg.netlify.app/",
            github:"https://github.com/tarunkumarkushwaha/QuizOTGvite",
            imagesrc: quizotg,
            serialno: 3,
            techstackused: "react, tailwind, css"
        },
        {
            projectname: "Movie selector",
            description: "Movie and show description site with details fetched from free API",
            liveurl: "https://selectyourshow.netlify.app/",
            github:"https://github.com/tarunkumarkushwaha/QuizOTGvite",
            imagesrc: movieselector,
            serialno: 4,
            techstackused: "react, css"
        },
        {
            projectname: "Gelato mod",
            description: "react ui modified clone of gelato site",
            liveurl: "https://gelato-mod-tarun.vercel.app/",
            github:"https://github.com/tarunkumarkushwaha/gelato-mod-tarun",
            imagesrc: Streamflowz,
            serialno: 5,
            techstackused: "react tailwind"
        },
        {
            projectname: "Video editor UI",
            description: "UI for Discoflowzz, a video editor. Backend features are currently in development and will be added soon.",
            liveurl: "https://disco-flowzz-tarun.vercel.app/",
            github:"https://github.com/tarunkumarkushwaha/DiscoFlowzz",
            imagesrc: Funphoto,
            serialno: 5,
            techstackused: "react tailwind "
        },
    ],
    contact: {
        email: "tkk.tarunkushwaha05@gmail.com",
        phone: 7400744121
    }
}

export default portfolioData