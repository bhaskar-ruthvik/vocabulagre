import db from "@/lib/firestore";
import { DocumentData, collection, getDocs } from "firebase/firestore"
import WordInput from "./WordInput";
import WordCard from "./WordCard";

async function fetchWords(userId: string): Promise<DocumentData[]>{
    const wordsSnapshot = await getDocs(collection(db,userId));
    const words: DocumentData[] = []
     wordsSnapshot.forEach((doc)=>words.push(doc.data()))
     return words;
}

export default async function Words(props: {userId: string,apiKey: string}){
    const words = await fetchWords(props.userId)
    return <div className="flex justify-center">
        <div className="flex-col md:w-[90%] w-[95%]">
        <div className="flex justify-center w-full h-[6vh] my-4">
        <WordInput userId={props.userId} apiKey={props.apiKey} />
    </div>
        <div className="h-[84vh] overflow-scroll grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 px-4 py-4 gap-3">
        {
            words.map((data,index)=>{
              return <WordCard key={index} index={index} data={data} />
            })
        }
    </div>
    
        </div>

    </div>
     
   
}