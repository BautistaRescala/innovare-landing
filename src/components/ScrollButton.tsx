'use client';
import { Outfit } from "next/font/google";
const contentfont = Outfit({subsets:['latin']})

import { useTranslations } from "next-intl";

export default function ScrollButton(){
    const t = useTranslations('HomePage')
    return(
    <button onClick={()=> window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className={`${contentfont.className} text-2xl border-b-4 relative top-12 left-2 border-red-950 hover:text-red-950 transition-all`}>{t("Contact")}</button>
    )
}