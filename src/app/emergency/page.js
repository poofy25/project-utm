import Navbar from "@/components/Navbar/Navbar"

import Image from 'next/image'

import ProfilePlaceholder from '/public/imgs/profilePlaceholder.png'

export default function Emergency () {
    return (
        <div className="w-full h-[100vh] bg-gray text-black">
            <Navbar page='profile'/>
            <div className="w-full h-full justify-start flex flex-col items-center">
                <h2 className="my-8 text-2xl font-bold">De ce urgență ai nevoie?</h2>
                
            </div>
        </div>
    )
}