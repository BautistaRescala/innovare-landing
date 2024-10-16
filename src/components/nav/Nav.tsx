'use client';
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import {Link,usePathname,useRouter} from "@/i18n/routing";
import {useTranslations} from 'next-intl';
import clsx from "clsx";
import { ReactNode, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LocaleSwitcher from "@/components/LocaleSwitcher";


export default function Nav({children}:{children:ReactNode}){
    const t = useTranslations("Navigation");
    const router = useRouter()
    const current_path = usePathname();
    //Change this array to add links to Nav Bars
    interface links { [key: string]: string; }
    const links: links= {
        "/":"home",
        "/services":"services",
        "/about":"about",
    }
    //functionality for opening and closing SideNav
    const [isOpen,setOpen] = useState(false);
    function toggleSideNav(){
        setOpen(!isOpen)
    }
    useEffect(() =>{
        if(isOpen == true){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },
    [isOpen]
    )
    //functionality for SideNav links to work
    function sideNavRouteToLink(key:string){
        router.push(key)
        toggleSideNav()
    }
    //Change BurgerMenu to X depending on state
    function burgerMenu(){
        if(isOpen !== true){
            return(
                <Bars3Icon className="size-6 text-red-950"></Bars3Icon>
            )
        }else{
            return(
                <XMarkIcon className="size-6 text-red-950"></XMarkIcon>
            )
        }
    }
    
    return(
        <div>
        <TopNav>
            <div className="flex justify-end items-center">
                {//Top Nav Links
                    Object.keys(links).map((key) => ( //Top Nav Links
                        <Link key={key} href={key} className={
                            clsx(current_path == key ?
                                "text-red-950" :
                                "text-slate-600 hover:text-slate-900",
                                "hidden md:block mr-16 font-bold")}
                        >{t(links[key])}</Link>
                    )
                    )
                }
                <button onClick={toggleSideNav} className="block pr-5 md:hidden">
                    {burgerMenu()}
                </button>
                <div className="hidden md:block appearance-none font-extrabold">
                <LocaleSwitcher></LocaleSwitcher>
                </div>
            </div>
        </TopNav>
        <SideNav isOpen={isOpen}>
            <div className="h-full flex flex-col items-start mt-8 mb-16 pl-12 pr-16 pb-16 text-xl">
                {//Side Nav Links
                Object.keys(links).map(
                    (key) => (
                    <div key={key} className="mb-6 border-b-2 border-black">
                        <button key={key} onClick={() => sideNavRouteToLink(key)} 
                        className={clsx(current_path == key ?
                                "text-red-950" :
                                "hover:text-slate-900",
                                "font-bold")}>
                        {t(links[key])}
                        </button>
                    </div>
                    )
                )
                }
                <div className="fixed bottom-7 border-b-2 border-black appearance-none font-extrabold">
                    <LocaleSwitcher></LocaleSwitcher>
                </div>
            </div>
        </SideNav>
        {children}
        </div>
    )
}

