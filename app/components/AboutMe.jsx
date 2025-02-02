import React from 'react'

const AboutMe = () => {
    return (
        <div className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] py-[4%] flex gap-6 flex-wrap'>
            <div className='w-[100%] md:w-[50%]'>
                <h2 className='font-[serif] font-[700] text-[1.5rem] text-[#ffffeb]'>
                    ⚡ About Me
                </h2>
                <br />
                <div className='text-[#8f9094] font-sans'>
                    Hey! I'm Aman Singh, a passionate Software Developer with hands-on experience and a strong understanding of full-stack web development. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and TypeScript, and I can quickly adapt to other frameworks.
                    <br /><br />
                    With over a year of experience, I’ve built and deployed efficient and scalable applications, focusing on performance and user-friendly design principles. Driven by a passion for continuous learning, I'm always exploring new technologies and expanding my knowledge base.
                    <br /><br />
                    When I'm not coding, I enjoy watching videos and read articles about external affairs and geopolitics , or playing cricket 🔴 or spending quality time with friends.
                </div>
            </div>
            <div className='flex justify-center w-[100%] md:w-[40%] items-center'>
                <img className='rounded-[100%] w-[80%]' src={"/dp.jpg"} alt={"My picture"} width={800} height={800} />
            </div>
        </div>
    )
}

export default AboutMe