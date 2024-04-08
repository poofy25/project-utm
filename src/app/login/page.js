
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
        <h2 className="text-2xl font-bold my-6">Conectați-vă la HELP.md</h2>
        <form className="flex flex-col gap-4 items-center">
          <input required type="text" placeholder="IDNP Dvs. (format din 16 cifre)"/>
          <input required type="password" placeholder="Parola"/>
          <Link href="/resetpassword" className="text-primary">Ați uitat parola?</Link>
          <button className="authLink" type="submit">Logare</button>
        </form>
        <div className="flex">
          <p>Nu aveți cont? &nbsp;</p><Link href="signup" className="text-primary">Înregistrați-vă</Link>
        </div>
        <p className="text-sm mt-8">Continuând, sunteți de acord cu termenii de utilizare și politica de confidențialitate.</p>
      </div>
    </main>
  );
}
