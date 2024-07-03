'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Community, Partner, Shield } from "./icons";


export function InfoCard({icon, title, link }:{
    icon: React.ReactNode,
    title: string,
    link: string
}) {
  return (
          <Card className="min-w-[240px] h-[220px] md:w-[320px] md:h-[280px] mx-auto">
              <CardBody className="flex gap-3">
                  <div className="flex flex-col pl-2 pt-4">
                    {icon}
                      <p className="text-xl md:text-3xl font-semibold pt-2 md:pt-4 text-wrap">{title}</p>
                      <Link
                      isExternal
                      showAnchorIcon
                      className="absolute pt-36 md:pt-44"
                      href={link}
                  >
                      Learn More.
                  </Link>
                  </div>
              </CardBody>
          </Card>
);
}

export function StepCard({title, description }:{
    title: string,
    description: string,
}) {
  return (
          <Card className="w-[285px] h-[240px] md:w-[290px] md:h-[190px] flex justify-center border-4 dark:bg-slate-800 dark:hover:bg-blue-600 hover:bg-blue-600 dark:border-blue-600 hover:text-white border-blue-600">
              <CardBody>
                  <div className="flex flex-col">
                      <p className="text-xl md:text-2xl font-semibold pt-2 pb-3 md:pb-3 text-center">{title}</p>
                      <hr className="border-gray-300 border-1 pb-2 md:pb-0 mx-4 dark:border-white"/>
                      <p className="text-md md:text-sm font-medium pt-2 md:pt-3 px-2 text-center">{description}</p>
                  </div>
              </CardBody>
          </Card>
);
}