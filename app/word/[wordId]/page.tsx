
async function fetchData(word: string): Promise<any[]>{
    const res = await fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.THESAURUS_API_KEY!}`);
    if(!res.ok){
        throw new Error("Failed to load data");
    }
    return res.json();
}
function formatText(sentence: string){
    const word = /\{it\}.*\{\/it\}/.exec(sentence)![0].slice(4,-5)
    return sentence.replace(/\{it\}.*\{\/it\}/,word.toUpperCase())
}
function formatSentence(words: string[]){
    let str = ""
    words.forEach((word,idx)=>{
        str+=word;
        if(idx!=words.length-1) str+=", "
        else str+="."
    })
    return str
}
export default async function Page({params}: {params: {wordId: string}}){
    const words = await fetchData(params.wordId);
    return (
        <div className="flex justify-center">
        <div className="md:w-[90%] w-[90%] px-4 mt-5">
          
           {words.map((data,index)=>{
           
            return <div className="flex-col mt-5" key={index}>
                    <div className="flex items-end">
                 <h1 className="font-bold text-3xl">{data.meta.id[0].toUpperCase()+data.meta.id.slice(1)}</h1>
                 <h1 className="italic pl-3 pb-1">{data.fl}</h1>
                 
                 </div>
                 <div className="mt-5 mb-5 bg-neutral-900 py-2 px-4 rounded-xl">
                 <h1 className="font-semibold text-xl underline">Definition:</h1>
            { data.def[0].sseq.map((d: any,idx:number)=>{
                return <div className="flex-col py-2" key={idx}>
              
                    <h1>{idx+1}. {d[0][1].dt[0][1]}</h1>
                    </div>
            })}
             <h1 className="font-semibold text-xl underline pt-2">Examples:</h1>
            { data.def[0].sseq.map((d: any,idx:number)=>{
                if (d[0][1].dt.length!=2) return;
                return <div className="flex-col py-2" key={idx}>
              
                    <div>
                        {idx+1}. {formatText(d[0][1].dt[1][1][0].t)}
                        </div>
                    </div>
            })}
             <h1 className="font-semibold text-xl underline pt-2">Synonyms:</h1>
             <div className="flex-col">
             {data.meta.syns.map((item: any,id: number)=>{
                return <div className="flex-col py-2" key={id}>
                  {"• " + formatSentence(item)}
                  
               </div>
             })}
             </div>
             <h1 className="font-semibold text-xl underline pt-2">Antonyms:</h1>
             <div className="flex-col">
             {data.meta.ants.map((item: any,id: number)=>{
                return <div className="flex-col py-2" key={id}>
                  {"• " + formatSentence(item)}
                  
               </div>
             })}
             </div>
                 </div>
                 <hr></hr>
                 </div>

           })}
        </div>
        </div>
      
    )
}