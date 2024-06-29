'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import { tv } from "tailwind-variants";
import { colors } from "@nextui-org/theme";

export function AboutCard() {
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

export function BlogCard({ image, title, category, author, linkto }:
    {
        image:string,
        title:string,
        category:string,
        author:string,
        linkto:string
    }
 ) {
    return(
        <>
        <div className="grid md:grid-cols-3 gap-2">
        <div className="flex mx-auto justify-center">  
            <Image
            removeWrapper
            alt="Relaxing app background"
            className="object-cover h-0 w-0 md:h-[160px] md:w-[160px] rounded hover:scale-105 transform-gpu"
            src={image}
            />
        </div>
    <div className="col-span-2 px-1">
    <div className="flex items-center ">
      <div className="flex flex-col ">
        <p className="text-md md:text-xs text-blue-700 mt-1 dark:text-blue-500 hover:underline underline-offset-4 dark:hover:text-blue-700 hover:text-blue-800 uppercase font-semibold mb-2 tracking-widest">{category}</p>
        <h4 className=""><Link className="w-full text-black hover:underline underline-offset-4 dark:text-white dark:hover:text-blue-500 hover:text-blue-700 font-semibold md:font-semibold text-xl md:text-[1.55rem] leading-8" href={linkto}>{title}</Link></h4>
        <p className="md:absolute md:mt-[140px] font-medium md:font-normal text-black dark:text-white text-lg md:text-sm my-4">By {author}</p>
      </div>
    </div>
  </div>
</div>
        </>
    );
}


export function MainBlogCard({ image, title, author, category, linkto }:
    {
        image:string,
        title:string,
        author:string,
        category: string,
        linkto:string
    }
 ) {
    return(
            <>
            <div className="flex justify-center">
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="md:h-[600px] md:w-[560px] hover:scale-105  rounded object-cover"
                src={image} />
            </div>
            <div className="flex mt-4 md:mt-8 md:px-2">
                <div className="flex flex-col pl-1">
                    <p className="text-md text-blue-700 dark:text-blue-500 hover:underline underline-offset-4 hover:text-blue-900 dark:hover:text-blue-700 uppercase tracking-widest font-semibold mb-3">{category}</p>
                    <h4 className=""><a className="text-black dark:text-white hover:underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-500 font-bold text-2xl md:text-3xl" href={linkto}>{title}</a></h4>
                    <p className="text-black dark:text-white font-medium text-lg my-4">By {author}</p>
                </div>
            </div></>
            
    );
}

export function CustomImage({ image}:
    {
        image:string,
    }
 ) {
    return(
            <>
            <div className="flex justify-center">
            <Image

                alt="Relaxing app background"
                className="h-[300px] w-[300px] md:h-[560px] md:w-[560px] hover:scale-105 rounded object-cover"
                src={image} />
            </div>
            </>
            
    );
}



export function DualImage({ image}:
    {
        image:string,
    }
 ) {
    return(
            <>
            <div className="flex justify-center">
            <Image

                alt="Relaxing app background"
                className="h-[170px] w-[350px] md:h-[275px] md:w-[500px] hover:scale-105 rounded object-cover"
                src={image} />
            </div>
            </>
            
    );
}

export function OtherBlogs({ image, title, category, author, linkto }:
    {
        image:string,
        title:string,
        category:string,
        author:string,
        linkto:string
    }
 ) {
    return(
        <>
        <div className="grid justify-center md:grid-cols-3">
        <div className=" md:flex md:mx-auto f justify-center">  
            <Image
            removeWrapper
            alt="Relaxing app background"
            className="object-cover h-[140px] w-[600px] md:h-[160px] md:w-[160px] rounded hover:scale-105 transform-gpu"
            src={image}
            />
        </div>
    <div className="col-span-2 px-1">
    <div className="flex items-center ">
      <div className="flex flex-col ">
        <p className="text-md md:text-xs pt-3 text-blue-700 mt-1 dark:text-blue-500 hover:underline underline-offset-4 dark:hover:text-blue-700 hover:text-blue-800 uppercase font-semibold mb-2 tracking-widest">{category}</p>
        <h4 className=""><Link className="w-full text-black hover:underline underline-offset-4 dark:text-white dark:hover:text-blue-500 hover:text-blue-700 font-semibold md:font-semibold text-xl md:text-[1.55rem] leading-8" href={linkto}>{title}</Link></h4>
        <p className="md:absolute md:mt-[140px] font-medium md:font-normal text-black dark:text-white text-lg md:text-sm my-4">By {author}</p>
        <hr className="border-gray-800 mt-4 md:border-transparent md:mt-0"/>
      </div>
    </div>
  </div>
</div>
        </>
    );
}
