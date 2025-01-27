"use client"
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-inputs';
import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react'

const GetInTouchForm = () => {
    const [data, setData] = useState("");

    const { toast } = useToast();

    const placeholders = [
        "Leave a message here.",
        "What's your name?",
        "What's your email address?",
        "Feel free to share your thoughts!",
        "Where can we reach you?",
        "What's on your mind?",
        "Enter your full name here.",
        "Enter your email here.",
        "Please provide a valid email address.",
    ];


    const handleInputChange = (e) => {
        setData(e.target.value);
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch("/api/contactme", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: data })
            }).then(() => {
                console.log("here")
                toast({
                    title: "Thank you for reaching out !!",
                    description: "I received your message and will get back to you soon !",
                })
            })

            setData("");

        } catch (error) {
            console.log("Error Occured:", error);
            toast({
                title: "Something went wrong",
                description: "Please try again later.",
                variant: "destructive",
            });
        }
    }


    return (
        <div className='flex md:mx-0 md:w-full w-[80%] mx-[10%] items-center justify-center  '>

            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleInputChange}
                onSubmit={handleFormSubmit}
            />
        </div>
    )
}

export default GetInTouchForm