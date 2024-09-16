'use client';

import TopNav from "./TopNav";
import {Link,usePathname} from "@/i18n/routing";
import {useTranslations} from 'next-intl';
import clsx from "clsx";


export default function Nav(){
    const t = useTranslations("Navigation");
    const current_path = usePathname();
    const links : any= {
        "/":"home",
        "/about":"about"
    }
    
    function generateLinks()
    {return(Object.keys(links).map((key,value) => (
        <Link className={clsx("text-slate-500 hover:text-slate-700",
        current_path == key ? "text-red-950":"")}
        href={key}>{t(links[key])}</Link>
    )))}//This function generates Links automatically to reuse styles
    
    return(
        <TopNav>
            {generateLinks()}
        </TopNav>
    )
}