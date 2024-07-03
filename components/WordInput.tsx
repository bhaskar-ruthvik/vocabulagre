"use client"
import db from "@/lib/firestore";
import { auth } from "@clerk/nextjs/server";
import { doc, setDoc } from "firebase/firestore";
import { Plus } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export default function WordInput(props: {userId: string,apiKey: string}){
    const router = useRouter();
    const [word,setWord] = useState<string>("");
    async function fetchMeaning(){
        const res = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${props.apiKey}`)
        if(!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      
    }
    async function addToStore(){
        const data = await fetchMeaning();
        console.log(data);
        await setDoc(doc(db,props.userId,word),{
            word: word,
            meaning: data[0].shortdef,
        })
        setWord("")
        router.refresh()
    }
    return (
             <div className="flex justify-start px-10 items-center">
            <input className="dark mr-2 pl-2 bg-transparent border-b-2 focus:outline-none h-[80%]" type="text" placeholder="Enter a word" onChange={({target})=>setWord(target.value)}></input>
            <Button className="mt-1 p-2 bg-neutral-700 hover:bg-neutral-800"><Plus onClick={addToStore} color="white"/></Button>
        </div>
       

       
    )
}