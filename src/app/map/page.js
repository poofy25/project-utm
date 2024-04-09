'use client'

import Navbar from "@/components/Navbar/Navbar"

import Image from 'next/image'

import MapBtn from '/public/imgs/mapBtn.png'
import Link from 'next/link'

export default function Map () {
    return (
        <div className="w-full h-[100vh]">
            <Navbar page='map'/>
            <div className="w-full h-[calc(100vh-100px)]" >
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8281.424691894641!2d28.823265315597194!3d47.02765207820214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1712637340797!5m2!1sen!2s"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <Link href='/emergency' className="absolute z-10 bottom-8 right-8 shadow-lg p-4 bg-white rounded-full border border-solid border-lightRed"><Image src={MapBtn} width='48' height='48'/></Link>
            </div>
        </div>
    )
}