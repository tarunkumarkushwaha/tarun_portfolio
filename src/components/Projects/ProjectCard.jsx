import React, { useContext } from 'react'
import { Context } from '../../MyContext';


const ProjectCard = ({ item }) => {
    const { darkmode } = useContext(Context);
    return (
        <>
            <div className='relative border border-white md:h-[26rem] h-[20rem] w-60 md:w-[19rem] p-2 hover:scale-105 duration-500 overflow-hidden bg-blue-200 text-blue-950 rounded-md shadow-blue-900 shadow-2xl'>
                <p className='md:p-4 p-1 text-center md:text-2xl text-xl font-medium'>{item.projectname}</p>
                <img className='mx-auto md:h-[35%] h-[25%] md:w-[95%] w-[85%] rounded-md' src={item.imagesrc} alt={item.projectname} />
                <p className='md:p-4 p-1 text-center'>{item.description}</p>
                <p className='md:text-center text-sm text-left absolute bottom-12 md:p-4 p-1'><span className='font-bold'>Build using -</span> {item.techstackused}</p>
                <div className='absolute font-bold text-sm hover:scale-125 duration-500 bottom-0 left-[37%] w-20 m-4 bg-blue-200 cursor-pointer text-center shadow-blue-800 shadow-md mx-auto rounded-md border border-blue-100'><a target="_blank" rel="noopener"
                    href={item.liveurl}>View</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard