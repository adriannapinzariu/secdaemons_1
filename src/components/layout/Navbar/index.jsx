'use client';

import { usePathname } from 'next/navigation';

// Navbar variants
import MainNavbar from './variants/main';

export const navigations = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Events',
        href: '/'
    },
    {
        name: 'Sponsors',
        href: '/'
    },
    {
        name: 'Conference',
        href: '/'
    }
]

export const socials = [
    {
        src: '/social/discord.svg',
        href: '/'
    }
]

// This is set up in case that in the future, we want a different navbar rendering on different views, we can use this 
// dictionary to map out the different navbar variant to the associated pathname. 
const navbarFromPath = {
    '/': <MainNavbar />,
}

export default function Navbar () {
    const pathname = usePathname();

    if (navbarFromPath[pathname]) {
        return navbarFromPath[pathname];
    }
    
    // default to the MainNavbar component
    return <MainNavbar />
}