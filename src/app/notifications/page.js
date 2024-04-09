import Navbar from "@/components/Navbar/Navbar"



export default function Notifications () {
    return (
        <div className="w-full h-[100vh] bg-gray text-black">
            <Navbar page='notifications'/>
            <div className="w-full h-[calc(100vh-100px)] justify-start flex flex-col items-center">
                <h2 className="my-8 text-2xl font-bold">Notificări</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex relative flex-col bg-white rounded-lg w-[450px] p-8">
                        <div className="absolute w-8 h-8 rounded-full bg-orange-500 top-0 left-0 translate-x-[-30%] translate-y-[-30%]"></div>
                        <h3 className="text-xl font-semibold">Accident rutier sectorul Ciocana</h3>
                        <p>str. Mircea Cel Bătrân 134/4</p>
                        <p>ora 18:45</p>
                    </div>
                    <div className="flex relative flex-col bg-white rounded-lg w-[450px] p-8">
                        <div className="absolute w-8 h-8 rounded-full bg-red-500 top-0 left-0 translate-x-[-30%] translate-y-[-30%]"></div>
                        <h3 className="text-xl font-semibold">COD <span className="text-red-500">ROȘU</span>: temperaturi extreme la Nord</h3>
                        <p>Recomandări: Nu părăsiți locuințele Dvs. Nu circulați cu autovehiculele, pericol de depanare.</p>
                    </div>
                    <div className="flex relative flex-col bg-white rounded-lg w-[450px] p-8">
                        <div className="absolute w-8 h-8 rounded-full bg-yellow-500 top-0 left-0 translate-x-[-30%] translate-y-[-30%]"></div>
                        <h3 className="text-xl font-semibold">COD <span className="text-yellow-500">GALBEN</span>:  drum necirculabil</h3>
                        <p>str. Mircea Cel Bătrân 134/4</p>
                        <p>ora 18:45</p>
                    </div>
                </div>
            </div>
        </div>
    )
}