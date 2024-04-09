'use client'

import Image from "next/image";

import NotificationsIcon from '/public/imgs/notifications.png'

import { useRouter } from "next/navigation"


export default function Login() {

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/login")
  }

  return (
    <main className="flex min-h-screen max-h-screen overflow-hidden flex-col items-center justify-center bg-white">
        <Image className="object-cover absolute rotate-[65deg] top-[120px] left-[10%] scale-50" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[164deg] top-[20px] left-[82%] scale-70" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[23deg] top-[510px] left-[25%] scale-100" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[-24deg] top-[420px] left-[75%] scale-55" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[-65deg] top-[124px] left-[37%] scale-25" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[-145deg] top-[320px] left-[12%] scale-175" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[115deg] top-[373px] left-[91%] scale-200" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[-124deg] top-[274px] left-[67%] scale-[150%]" src={NotificationsIcon} width='64' height='64'/>
        <Image className="object-cover absolute rotate-[-12deg] top-[560px] left-[36%] scale-100" src={NotificationsIcon} width='64' height='64'/>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-bold my-6 text-black">Am uitat parola</h2>
        <p className="text-grayText">Introdu email-ul tău cu care te-ai înregistrat la HELP.md</p>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input className="bg-gray text-black" required type="email" placeholder="email@gmail.com"/>
          <button className="authLink !bg-primary font-bold" type="submit">Resetare</button>
        </form>
      </div>
    </main>
  );
}
