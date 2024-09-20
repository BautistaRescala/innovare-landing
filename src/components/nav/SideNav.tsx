import {Drawer} from 'antd';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher';
import {Dispatch,SetStateAction} from 'react'

export default function SideNav({children,isOpen,setOpen}:
    {children:React.ReactNode,isOpen:boolean,setOpen:Dispatch<SetStateAction<boolean>>}){
    const t = useTranslations('Navigation');
    return(
        <Drawer title={t('navigation')} open={isOpen} 
        onClose={() =>{setOpen(false)}} maskClosable={true} footer={<LocaleSwitcher></LocaleSwitcher>}
         className="text-xl">
            {children}
        </Drawer>
    )
}