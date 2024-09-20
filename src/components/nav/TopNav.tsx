import LocaleSwitcher from '@/components/LocaleSwitcher'
import Image from 'next/image';
import logo from '@/assets/innovare-logo.svg'
export default function TopNav({children}:{children: React.ReactNode;}){

    return(
        <div className="h-24 px-4 bg-gray-200 fixed w-full top-0 start-0 flex justify-between items-center ">
            <Image 
                src={logo} 
                alt="Innovare Logo"
                width={72}
                height={72}>
            </Image>
            {children}
            <div className="hidden sm:block">
            <LocaleSwitcher></LocaleSwitcher>
            </div>
        </div>
    )
}