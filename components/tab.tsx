"use client"

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Image} from "@nextui-org/react";


export default function SideWindow() {
  let tabs = [
    {
      id: "aptitude",
      label: "Aptitude Tests",
      image: <Image src="/aptitude.png"/>
    },
    {
      id: "culture",
      label: "Culture-Fit Tests",
      image: <Image src="/culture.png"/>
    },
    {
      id: "honesty",
      label: "Honesty Check",
      image: <Image src="/honesty.png"/>
    },
    {
        id: "custom",
        label: "Custom Tests",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
  ];

  return (
    <div className="flex flex-col">
      <Tabs aria-label="Dynamic tabs" placement="start" items={tabs}>
        {(item) => (
          <Tab key={item.id} className="w-[100px] md:w-[300px] text-xs md:text-2xl md:py-8" title={item.label}>
            <Card className="-px-8 md:-mt-8 text-lg w-[220px] md:w-[400px]">
              <CardBody>
                {item.image}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
