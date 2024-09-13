import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  
  const [longUrl,setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();

    if(longUrl) navigate(`/auth?createNew=${longUrl}`);
  }


  return (
    <div className="flex flex-col items-center">
      <h3 className="my-10 sm:my-16 text-2xl sm:text-3xl lg:text-5xl text-black text-center font-extrabold">
        Simplify Your Links, Amplify Your Reach! <br />
        Shorten your URL Today🚀🚀🚀
      </h3>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-4">
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your URL"
          onChange = {(e)=> setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button 

        className="h-full" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>
      <Accordion type="multiple" className="w-full my-11 md:px-11"collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How Does the URL Shortener Work?</AccordionTrigger>
          <AccordionContent>
          Our URL shortener takes long, complicated URLs and compresses them into short, user-friendly links. Simply paste your long link into the box, hit ‘Shorten,’ and instantly get a compact version. Use the short link in social media, emails, or wherever you need quick access. Plus, every click on your shortened URL is tracked, so you can monitor the performance of your shared content.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Why Should I Use a URL Shortener?</AccordionTrigger>
          <AccordionContent>
          Long URLs can look messy, are difficult to remember, and sometimes break when shared in emails or social media. A URL shortener makes sharing your links more efficient. It improves user experience, boosts engagement, and ensures compatibility across platforms. Whether you're managing marketing campaigns or just simplifying personal links, a short URL keeps things clean and professional.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I Track the Performance of My Shortened Links?</AccordionTrigger>
          <AccordionContent>
          Yes! Our service provides analytics for each shortened link, allowing you to track its performance. Get insights like the number of clicks, geographic location of visitors, device types, and more. This data helps you understand your audience’s behavior, optimize your campaigns, and improve the effectiveness of your shared links.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
};

export default Landing;
