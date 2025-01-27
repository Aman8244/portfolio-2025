"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Seperator from './Seperator'
import { useRouter } from 'next/navigation'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ name, imgurl, description, url, techstack }) => {

    const router = useRouter();
    const frameworks = ["Nextjs","Reactjs","Flask","Nodejs"];
    const CSS = ["Tailwind CSS", "CSS"];
    const Languages = ["Javascript","Python","C++"];

    return (
        <Card className='h-fit mb-3 bg-transparent rounded-t-lg border-[#2d2d2d] m-0 p-0 border' >
            <div >
                <Image className='rounded-t-lg w-full max-h-[15rem]' src={imgurl} alt='project img' width={600} height={1000} />
            </div>
            <CardContent>
                <div className="text-[#ffff] text-[1.5rem] font-[600] my-3 flex cursor-pointer" onClick={() => router.push(url)}>
                    <div className='w-[80%] items-center justify-start'>
                        {name}
                    </div>
                    <div className='w-[20%] flex items-center justify-end'>
                        <ExternalLink className='w-8 h-8' />
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {techstack?.map((el, key) => <span className={`text-[#ffff] p-2 my-2 rounded-[0.375rem] text-[0.875rem] min-w-[1.5rem] min-h-[1.5rem] font-[600] items-center text-center ${(frameworks.includes(el)?"text-[#9ae684] bg-[#9ae6b429]":Languages.includes(el)?"bg-[#faf08929] text-[#faf089]":CSS.includes(el)?"text-[#fbb6ce] bg-[#fbb6ce29]":"text-[#e2e8f0] bg-[#e2e8f029]")}  `} key={key}>{el}</span>)}
                </div>
                <Seperator />
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default ProjectCard