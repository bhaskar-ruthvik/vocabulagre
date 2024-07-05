"use client"
import { EyeIcon, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";

export default function Flashcard(props: {word: string, meaning: string}){
    const [hide, setHide] = useState(true)
    return (
        <Card className="flex-col bg-zinc-900">
        <CardHeader className="text-center">
        {props.meaning}
        </CardHeader>
        <CardContent>
        <div className="flex py-2"><button className="bg-zinc-800 text-black px-2 py-2 rounded-lg text-white w-full flex justify-between" onClick={()=>setHide((value)=>!value)}><div className="w-full">{!hide ? props.word : "•••••••••" }</div><div className="z-4">{hide ? <EyeIcon/> : <EyeOff />}</div></button></div>
           
        </CardContent>
      </Card>
    )
}