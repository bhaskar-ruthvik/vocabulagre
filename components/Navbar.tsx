import { UserButton } from "@clerk/nextjs";

import { Quicksand } from "next/font/google";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import TabSwitcher from "./TabSwitcher";

const quicksand = Quicksand({subsets: ["latin"]})
export default function Navbar(){
    return (
        <div className="flex justify-center">
              <div className="grid grid-cols-3 grid-row-1 py-4 px-4 items-center md:w-[90%] w-[90%]">
            <div className="flex">
         
         <Link href={'/'} className="p-0">   <h1 className={"font-medium px-2" + quicksand.className} >📚 VocabulaGRE</h1></Link>
            </div>
            <div className="flex items-center justify-center">
            <TabSwitcher />
            </div>
          <div className="flex justify-end">
          <UserButton />
          </div>
         
        </div>
        </div>
      
       
    )
}