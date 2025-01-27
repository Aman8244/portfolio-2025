import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'

const CreativeWork = () => {
    const projects = [
        {
            name: "AgriScan",
            imgurl: "/Agriscan.png",
            description: "A plant disease detection app to identify crop health and suggest actionable remedies!",
            url: "/projects/agriscan",
            techstack: ["Javascript", "Nextjs", "Reactjs", "Gemini AI API", "Tailwind CSS"],
        },
        {
            name: "Artisphere",
            imgurl: "/artisphere.png",
            description: "A unique platform where users can sell their own art products and buy different arts.",
            url: "/projects/artisphere",
            techstack: ["Nextjs", "Tailwind CSS", "MongoDB", "REST API"],
        },
        {
            name: "Food Planet",
            imgurl: "/foodplanet.png",
            description: "A Food Ordering System where users can order food from various restaurants and a variety of food items.",
            url: "/projects/foodplanet",
            techstack: ["Reactjs", "Nextjs", "Redux", "Tailwind CSS"],
        },
        {
            name: "UniComplaints",
            imgurl: "/unicomplaints.png",
            description: "A platform where university students can raise complaints with images, and admins can respond to issues by attaching resolved images. Includes a plagiarism check for issues raised.",
            url: "/projects/unicomplaints",
            techstack: ["Express.js", "Nodejs", "Mongodb", "Reactjs", "Tailwind CSS"],
        },
        {
            name: "LiveStock Guardian",
            imgurl: "/livestock-guardian.png",
            description: "Hackathon project (VGU Code Red 3.0) to solve the problem of early disease detection in livestock using AI.",
            url: "/projects/livestockguardian",
            techstack: ["Express.js", "Nodejs", "Reactjs", "Flask", "Machine Learning"],
        },
        {
            name: "Trendy Store (E-Commerce)",
            imgurl: "/trendystore.jpeg",
            description: "An e-commerce app with all basic shopping website functionalities, built using the MERN stack.",
            url: "/projects/trendystore",
            techstack: ["Express.js", "Nodejs", "Mongodb", "Reactjs"],
        },
    ];

    return (
        <div className=' w-[90%] mx-[5%] lg:w-[80%] mt-[10%] md:mt-0 lg:mx-[10%] py-[4%]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3  ">
                <div>
                    <h2 className="text-[#ffff] text-[1.25rem] font-[700] font-[cursive]">All Creative Works.</h2>
                    <div className=''>
                        <p className="text-[#8f9094] font-sans mt-2">Here's some of my projects that I have worked on.</p>
                        <Link href={"/projects"} className='text-[#3CCF91] mt-3 flex space-x-3 items-center justify-start'>
                            Explore more <MoveRight className='w-4 h-4 ml-2' />
                        </Link>
                    </div>
                    <div className='mt-[3rem] md:mt-[10rem]'>
                        {[{
                            name: "Artisphere",
                            imgurl: "/artisphere.png",
                            description: "A unique platform where users can sell their own art products and buy different arts.",
                            url: "/projects/artisphere",
                            techstack: ["Nextjs", "Tailwind CSS", "MongoDB", "REST API"],
                        }].map((el, key) => {
                            return <ProjectCard {...el} key={key} />
                        })}
                    </div>
                </div>

                <div>
                    {[{
                        name: "AgriScan",
                        imgurl: "/Agriscan.png",
                        description: "A plant disease detection app to identify crop health and suggest actionable remedies!",
                        url: "/projects/agriscan",
                        techstack: ["Javascript", "Nextjs", "Reactjs", "Gemini AI API", "Tailwind CSS"],
                    },
                    {
                        name: "LiveStock Guardian",
                        imgurl: "/livestock-guardian.png",
                        description: "Hackathon project (VGU Code Red 3.0) to solve the problem of early disease detection in livestock using AI.",
                        url: "/projects/livestockguardian",
                        techstack: ["Express.js", "Nodejs", "Reactjs", "Flask", "Machine Learning"],
                    }].map((el, key) => {
                        return <div key={key} className='mb-6 md:mb-3'>
                            <ProjectCard {...el} key={key} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CreativeWork