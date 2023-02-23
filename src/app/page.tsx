import Image from "next/image";
import { Kumbh_Sans } from '@next/font/google'

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${kumbhSans.className} px-6 flex flex-col h-screen justify-center items-center`}>
            <Image className={"fixed top-[-168px] left-[-168px] opacity-25 lg:hidden"} src={"/images/bg-pattern-top.svg"}
                   alt={"Victor's image"} width={622} height={622}/>
            <Image className={"fixed bottom-[-168px] right-[-168px] opacity-25 lg:hidden"} src={"/images/bg-pattern-bottom.svg"} width={622} height={622}
                   alt={"Victor's image"}/>

            <Image className={"fixed top-[-478px] left-[-318px] opacity-25 max-lg:hidden"} src={"/images/bg-pattern-top.svg"}
                   alt={"Victor's image"} width={978} height={978}/>
            <Image className={"fixed bottom-[-478px] right-[-318px] opacity-25 max-lg:hidden"} src={"/images/bg-pattern-bottom.svg"} width={978} height={978}
                   alt={"Victor's image"}/>

            <div className={"rounded-2xl shadow-card w-full bg-white border-none max-w-[350px]"}>
                <div className={"relative h-[140px] w-full"}>
                    <Image className={"rounded-t-2xl"} src={"/images/bg-pattern-card.svg"} fill
                           alt={"Background image"}/>
                </div>

                <div className={"relative"}>
                    <Image className={"rounded-full absolute top-[-48px] border-white border-[5px] mx-auto left-0 right-0"} src={"/images/image-victor.jpg"} width={96} height={96}
                           alt={"Victor's image"}/>

                    <div className={"text-grey text-lg pb-6 pt-[72px] flex flex-col items-center"}>
                        <h1 className={"flex gap-2.5"}>
                            <span className={"text-black font-bold"}>Victor Crest</span>
                            <span>26</span>
                        </h1>
                        <h2 className={"text-sm"}>London</h2>
                    </div>

                    <div className={"flex py-6 border-lightGrey border-t flex justify-evenly"}>
                        <div className={"text-center"}>
                            <div className={"text-lg text-black font-bold"}>80K</div>
                            <div className={"text-grey text-[10px] leading-[12px]"}>Followers</div>
                        </div>
                        <div className={"text-center"}>
                            <div className={"text-lg text-black font-bold"}>803K</div>
                            <div className={"text-grey text-[10px] leading-[12px]"}>Likes</div>
                        </div>
                        <div className={"text-center"}>
                            <div className={"text-lg text-black font-bold"}>1.4K</div>
                            <div className={"text-grey text-[10px] leading-[12px]"}>Photos</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
