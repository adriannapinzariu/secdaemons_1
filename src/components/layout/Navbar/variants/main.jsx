import Image from "next/image";

import { navigations, socials } from "..";
import Link from "next/link";
import { NavbarItem } from "../components";

export default function MainNavbar() {
  return (
    <div className="w-full h-[80px] px-8 md:px-0 flex justify-between md:justify-around items-center fixed top-0 left-0">
      <div id="nav-image-container" className={"cursor-pointer"}>
        <Image src="/brand/logo.png" alt="Logo" height={80} width={100} />
      </div>

      <div className={"h-full hidden items-center gap-4 text-md md:flex"}>
        {/* Iterate through navigations and render each element */}

        {navigations.map((value, index) => (
          <NavbarItem key={index} value={value} />
        ))}

        {/* Iterate through socials and render each element */}

        {socials.map((value, index) => (
          <Link
            href={value.href}
            key={index}
            className={
              "text-inactive-txt hover:text-white transition-colors pointer-events-auto cursor-pointer"
            }
          >
            <Image src={value.src} alt={value.href} height={25} width={25} />
          </Link>
        ))}
      </div>

      <div className={"flex md:hidden"}></div>
    </div>
  );
}
