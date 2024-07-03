"use client"
import { DocumentData } from "firebase/firestore"
import { Card, CardContent, CardHeader } from "./ui/card"
import { useRouter } from "next/navigation"


export default function WordCard(props: {index: number, data: DocumentData}){
    const router = useRouter();
    function clickOnCard(wordId: string){
        router.push(`/word/${wordId}`)
    }
    return (
        <Card key={props.index} className="bg-zinc-900 hover:opacity-[0.85]" onClick={()=>{clickOnCard(props.data.word)}}>
                <CardHeader className="md:pb-4 pb-2 font-semibold text-xl">
                    {props.data.word[0].toUpperCase() + props.data.word.slice(1)}
                </CardHeader>
                <CardContent>
                    <div className="flex-col h-[10vh] overflow-y-scroll">
                    {props.data.meaning.map((meaning: string,index: number)=>{
                        return <div key={index} className="flex py-2"><button className="bg-zinc-800 text-black px-2 py-2 rounded-lg text-white w-full text-start">{meaning[0].toUpperCase() + meaning.slice(1)}</button></div>
                    })}
                        </div>
                   
                </CardContent>
              </Card>
    )
}