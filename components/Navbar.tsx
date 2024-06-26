import { UserButton } from "@clerk/nextjs";
import { Book } from "lucide-react";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";

const quicksand = Quicksand({subsets: ["latin"]})
export default function Navbar(){
    return (
        <div className="flex justify-center">
              <div className="flex justify-between py-4 px-4 items-center lg:w-[50%] md:w-[80%] w-[90%]">
            <div className="flex">
         
         <Link href={'/'}>   <h1 className={"font-medium px-2" + quicksand.className} >📚 VocabulaGRE</h1></Link>
            </div>
            
             <UserButton />
        </div>
        </div>
      
       
    )
}