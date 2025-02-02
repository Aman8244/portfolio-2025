import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "TheGoodGameTheory",
            content: (
                <div>
                    <div
                        className="text-[#ffff] text-[1.2rem] font-normal mb-8">
                        <strong>Reactjs Developer</strong><br />
                        <span className="text-[#8f9094]">
                            Febraury 2025 - Present
                        </span>
                    </div>
                </div>
            ),
        },
        {
            title: "CampaignSwift",
            content: (
                <div>
                    <div
                        className="text-[#ffff] text-[1.2rem] font-normal mb-8">
                        <strong>ReactJS Intern</strong><br />
                        <span className="text-[#8f9094]">
                            January 2025 - Febraury 2025
                        </span>
                    </div>
                    <ul className="list-disc pl-5 text-[#8f9094] text-sm font-normal mb-8">
                        <li>Assisting in the development of new web applications.</li>
                        <li>Maintaining and updating existing applications.</li>
                        <li>Collaborating with team members to contribute to ongoing projects.</li>
                        <li>Ensuring code quality and adhering to best practices.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Freelance",
            content: (
                <div>
                    <p
                        className="text-[#ffff] text-[1.2rem] font-normal mb-8">
                        <strong>Full Stack Developer</strong><br />
                        <span className="text-[#8f9094]">
                            October 2024 - December 2024
                        </span>
                    </p>
                    <ul className="list-disc pl-5 text-[#8f9094] text-sm font-normal mb-8">
                        <li>Developed and deployed web applications using Next.js for server-side rendering and optimized performance.</li>
                        <li>Utilized Javascript and TypeScript to build scalable, type-safe, and maintainable codebases.</li>
                        <li>Implemented user-friendly interfaces with a focus on responsive and accessible design principles.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Bristlecone",
            content: (
                <div>
                    <p
                        className="text-[#ffff] text-[1.2rem] font-normal mb-8">
                        <strong>SAP Ariba Intern</strong><br />
                        <span className="text-[#8f9094]">
                            July 2024 - October 2024
                        </span>
                    </p>
                    <ul className="list-disc pl-5 text-[#8f9094] text-sm font-normal mb-8">
                        <li>Learned the fundamentals of SAP Ariba modules, including Upstream and Downstream modules.</li>
                        <li>Gained a foundational understanding of supply chain management and its practical applications.</li>
                        <li>Explored workflows and industry best practices for enhancing procurement and supply chain efficiency.</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline className="bg-transparent" data={data} />
        </div>
    );
}

const Experience = () => {
    return (
        <div className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] my-10'>
            <div>
                <TimelineDemo />
            </div>
        </div>
    )
}

export default Experience