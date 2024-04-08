
import Image from "next/image";
import Link from "next/link";

import LogoImg from '/public/imgs/logo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-[281px] h-[408px] relative">
        <Image fill={true} className="object-cover" src={LogoImg}/>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link href="login" className="authLink">Logare</Link>
        <Link href="signup" className="authLink">Înregistrare</Link>
      </div>
    </main>
  );
}
