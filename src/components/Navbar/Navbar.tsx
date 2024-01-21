'use client'

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from '@/navigation';

import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import LanguageSwitcher from '@/components/Navbar/Partials/LanguageSwitcher';

export default function Navbar(props: any) {
    const transNavbar = useTranslations('Navbar');

    const itemRenderer = (item: any) => (
        <a className='flex items-center p-menuitem-link font-semibold'>
            <span className='mx-2'>
                {transNavbar(item.label)}
            </span>
        </a>
    );

    const items: MenuItem[] = [
        {
            label: 'Home',
            template: itemRenderer
        },
        {
            label: 'About',
            template: itemRenderer
        },
        {
            label: 'Resume',
            template: itemRenderer
        },
        {
            label: 'Portfolio',
            template: itemRenderer
        },
        {
            label: 'Contact',
            template: itemRenderer
        }
    ];

    const start = (
        <div className='flex flex-row gap-3 items-center'>
            <Avatar template={ <Image src='img/profile.jpg' alt='Profile' width='250' height='250' pt={{ image: { className: 'border-2 drop-shadow-lg' } }} /> } shape='circle' size='large' />
            <span className='font-bold text-xl'>
                NAO
            </span>
        </div>
    );

    const end = (
        <LanguageSwitcher />
    );
    
    return (
        <Menubar model={ items } start={ start } end={ end } pt={ { 
            root: { className: 'h-16 !rounded-none !px-16 ' + props.font },
            menu: { className: '!ml-auto' },
            end: { className: '!ml-0' }
        } } />
    )
}