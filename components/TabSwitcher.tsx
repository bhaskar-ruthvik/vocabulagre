"use client"
import { useState } from "react";
import { Button } from "./ui/button";

export default function TabSwitcher(){
    const [idx,setIdx] = useState(true)

    return (
        <div className="bg-neutral-800 p-1 rounded-xl">
            {
                idx?  <div>
                         <Button className="bg-gray-100 rounded-xl py-1">
      Home
        </Button>
            <Button className="bg-neutral-800 text-white py-1 rounded-xl hover:bg-neutral-800 hover:opacity-75" onClick={()=>{setIdx((value)=>!value)}}>
        Cards
        </Button>
                </div> : <div>
                         <Button className="rounded-xl py-1 text-white bg-neutral-800 hover:bg-neutral-800 hover:opacity-75" onClick={()=>{setIdx((value)=>!value)}}>
      Home
        </Button>
            <Button className="bg-gray-100 py-1 rounded-xl">
        Cards
        </Button>
                </div>
            }
         
        </div>
    )
}