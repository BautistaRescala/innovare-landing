import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher';
import {Dispatch,SetStateAction} from 'react'
import clsx from 'clsx';

export default function SideNav({children,isOpen}:
    {children:React.ReactNode,isOpen:boolean}){
    const t = useTranslations('Navigation');
    return(
        <div //style={{opacity: isOpen ? "1":"0"}}
        className={clsx("fixed h-full w-full top-20 start-0 bg-white transition-all",
            isOpen?
            "opacity-100 visible" :
            "opacity-0 invisible",
        )}>
            {children}
        </div>
    )
}