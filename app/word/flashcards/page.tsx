import Flashcard from "@/components/Flashcard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import db from "@/lib/firestore";
import { auth } from "@clerk/nextjs/server";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { EyeIcon } from "lucide-react";
import { redirect } from "next/navigation";

const shuffle = (array: {word_meaning: string, word: string}[]) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

async function fetchWords(userId: string): Promise<DocumentData[]>{
    const wordsSnapshot = await getDocs(collection(db,userId));
    let words: {word_meaning: string, word: string}[] = []
     wordsSnapshot.forEach((doc)=>{
        const meanings = doc.data().meaning
        const word = doc.data().word[0].toUpperCase() + doc.data().word.slice(1)
        meanings.forEach((meaning: string)=> words.push({word_meaning: meaning[0].toUpperCase() + meaning.slice(1), word: word}))
     })
     words = shuffle(words)
     return words;
}

export default async function Page(){
    const { userId } = auth()
    if(!userId){
        redirect('/user/login')
    }
    const words = await fetchWords(userId);
    return (
        <div className="flex justify-center">
            <div className="flex md:w-[90%] w-[95%] h-[90vh] justify-center pt-10 items-center">
            <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {words.map((data, index) => (
          <CarouselItem key={index}>
            <Flashcard word={data.word} meaning={data.word_meaning}></Flashcard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>
        </div>
    )
}