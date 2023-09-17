import Image from "next/image";

import { navigations } from "..";
import Link from "next/link";

export default function MainNavbar () {
    return (
        <div className="w-full h-[80px] flex justify-around items-center">
            <div id="nav-image-container" className={'cursor-pointer'}>
                <Image
                src="/brand/logo.png"
                alt="Logo"
                height={80}
                width={100}
                />
            </div>

            <div className={'h-full flex items-center gap-4 text-md'}>
                {/* Iterate through navigations and render each element */}

                {
                    navigations.map((value, index) => (
                        <Link
                        href={value.href}
                        key={index}
                        className={'text-inactive-txt hover:text-white transition-colors pointer-events-auto cursor-pointer'}
                        >
                            { `<${value.name} />`}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}