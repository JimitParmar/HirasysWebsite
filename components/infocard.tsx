'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Community, Partner, Shield } from "./icons";


export default function InfoCard() {
  return (
    <div className="static grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-8 md:gap-20 ">
          <Card className="max-w-[200px] md:max-w-[280px] max-h-[260px] min-h-[220px] md:min-h-[260px] flex justify-center">
              <CardBody className="flex gap-3">
                  <div className="flex flex-col pl-2 pt-4">
                    <Partner/>
                      <p className="text-xl md:text-3xl font-semibold pt-2 md:pt-4 text-wrap">Become a Customer</p>
                      <Link
                      isExternal
                      showAnchorIcon
                      className="absolute pt-36 md:pt-44"
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
                  </div>
              </CardBody>
          </Card>
          <Card className="max-w-[200px] md:max-w-[280px] max-h-[260px] min-h-[220px] md:min-h-[260px] flex justify-center">
              <CardBody className="flex gap-3">
                  <div className="flex flex-col pl-2 pt-4">
                    <Shield/>
                      <p className="text-xl md:text-3xl font-semibold pt-2 md:pt-4 pr-14 text-wrap">Privacy Policy</p>
                      <Link
                      isExternal
                      showAnchorIcon
                      className="absolute pt-36 md:pt-44"
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
                  </div>
              </CardBody>
          </Card>
          <Card className="max-w-[200px] md:max-w-[280px] max-h-[260px] min-h-[220px] md:min-h-[260px] flex justify-center">
              <CardBody className="flex gap-3">
                  <div className="flex flex-col pl-2 pt-4">
                    
                    <Community/>
                      <p className="text-xl md:text-3xl font-semibold pt-2 md:pt-4 text-wrap">Join the Community</p>
                      <Link
                      isExternal
                      showAnchorIcon
                      className="absolute pt-36 md:pt-44"
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
                  </div>
              </CardBody>
          </Card>
    </div>
);
}
