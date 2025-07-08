import Quiztime from '../assets/Img/Productmanager.png';
import Utilitybox from '../assets/Img/Utilitybox.png';
import movieselector from '../assets/Img/movieselector.png';
import Streamflowz from '../assets/Img/Gelatomod.png';
import quizotg from '../assets/Img/quizotg.png';
import Funphoto from '../assets/Img/videoeditor.png';

const portfolioData = {
    name: "Tarun Kushwaha",
    profession: "Frontend Developer & React Native Developer",
    skillsSet: [
        { "enabled": true, "name": "Figma", "sequence": 9, "percentage": 95 },
        { "enabled": true, "name": "Node.js", "sequence": 8, "percentage": 92 },
        { "enabled": true, "name": "MongoDB", "sequence": 10, "percentage": 70 },
        { "enabled": true, "name": "Redux", "sequence": 7, "percentage": 95 },
        { "enabled": true, "name": "JavaScript", "sequence": 3, "percentage": 95 },
        { "enabled": true, "name": "Git", "sequence": 5, "percentage": 95 },
        { "enabled": true, "name": "GitHub", "sequence": 11, "percentage": 95 },
        { "enabled": true, "name": "Expo", "sequence": 12, "percentage": 75 },
        { "enabled": true, "name": "Next.js", "sequence": 7, "percentage": 90 },
        { "enabled": true, "name": "React", "sequence": 5, "percentage": 90 },
        { "enabled": true, "name": "React Native", "sequence": 6, "percentage": 80 },
        { "enabled": true, "name": "Tailwind CSS", "sequence": 4, "percentage": 99 },
        { "enabled": true, "name": "CSS", "sequence": 2, "percentage": 97 },
        { "enabled": true, "name": "HTML", "sequence": 1, "percentage": 98 }
    ],
    intro: "I started my career as an electrical maintenance engineer before making a successful transition into web development, which I learned independently. Over the past few years, I have built and developed 3 independent projects, refining my skills along the way. I have also worked on two Next.js projects during my 3-year tenure as a frontend developer at S7works, flynt social and as a freelance developer. I am passionate about web development and pride myself on being a self-driven, self-made developer.",
    projects: [
        {
            projectname: "Quiz OTG",
            description: "A test and quiz application featuring preloaded content for JavaScript, HTML, CSS, React, and more. Users can also create custom tests. Extended into an Android app using React Native and Expo.",
            liveurl: "https://quizotg.netlify.app/",
            apkurl: "https://drive.google.com/file/d/1jkw5TEG9nY0icfMUrEn4uHRpyFTih-kE/view?usp=drive_link",
            storeurl: "https://www.amazon.com/gp/product/B0DTB5FM28",
            github: "https://github.com/tarunkumarkushwaha/QuizOTGvite",
            imagesrc: quizotg,
            serialno: 1,
            techstackused: "React, React Native, Tailwind CSS, Firebase"
        },
        {
            projectname: "Inventory Manager",
            description: "A product inventory management application to track active orders and inventory levels efficiently.",
            liveurl: "https://product-inventory-manager.vercel.app/",
            github: "https://github.com/tarunkumarkushwaha/productInventoryManager",
            imagesrc: Quiztime,
            // storeurl:"",
            // apkurl:"",
            serialno: 2,
            techstackused: "React, TanStack Query, Chakra UI"
        },
        {
            projectname: "Utility Box",
            description: "A multi-utility web application featuring a notepad, calculator, clock, dictionary, weather forecast, image search, and to-do list.",
            liveurl: "https://utilityboxreactor.netlify.app/",
            github: "https://github.com/tarunkumarkushwaha/reactor-using-vite",
            extension:"https://github.com/tarunkumarkushwaha/utilitybox",
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
            description: "A UI demo for social media task manager",
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