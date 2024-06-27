'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function AboutCard() {
  return (
    <div className="static grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-9 ">
          <Card className="max-w-[210px] md:max-w-[300px] flex justify-center">
              <CardHeader className="flex gap-3">
                  <Image
                      alt="Hirasys logo"
                      height={32}
                      radius="sm"
                      src="\circlet.png"
                      width={32} />
                  <div className="flex flex-col">
                      <p className="text-md font-semibold">Shortlisting</p>
                  </div>
              </CardHeader>
              <Divider />
              <CardBody>
                  <p className="pb-2 ">Automate candidate pre-testing processes</p>
                  <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
              </CardBody>
          </Card>
          <Card className="max-w-[210px] md:max-w-[300px] flex">
              <CardHeader className="flex gap-3">
                  <Image
                      alt="Hirasys logo"
                      height={32}
                      radius="sm"
                      src="\circlet.png"
                      width={32} />
                  <div className="flex flex-col">
                      <p className="text-md font-semibold">Interviewing</p>
                  </div>
              </CardHeader>
              <Divider />
              <CardBody>
                  <p className="pb-2">Schedule interview with potential employees</p>
                  <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
              </CardBody>
          </Card>
          <Card className="max-w-[210px] md:max-w-[300px] flex">
              <CardHeader className="flex gap-3">
                  <Image
                      alt="Hirasys logo"
                      height={32}
                      radius="sm"
                      src="\circlet.png"
                      width={32} />
                  <div className="flex flex-col">
                      <p className="text-md font-semibold">Onboarding</p>
                  </div>
              </CardHeader>
              <Divider />
              <CardBody>
                  <p className="pb-2">Set onboarding tasks to conclude the hiring process</p>
                  <Link
                      isExternal
                      showAnchorIcon
                      href="https://github.com/nextui-org/nextui"
                  >
                      Learn More.
                  </Link>
              </CardBody>
          </Card>
    </div>
);
}
