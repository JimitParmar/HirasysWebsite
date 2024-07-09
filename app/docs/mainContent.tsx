import { description, subtitle, title } from '@/components/primitives';
import { Link } from '@nextui-org/link';
import generateDocs, { MainField, SubField } from 'docspresso';
import React from 'react';
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from '@/config/site';
import { Image } from '@nextui-org/react';
import SideWindow from '@/components/tab';



const mainFields: MainField[] = [
  {
    title: 'Guide',
    subFields: [
      {
        title: 'Introduction',
        renderContent: (className?: string) => <div className={className}> 
        <section className="w-full flex justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-start gap-24 ">
          <div className="max-w-2xl text-left">
            <h1 className={title({ className: "text-5xl md:text-7xl leading-[3.5rem]" })}>
              What is Examina?&nbsp;
            </h1>
            <br />
            <h2 className={description({ class: "pt-6 max-w-[32rem] " })}>
            Examina module enables efficient applicant filtering based on specific skills or attributes. By utilizing weighted screening questions, 
            you can automatically rate candidates, compare their responses quickly, and make better-informed decisions for the interview selection process.
            </h2>
            <div className="flex gap-4 pt-6">
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  size: "lg",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="max-w-[0px] sm:max-w-[200px] pb-8 md:max-w-[540px]">
            <Image src="/smartextract.jpeg"/>
          </div>
        </div>
      </section>
      <section className="mt-44 w-full flex justify-center px-6">
          <div className="items-center gap-8">
            <div className="md:max-w-3xl text-center">
              <h1 className={subtitle({ size: "md", className: "font-semibold text-center md:font-medium md:leading-[4rem]" })}>
                Types of Assessments</h1>
              <br />
                <p className="md:text-lg  md:font-medium text-center md:leading-[2rem]">Hirasys makes it easier to evaluate candidate's skills and rate them accordingly. Use our pre-defined assessments or set up your own </p>
              <div className="my-8 md:my-16 mx-auto transition-all delay-150 md:w-[1000px]">
              <SideWindow/>
              </div>
            </div>
          </div>
        </section>
        <div className="my-12 md:my-12 mx-4 md:mx-80 grid grid-rows-2 items-center ">
              <h1 className="flex justify-center text-center leading-snug font-bold pb-2 md:pb-4 text-2xl md:text-5xl">Filter great candidates with Hirasys's Examina</h1>
              <Link
                isExternal
                className={buttonStyles({
                  className:"md:w-[240px] w-[200px] p-8 md:p-8 text-lg text-white font-semibold md:text-xl mx-auto",
                  color: "success",
                  radius: "full",
                  size: "lg",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                Try Examina
              </Link>
            </div>
            </div>,
        className: ""
      },
      {
        title: 'Installation',
        renderContent: (className?: string) => <div className={className}>Content 2</div>,
        className: 'custom-class-2'
      },
      {
        title: 'CLI',
        renderContent: (className?: string) => <div className={className}>Content 3</div>,
        className: 'custom-class-2'
      },
      {
        title: 'Design Principles',
        renderContent: (className?: string) => <div className={className}>Content 4</div>,
        className: 'custom-class-2'
      },
      {
        title: 'Routing',
        renderContent: (className?: string) => <div className={className}>Content 5</div>,
        className: 'custom-class-2'
      },
    ],
  },
  {
  title:'Frameworks',
    subFields:[
      {
        title: 'Next.js',
        renderContent: (className?: string) => <div className={className}>Content 4</div>,
        className: ''
      },
      {
        title: 'Vite',
        renderContent: (className?: string) => <div className={className}>Content 5</div>,
        className: ''
      },
      {
        title: 'Remix',
        renderContent: (className?: string) => <div className={className}>Content 5</div>,
        className: ''
      },
      {
        title: 'Astro',
        renderContent: (className?: string) => <div className={className}>Content 5</div>,
        className: ''
      },
    ]
  },{
    title:'Customization',
      subFields:[
        {
          title: 'Theme',
          renderContent: (className?: string) => <div className={className}>Content 4</div>,
          className: ''
        },
        {
          title: 'Layout',
          renderContent: (className?: string) => <div className={className}>Content 5</div>,
          className: ''
        },
        {
          title: 'Colors',
          renderContent: (className?: string) => <div className={className}>Content 5</div>,
          className: ''
        },
        {
          title: 'Dark Mode',
          renderContent: (className?: string) => <div className={className}>Content 5</div>,
          className: ''
        },
      ]
    },{
      title:'Components',
        subFields:[
          {
            title: 'Avatar',
            renderContent: (className?: string) => <div className={className}>Content 4</div>,
            className: ''
          },
          {
            title: 'Accordian',
            renderContent: (className?: string) => <div className={className}>Content 5</div>,
            className: ''
          },
        ]
      },{
        title:'API References',
          subFields:[
            {
              title: 'Hirasys Module API',
              renderContent: (className?: string) => <div className={className}>Content 4</div>,
              className: ''
            },
            {
              title: 'Hirasys Module Provider',
              renderContent: (className?: string) => <div className={className}>Content 5</div>,
              className: ''
            },
          ]
        }
];

const mainContent: MainField[] = generateDocs(mainFields);


export default mainContent;
