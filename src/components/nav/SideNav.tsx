import { useTranslations } from 'next-intl';
import clsx from 'clsx';

export default function SideNav({children,isOpen}:
    {children:React.ReactNode,isOpen:boolean}){
    const t = useTranslations('Navigation');
    return(
        <div //style={{opacity: isOpen ? "1":"0"}}
        className={clsx("fixed z-50 h-screen w-screen top-20 start-0 bg-white transition-all overscroll-none overflow-hidden",
            isOpen?
            "opacity-100 visible" :
            "opacity-0 invisible",
        )}>
            {children}
        </div>
    )
}