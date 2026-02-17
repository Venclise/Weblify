'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedText from "@/lib/gsap/HeroTitle";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
  const [loading,setLoading] = useState(false)
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
    })
    .catch((error) => {
      console.error("EMAILJS ERROR:", error);
    })
    
};
  return (
    
      


      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-[35%] p-5 h-screen flex flex-col gap-8 mt-12 bg-white rounded-2xl"
      >
        <div className="flex gap-4">
          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-gray-800">Name</span>
            <Input
              name="first_name"
              placeholder="Enter your name"
              type="text"
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-gray-800">Last name</span>
            <Input
              name="last_name"
              placeholder="Enter your last name"
              type="text"
              
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-800">Email</span>
          <Input
            name="email"
            placeholder="Enter your email"
            type="email"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-800">Your message</span>
          <textarea
            name="message"
            className="w-full h-40 p-3 text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-neutral-100 dark:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Enter your message..."
            required
          />
        </label>
{
  loading ? 
  <Button  disabled className="rounded-sm">
    <Spinner />
    Loading
      </Button> : 
  <Button   className="rounded-sm cursor-pointer">
        Submit
      </Button>
      }
        
  
      </form>

 
  )
}
