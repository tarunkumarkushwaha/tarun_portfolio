import React, { useContext } from 'react';
import { Context } from '../../MyContext';

const ProjectCard = ({ item }) => {
    const { darkmode } = useContext(Context);

    return (
        <div className='relative border border-white md:h-[28rem] h-[26rem] w-64 md:w-72 p-4 hover:scale-105 duration-300 bg-blue-200 text-blue-950 rounded-lg shadow-lg overflow-hidden flex flex-col'>
   
            <p className='text-center md:text-2xl text-xl font-semibold mb-2'>{item.projectname}</p>

    
            <img 
                className='mx-auto md:h-40 h-32 w-full object-cover rounded-md' 
                src={item.imagesrc} 
                alt={item.projectname} 
            />

    
            <p className='text-sm text-center mt-2 px-2 line-clamp-3'>{item.description}</p>

        
            <p className='text-sm font-semibold mt-3 text-center px-2'>
                <span className='font-bold'>Built using:</span> {item.techstackused}
            </p>

    
            <div className='mt-auto flex flex-wrap justify-center gap-2'>
             
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href={item.liveurl} 
                    className='w-24 py-2 text-sm font-bold text-center bg-blue-500 text-white hover:bg-blue-600 duration-300 rounded-md shadow-md'
                >
                    Live
                </a>

                {item.apkurl && (
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={item.apkurl} 
                        className='w-24 py-2 text-sm font-bold text-center bg-green-500 text-white hover:bg-green-600 duration-300 rounded-md shadow-md'
                    >
                        APK
                    </a>
                )}

                {item.storeurl && (
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={item.storeurl} 
                        className='w-24 py-2 text-sm font-bold text-center bg-orange-500 text-white hover:bg-orange-600 duration-300 rounded-md shadow-md'
                    >
                        Store
                    </a>
                )}
                {item.extension && (
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={item.extension} 
                        className='w-24 py-2 text-sm font-bold text-center bg-orange-500 text-white hover:bg-orange-600 duration-300 rounded-md shadow-md'
                    >
                        Extension
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
