"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Faqs() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion className="px-8 justify-center grid-template-column-1" >
      <AccordionItem key="1" aria-label="Accordion 1" className="font-semibold" title="What is Hirasys?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" className="font-semibold" title="What makes Hirasys different?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" className="font-semibold" title="Why do I need a recruitment software?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" className="font-semibold" title="What are the key features in Hirasys?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" className="font-semibold" title="How to use Hirasys?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" className="font-semibold" title="What is the pricing structure?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" className="font-semibold" title="What is the availability of Customer Support?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
