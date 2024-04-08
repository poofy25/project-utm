
import Image from "next/image";
import Link from "next/link";

import LogoImg from '/public/imgs/logo.png'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-[140px] h-[204px] relative">
        <Image fill={true} className="object-cover" src={LogoImg}/>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold my-6">Înregistrativă la HELP.md</h2>
        <form className="flex flex-col gap-4 items-center">
          <input required type="email" placeholder="Email"/>
          <input required type="text" placeholder="IDNP Dvs. (format din 16 cifre)"/>
          <input required type="password" placeholder="Parola"/>
          <label className="cursor-pointer flex flex-row-reverse gap-4 relative">Sunt de acord cu termenii de utilizare și politica de confidențialitate.
            <input required className="absolute left-[13px] top-[10px] opacity-0 cursor-pointer h-[1px] w-[1px]" type="checkbox"/>
            <span className="flex justify-center items-center relative overflow-hidden h-[25px] w-[25px] bg-transparent border border-solid border-primary rounded-full customCheck"></span>
          </label>
          <button className="authLink" type="submit">Înregistrare</button>
        </form>
        <div className="flex">
          <p>Aveți cont? &nbsp;</p><Link href="/login" className="text-primary">Conectați-vă</Link>
        </div>
      </div>
    </main>
  );
}
