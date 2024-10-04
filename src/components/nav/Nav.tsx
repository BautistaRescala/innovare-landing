'use client';
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import {Link,usePathname} from "@/i18n/routing";
import {useTranslations} from 'next-intl';
import clsx from "clsx";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Nav(){
    const t = useTranslations("Navigation");
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
    function generateSideLinks()
    {return(Object.keys(links).map((key) => (
        <Link key={key} className={
            clsx(current_path == key ? "text-red-950":
                "text-slate-500 hover:text-slate-700","m-3 block")
        }
        href={key}>{t(links[key])}</Link>
    )))}
    //end Links
    const [isOpen,setOpen] = useState(false);
    function handleClick(){
        setOpen(!isOpen)
    }
    return(
        <TopNav>
            {generateLinks()}
            <button onClick={handleClick} className="block pr-6 sm:hidden">
                <Bars3Icon className="size-6 text-red-950"></Bars3Icon>
            </button>
            <SideNav isOpen={isOpen} setOpen={setOpen}>
            {generateSideLinks()}
            </SideNav>
        </TopNav>
    )
}