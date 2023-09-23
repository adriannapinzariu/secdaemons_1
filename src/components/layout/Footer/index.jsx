'use client';

import { usePathname } from 'next/navigation';

// Navbar variants
import FooterBar from './variants/main';

//for get in touch page
export const navigations = [
   
];

export const socials = [
    {
        src: '/social/facebook.svg',
        href: '/',

        src: '/social/instagram.svg',
        href: '/'
    },
];

// This is set up in case that in the future, we want a different navbar rendering on different views, we can use this
// dictionary to map out the different navbar variant to the associated pathname.
const navbarFromPath = {
    '/': <FooterBar />,
};

export default function Footer() {
    const pathname = usePathname();

    if (navbarFromPath[pathname]) {
        return navbarFromPath[pathname];
    }

    // default to the MainNavbar component
    return <FooterBar />;
}
