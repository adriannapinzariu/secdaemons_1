import { useState } from "react"

import Link from "next/link"

export const NavbarItem = ({
    value,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={value.href}
        className={'text-inactive-txt hover:text-white transition-colors pointer-events-auto cursor-pointer flex'}
        >
            {'<'}
            <div
            className={'relative'}
            >
                { `${value.name}` }
                <div 
                className={`h-[1px] absolute -bottom-1 left-[50%] -translate-x-1/2 transition-all mx-auto bg-red-50 opacity-0 ${hovered && 'opacity-100 w-[80%]' || 'w-0'}`}
                />
            </div>
            
            &nbsp;
            {'/>'}
        </Link>
    )
}