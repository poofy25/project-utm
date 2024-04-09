'use client'

import Navbar from "@/components/Navbar/Navbar"

import Image from 'next/image'

import AmbulantaImg from '/public/imgs/ambulanta.png'
import PompieriImg from '/public/imgs/pompieri.png'
import PolitieImg from '/public/imgs/politie.png'
import ServiceImg from '/public/imgs/service.png'
import { useState } from "react"


import { useRouter } from "next/navigation"



export default function Emergency () {

    const [selected , setSelected] = useState(null)

    const router = useRouter()


    return (
        <div className="w-full h-[100vh] bg-gray text-black">
            <Navbar page='profile'/>
            <div className="w-full h-full justify-start flex flex-col items-center">
                <h2 className="my-8 text-2xl font-bold">De ce urgență ai nevoie?</h2>
                <div className="flex w-[450px] flex-wrap gap-8 gap-x-16 justify-center">
                    <button onClick={()=>setSelected(1)} className={`${selected === 1 ? "bg-primaryTransparent" : ""} transition-all p-2 rounded-xl bg-transparent font-bold text-xl flex flex-col gap-2 justify-center items-center`}><div className="relative w-[175px] h-[125px]"><Image className="w-full h-full object-contain" src={AmbulantaImg} width='500' height='500'/></div>Ambulanță</button>
                    <button onClick={()=>setSelected(2)} className={`${selected === 2 ? "bg-primaryTransparent" : ""} transition-all p-2 rounded-xl bg-transparent font-bold text-xl flex flex-col gap-2 justify-center items-center`}><div className="relative w-[175px] h-[125px]"><Image className="w-full h-full object-contain" src={PompieriImg} width='500' height='500'/></div>Pompieri</button>
                    <button onClick={()=>setSelected(3)} className={`${selected === 3 ? "bg-primaryTransparent" : ""} transition-all p-2 rounded-xl bg-transparent font-bold text-xl flex flex-col gap-2 justify-center items-center`}><div className="relative w-[175px] h-[125px]"><Image className="w-full h-full object-contain" src={PolitieImg} width='500' height='500'/></div>Poliția</button>
                    <button onClick={()=>setSelected(4)} className={`${selected === 4 ? "bg-primaryTransparent" : ""} transition-all p-2 rounded-xl bg-transparent font-bold text-xl flex flex-col gap-2 justify-center items-center`}><div className="relative w-[175px] h-[125px]"><Image className="w-full h-full object-contain" src={ServiceImg} width='500' height='500'/></div>Service 24/24</button>
                </div>
                <button onClick={()=>{router.push('/map')}} disabled={selected === null ? true : false} className="disabled:opacity-50 mt-8 bg-primary text-white font-semibold w-[400px] py-3 rounded-lg">Continuă</button>
            </div>
        </div>
    )
}