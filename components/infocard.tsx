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
          <Card className="max-w-[200px] h-[260px] md:min-w-[280px] md:h-[280px] flex justify-center">
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
          <Card className="max-w-[200px] h-[260px] md:min-w-[340px] md:h-[200px] flex justify-center border-4 dark:border-blue-600 border-blue-700">
              <CardBody className="flex gap-3">
                  <div className="flex flex-col pt-4">
                      <p className="text-xl md:text-3xl font-semibold pt-2 md:pb-4 text-center">{title}</p>
                      <hr className="border-black mx-4 "/>
                      <p className="text-xl md:text-sm font-medium pt-2 md:pt-3 px-2 text-center">{description}</p>
                  </div>
              </CardBody>
          </Card>
);
}