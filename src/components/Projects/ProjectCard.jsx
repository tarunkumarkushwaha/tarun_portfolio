import React, { useContext } from 'react';
import { Context } from '../../MyContext';

const ProjectCard = ({ item }) => {
  const { darkmode } = useContext(Context);

  const techTags = item.techstackused ? item.techstackused.split(',') : [];

  return (
    <div className={`group relative flex flex-col h-[500px] rounded-3xl border transition-all duration-500  hover:scale-105
      ${darkmode 
        ? "bg-slate-900/40 border-white/10 hover:border-blue-500/50 shadow-2xl shadow-blue-900/10" 
        : "bg-white border-slate-200 hover:border-blue-400 shadow-xl shadow-slate-200/50"} 
      hover:-translate-y-2 overflow-hidden`}
    >
      
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.imagesrc}
          alt={item.projectname}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <span className="text-white text-xs font-mono uppercase tracking-widest">Project 0{item.serialno}</span>
        </div>
      </div>


      <div className="flex flex-col flex-1 p-6">
        <h3 className={`text-xl font-bold mb-3 ${darkmode ? "text-white" : "text-slate-900"}`}>
          {item.projectname}
        </h3>

        <div className="relative group/desc mb-4">
          <p className={`text-sm line-clamp-3 leading-relaxed ${darkmode ? "text-slate-400" : "text-slate-600"}`}>
            {item.description}
          </p>

          <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-full scale-95 opacity-0 rounded-xl 
            bg-slate-800 text-white text-xs p-4 shadow-2xl transition-all duration-200 group-hover/desc:opacity-100 group-hover/desc:scale-100 border border-white/10 z-50">
            {item.description}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {techTags.map((tech, idx) => (
            <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider
              ${darkmode ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-50 text-blue-600 border border-blue-100"}`}>
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {item.liveurl && (
            <a href={item.liveurl} target="_blank" rel="noreferrer" 
               className="flex-1 text-center py-2 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
              Live
            </a>
          )}
          {item.github && (
            <a href={item.github} target="_blank" rel="noreferrer"
               className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all
               ${darkmode ? "border-white/10 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              Github
            </a>
          )}
          {item.backendrepo && (
            <a href={item.backendrepo} target="_blank" rel="noreferrer"
               className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all
               ${darkmode ? "border-white/10 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              Backend
            </a>
          )}
          {item.apkurl && (
            <a href={item.apkurl} target="_blank" rel="noreferrer"
               className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all
               ${darkmode ? "border-white/10 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              Apk
            </a>
          )}
          {item.extension && (
            <a href={item.extension} target="_blank" rel="noreferrer"
               className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all
               ${darkmode ? "border-white/10 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              Extension
            </a>
          )}
          {item.storeurl && (
            <a href={item.storeurl} target="_blank" rel="noreferrer"
               className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all
               ${darkmode ? "border-white/10 text-white hover:bg-white/10" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
