import React from 'react';

const Resume = () => {
    return (
        <>
        <button onClick={()=>{window.location.pathname = "/"}}>home</button>
            <div className="max-w-4xl mx-auto my-10 p-10 bg-white shadow-lg">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold">TARUN KUSHWAHA</h1>
                    <h2 className="text-xl text-gray-600">FRONTEND DEVELOPER</h2>
                    <div className="mt-4">
                        <p>Email: <a href="mailto:tkk.tarunkushwaha05@gmail.com" className="text-blue-500">tkk.tarunkushwaha05@gmail.com</a></p>
                        <p>Phone: +917400744121</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/tarun-kumar-kushwaha/" className="text-blue-500">linkedin.com/in/tarun-kumar-kushwaha</a></p>
                        <p>GitHub: <a href="https://github.com/tarunkumarkushwaha" className="text-blue-500">github.com/tarunkumarkushwaha</a></p>
                        <p>Portfolio: <a href="https://tarunkushwahaportfolio.netlify.app/" className="text-blue-500">tarunkushwahaportfolio.netlify.app</a></p>
                    </div>
                </header>
                <section className="mb-8">
                    <h3 className="bg-blue-500 text-white p-2 text-xl">ABOUT</h3>
                    <p>Following experience as an electrical engineer, I transitioned into web development, pursuing independent learning. Additionally, I contributed skills as a frontend developer at S7Works. Now seeking challenging roles as a developer to leverage my diverse background and technical skill.</p>
                </section>
                <section className="mb-8">
                    <h3 className="bg-blue-500 text-white p-2 text-xl">SKILLS</h3>
                    <ul className="list-none pl-0">
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">Languages: JavaScript, Golang</li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Remix Js, Figma, Redux, Bootstrap, REST API Integration</li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">Backend: DSA, Node.js, Express.js, MongoDB, Mongoose</li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">Development Tools: VS Code, Chrome DevTools, Postman, Figma, Git, GitHub</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="bg-blue-500 text-white p-2 text-xl">EXPERIENCE</h3>
                    <h4 className="mt-2 text-lg font-bold">S7Works (Jan 2023 - Dec 2023)</h4>
                    <p className="font-semibold">Frontend Developer:</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Workhub:</strong> Online work tracker facilitating employee monitoring. Addressed UI issues and resolved bugs, ensuring smooth user experience. Implemented API integration for client billing and productivity tracking functionalities.</li>
                        <li><strong>Bitwork.ai:</strong> AI-powered platform leveraging ChatGPT for creating notebooks and AI prompts. Collaborated on Bitwork's development, focusing on the sign-in page and prompt UI. Integrated APIs to enable notebook creation and prompt generation features.</li>
                    </ul>
                    <h4 className="mt-4 text-lg font-bold">Other Experiences:</h4>
                    <p>Content Writer (July 2022 - Nov 2022)</p>
                    <p>Electrical Maintenance Engineer (July 2018 - March 2020)</p>
                </section>
                <section className="mb-8">
                    <h3 className="bg-blue-500 text-white p-2 text-xl">PERSONAL PROJECTS</h3>
                    <ul className="list-none pl-0">
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">
                            <strong>Quiz OTG:</strong> A React app for test creation and quizzes with a seamless user experience, using React and Tailwind for the frontend, Express for the backend, and MongoDB for the database. <a href="https://quizotg.netlify.app/" className="text-blue-500">quizotg.netlify.app</a>
                        </li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">
                            <strong>Utilitybox:</strong> A React app encompassing various utilities such as a notepad, calculator, clock, dictionary, weather forecast, image search, and to-do list, enhancing productivity and user experience. React and Tailwind are utilized for the frontend. <a href="https://utilityboxreactor.netlify.app/" className="text-blue-500">utilityboxreactor.netlify.app</a>
                        </li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">
                            <strong>Streamflowzz:</strong> A music player with a seamless playback experience, playlists, and audio controls, utilizing HTML, CSS, and JavaScript.
                        </li>
                        <li className="bg-gray-100 p-2 my-1 border-l-4 border-blue-500">
                            <strong>Movieselector:</strong> A React app displaying movie details from a free API for selecting viewing choices, utilizing React and Tailwind for the frontend. <a href="https://selectyourshow.netlify.app/" className="text-blue-500">selectyourshow.netlify.app</a>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="bg-blue-500 text-white p-2 text-xl">EDUCATION</h3>
                    <p>Bachelor of Electrical and Electronics Engineering, 2018, with a GPA of 7.0.</p>
                    <p>Oriental Institute of Science and Technology, Bhopal, MP</p>
                </section>
            </div>
        </>
    );
}

export default Resume;
