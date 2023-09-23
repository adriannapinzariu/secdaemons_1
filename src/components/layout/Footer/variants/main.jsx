import Image from 'next/image';

import { navigations, socials } from '../../Navbar';
import Link from 'next/link';

export default function FooterBar() {
    return (
        <div className="w-full outline outline-1 pt-[100px] flex justify-around bg-red items-center fixed bottom-0 left-0">
           <div id="nav-image-container" className={'cursor-pointer'}>
                <Image src="/brand/logo.png" alt="Logo" height={10} width={200} />
            </div>
            hi
        </div>
    );
}
