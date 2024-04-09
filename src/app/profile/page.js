import Navbar from "@/components/Navbar/Navbar"

import Image from 'next/image'

import ProfilePlaceholder from '/public/imgs/profilePlaceholder.png'

export default function Profile () {
    return (
        <div className="w-full h-[100vh] bg-gray text-black">
            <Navbar page='profile'/>
            <div className="w-full h-full justify-start flex flex-col items-center">
                <h2 className="my-8 text-2xl font-bold">Setările profilului</h2>
                <div className="mb-8 relative h-[200px] w-[200px] "><Image className="object-cover rounded-full" src={ProfilePlaceholder} fill={true}/></div>
                <div className="flex flex-col gap-2">
                    <div className="flex text-lg"><p className="w-[200px]">Nume, Prenume</p><p className="font-semibold">Vlada Topada</p></div>
                    <div className="flex text-lg"><p className="w-[200px]">IDNP</p><p>1234567891234567</p></div>
                    <div className="flex text-lg"><p className="w-[200px]">Nr. de telefon</p><p>0(69)-523-008</p></div>
                    <div className="flex text-lg"><p className="w-[200px]">Email</p><p>email@gmail.com</p></div>
                    <div className="flex text-lg"><p className="w-[200px]">Permis de conducere</p><p>Da</p></div>
                    <div className="flex text-lg"><p className="w-[200px]">Categoria</p><p>B B1</p></div>
                </div>
            </div>
        </div>
    )
}