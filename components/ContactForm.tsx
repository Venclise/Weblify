'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { CheckCircle2Icon } from "lucide-react";
import AnimatedText from "@/lib/gsap/HeroTitle";
import Link from "next/link";

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
  const [loading,setLoading] = useState(false)
  const [submit,setSubmit] = useState(false)
  useEffect(() => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}, []);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
   
  e.preventDefault();

  if (!form.current) return;

 emailjs.sendForm(
   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
   form.current!,
   {
     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
   }
 )


    .then(() => {
      console.log("SUCCESS!");
      toast.success("Message has been submitted.Thank You")
      form.current?.reset();

      setLoading(false)
      setSubmit(true)
    })
    .catch((error) => {
      console.error("EMAILJS ERROR:", error);
    })
    
};
  return (
    
      

<>
{submit === true ? 
<AnimatedText animate="rightToLeft">
<div className="flex items-center">
    <CheckCircle2Icon  height={100} width={100} fill="#3B834B"/>
    <p className="text-green-600  max-w-xs ">
    Submitted Successfully! We will repond you shortly <Link href="/" className="text-blue-500 underline">
    Continue Browsing
    </Link>
    </p>

</div> 
</AnimatedText> :
      <form
      ref={form}
      onSubmit={sendEmail}
      className="w-[90%] md:w-[30%] p-7 lg:p-5 h-max lg:h-screen  flex flex-col  justify-center gap-8 mt-12 bg-neutral-900 rounded-2xl"
      >
        <div className="flex gap-4">
          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-neutral-200">Name</span>
            <Input
              name="first_name"
              placeholder="Enter your name"
              type="text"
              required
              className="border border-neutral-800"
              />
          </label>

          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-gray-200">Last name</span>
            <Input
              name="last_name"
              placeholder="Enter your last name"
              type="text"
              className="border border-neutral-800"
              
              />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-200">Email</span>
          <Input
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            className="border border-neutral-800"
            />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-200">Your message</span>
          <textarea
            name="message"
            className="w-full h-40 p-3 text-sm rounded-md border border-gray-800 bg-neutral-800 text-white outline-none "
            placeholder="Enter your message..."
            required
            />
        </label>
{
  loading ? 
  <Button  disabled className="rounded-sm bg-blue-500">
    <Spinner />
    Loading
      </Button> : 
  <Button   className="rounded-sm cursor-pointer bg-blue-500 hover:bg-blue-600">
        Submit
      </Button>
      }
        
  
      </form>
  }
</>


 
  )
}
