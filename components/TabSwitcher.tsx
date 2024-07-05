"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabSwitcher(){
    const path = usePathname()
    const [idx,setIdx] = useState(path!=="/word/flashcards")
    return (
        <div className="bg-neutral-800 p-1 rounded-xl">
            {
                idx?  <div>
                    <Link href={'/'}>
                    <Button className="bg-gray-100 rounded-xl py-1">Words</Button>
                    </Link>
                         
  <Link href={'/word/flashcards'}>
  <Button className="bg-neutral-800 text-white py-1 rounded-xl hover:bg-neutral-800 hover:opacity-75" onClick={()=>{setIdx((value)=>!value)}}>
        Cards
        </Button>
  </Link>
           
                </div> : <div>
                    <Link href={'/'}>
                    <Button className="rounded-xl py-1 text-white bg-neutral-800 hover:bg-neutral-800 hover:opacity-75" onClick={()=>{setIdx((value)=>!value)}}>
     Words
        </Button>
                    </Link>
            <Link href={'/word/flashcards'}>
            <Button className="bg-gray-100 py-1 rounded-xl">
        Cards
        </Button>
            </Link>          
           
                </div>
            }
         
        </div>
    )
}