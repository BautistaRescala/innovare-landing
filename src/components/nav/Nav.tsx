'use client';
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import {Link,usePathname,useRouter} from "@/i18n/routing";
import {useTranslations} from 'next-intl';
import clsx from "clsx";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav(){
    const t = useTranslations("Navigation");
    const router = useRouter()
    const current_path = usePathname();

    interface links { [key: string]: string; }
    const links: links= {
        "/":"home",
        "/about":"about"
    }

    //Links
    function generateLinks()
    {return(Object.keys(links).map((key) => (
        <Link key={key} className={
            clsx(current_path == key ? "text-red-950":
                "text-slate-500 hover:text-slate-700","hidden sm:block")
        }
        href={key}>{t(links[key])}</Link>
    )))}
    
    //end Links
    const [isOpen,setOpen] = useState(false);
    function closeSideNav(){
        setOpen(!isOpen)
    }
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
    function sideNavRouteToLink(key:string){
        router.push(key)
        closeSideNav()
    }
    return(
        <TopNav>
            {
            Object.keys(links).map((key) => ( //Top Nav Links
                <Link key={key} href={key} className={
                    clsx(current_path == key ?
                    "text-red-950" :
                    "text-slate-500 hover:text-slate-700",
                    "hidden sm:block")}
                >{t(links[key])}</Link>
                )
            )
            }
            <button onClick={closeSideNav} className="block pr-5 sm:hidden">
                {burgerMenu()}
            </button>

            <SideNav isOpen={isOpen}>
            {//Side Nav Links
            Object.keys(links).map(
                (key) => (
                    <button key={key} onClick={() => sideNavRouteToLink(key)}>
                    {t(links[key])}
                    </button>
                )
            )
            }
            </SideNav>
        </TopNav>
    )
}

