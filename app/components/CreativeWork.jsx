import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'

const CreativeWork = () => {
  

    return (
        <div className=' w-[90%] mx-[5%] lg:w-[80%] mt-[10rem] md:mt-0 lg:mx-[10%] py-[4%]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3  ">
                <div>
                    <h2 className="text-[#ffff] text-[1.25rem] font-[700] font-[serif]">All Creative Works.</h2>
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
                            url: "https://artisphere-aman-singh.vercel.app/",
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
                        url: "https://github.com/Aman8244/AgriScan",
                        techstack: ["Javascript", "Nextjs", "Reactjs", "Gemini AI API", "Tailwind CSS"],
                    },
                    {
                        name: "LiveStock Guardian",
                        imgurl: "/livestock-guardian.png",
                        description: "Hackathon project (VGU Code Red 3.0) to solve the problem of early disease detection in livestock using AI.",
                        url: "https://github.com/Aman8244/Livestock-Guardian",
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