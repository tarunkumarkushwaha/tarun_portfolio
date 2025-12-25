import React, { useContext } from 'react';
import { Context } from '../../MyContext';

const ProjectCard = ({ item }) => {
    const { darkmode } = useContext(Context);

    return (
        <div className="relative flex flex-col w-64 md:w-72 h-[26rem] md:h-[28rem] 
                rounded-xl border border-blue-300 bg-gradient-to-br 
                from-blue-100 to-blue-200 text-blue-950 
                shadow-md hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 overflow-hidden">


            <span className="absolute top-3 right-3 text-xs font-bold 
                   bg-blue-600 text-white px-2 py-1 rounded-full">
                {item.serialno}.
            </span>


            <img
                src={item.imagesrc}
                alt={item.projectname}
                className="h-36 md:h-40 w-full object-cover"
            />


            <div className="flex flex-col flex-1 p-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">
                    {item.projectname}
                </h3>

                <div className="relative mt-2 px-2">
                    <div className="group/desc inline-block">
                        <p className="text-sm text-center text-blue-900 line-clamp-3 cursor-help">
                            {item.description}
                        </p>


                        <div
                            className="pointer-events-none absolute z-30 left-1/2 top-full mt-2 w-64
                 -translate-x-1/2 scale-95 opacity-0
                 rounded-lg bg-blue-950 text-white text-xs p-3
                 shadow-xl transition-all duration-200
                 group-hover/desc:opacity-100
                 group-hover/desc:scale-100"
                        >
                            {item.description}
                        </div>
                        <p className="text-[10px] text-center text-blue-600 mt-1">
                            Hover to read more
                        </p>

                    </div>
                </div>

                <p className="text-xs mt-3 text-center">
                    <span className="font-semibold">Tech:</span>{" "}
                    {item.techstackused}
                </p>


                <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                    {item.liveurl && (
                        <a
                            href={item.liveurl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Live
                        </a>
                    )}

                    {item.apkurl && (
                        <a
                            href={item.apkurl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     bg-green-600 text-white hover:bg-green-700 transition"
                        >
                            APK
                        </a>
                    )}

                    {item.storeurl && (
                        <a
                            href={item.storeurl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     bg-orange-500 text-white hover:bg-orange-600 transition"
                        >
                            Store
                        </a>
                    )}

                    {item.extension && (
                        <a
                            href={item.extension}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     bg-purple-600 text-white hover:bg-purple-700 transition"
                        >
                            Extension
                        </a>
                    )}

                    {item.github && (
                        <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     border border-blue-700 text-blue-700
                     hover:bg-blue-700 hover:text-white transition"
                        >
                            GitHub
                        </a>
                    )}

                    {item.backendrepo && (
                        <a
                            href={item.backendrepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-semibold rounded-md
                     border border-gray-700 text-gray-700
                     hover:bg-gray-700 hover:text-white transition"
                        >
                            Backend
                        </a>
                    )}
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;
