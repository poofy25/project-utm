
import Link from 'next/link'
import Image from 'next/image'

import ProfileIcon from '/public/imgs/profile.png'
import MapIcon from '/public/imgs/map.png'
import NotificationsIcon from '/public/imgs/notifications.png'

export default function Navbar ({page}){
    return (
        <nav className='bg-white h-[100px] flex justify-evenly items-center shadow-lg'>
            <Link href='/profile' className={`${page === 'profile' ? 'translate-y-[40%] scale-125 ' : ""} flex bg-white rounded-full p-4`}><div className='relative w-12 h-12'><Image src={ProfileIcon} fill={true}/></div></Link>
            <Link href='/map' className={`${page === 'map' ? 'translate-y-[40%] scale-125 ' : ""} flex bg-white rounded-full p-4`}><div className='relative w-12 h-12'><Image src={MapIcon} fill={true}/></div></Link>
            <Link href='/notifications' className={`${page === 'notifications' ? 'translate-y-[40%] scale-125 ' : ""} flex bg-white rounded-full p-4`}><div className='relative w-12 h-12'><Image src={NotificationsIcon} fill={true}/></div></Link>
        </nav>
    )
}