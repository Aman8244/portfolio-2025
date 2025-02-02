"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Seperator from '../components/Seperator'
import ProjectsDb from '@/utils/ProjectsDb';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

const Projects = () => {
    const [projects, setProjects] = useState();
    const [inputText, setInputText] = useState("");
    useEffect(() => {
        setProjects(ProjectsDb);
    }, [ProjectsDb])
    const handleSearch = (e) => {
        setInputText(e.target.value);
        if (e.target.value != "") {
            setProjects(() => {
                return ProjectsDb.filter((el) => el.name.toLowerCase().includes(e.target.value?.toLowerCase()) || el.description.toLowerCase().includes(e.target.value?.toLowerCase()))
            })
        }
        else {
            setProjects(ProjectsDb);
        }
    }

    return (
        <div className='min-h-screen pb-[3rem]  px-[3%] bg-[#000000f1] text-[#ffffffeb]'>
            <Navbar />
            <Seperator />
            <div className='mb-[2.5rem]'>
                <div className='text-[2.25rem] md:text-[3.75rem] font-[500]'>
                    Projects
                </div>
                <p className=" text-[12px] mt-[1rem] md:mt-0 md:text-[16px] text-[#ffffeb]">I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
                <div className='mt-[1.25rem] max-w-[400px] flex relative'>
                    <div className="absolute right-0 flex items-center w-[2.5rem] h-[2.5rem] justify-center top-0 text-[1rem]">
                        <svg stroke="#ffff" fill="#ffff" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </div>
                    <input value={inputText} onChange={handleSearch} placeholder="Search projects" type="text" className=" w-[100%] min-w-0 relative text-[1rem] border rounded-[0.375rem] h-[2.5rem] pl-[1rem] pr-[2.5rem] bg-transparent border-[#ffffff3d] " />
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {projects && projects.map((el, key) => {
                        return <ProjectCard {...el} key={key} />
                    })}

                </div>
                {!projects && <div className='flex items-center justify-center min-h-[30vh]'>
                    <div>
                        <Image src={"/icons8-loading.gif"} width={50} height={50} alt='loader' />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Projects