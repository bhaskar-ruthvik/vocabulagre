import Navbar from "@/components/Navbar";
import WordInput from "@/components/WordInput";
import Words from "@/components/Words";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if(!userId){
    redirect("/user/login")
  }
  return (
    <div>
        <Navbar />
        <Words userId={userId} apiKey={process.env.THESAURUS_API_KEY!}/>

    </div>
 
  );
}
