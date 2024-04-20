import React, { useContext } from 'react'
import { Context } from '../../MyContext';


const ProjectCard = ({ item }) => {
    const { darkmode } = useContext(Context);
    return (
        <>
            <div className='relative h-[24rem] w-80 overflow-hidden bg-blue-200 text-blue-950 rounded-md shadow-blue-800 shadow-md'>
                <p className='p-4 text-center text-2xl font-medium'>{item.projectname}</p>
                <img className='mx-auto h-[35%] w-[95%]' src={item.imagesrc} alt={item.projectname} />
                <p className='p-4 text-center'>{item.description}</p>
                <p className='absolute bottom-12 p-4'><span className='font-bold'>Technologies used -</span> {item.techstackused}</p>
                <div className='absolute font-bold text-sm  hover:scale-125 duration-500 bottom-0 left-[37%] w-20 m-4 bg-blue-200 cursor-pointer text-center shadow-blue-800 shadow-md mx-auto rounded-md border border-blue-100'><a target="_blank" rel="noopener"
                    href={item.liveurl}>View</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard