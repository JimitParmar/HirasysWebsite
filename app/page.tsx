import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle, description } from "@/components/primitives";
import { AboutCard } from "@/components/card";
import {Image} from "@nextui-org/image";
import { Sourcing, Interviewing, Automating} from "@/components/chips";
import { ICG, ResumeParser, PA, CS, AI, CF, PI, CR}  from "@/components/modal"
import { InfoCard } from "@/components/infocard";
import Faqs from "@/components/faqs";
import { Community, Partner, Shield } from "@/components/icons";


export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-8 px-8 md:py-1 ">
      
    <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:px-36  ">
      <div className="max-w-2xl text-left">
        <h1 className={title({className:"text-5xl leading-[3.5rem]"})}>
          All in one platform for Hiring & Onboarding&nbsp;
        </h1>
        <br />
        <h2 className={description({ class: "pt-6"})}>
          Hirasys simplifies your entire recruitment process with integrated ATS,
          AI-driven processes, Pre-employment testing, and seamless Onboarding,
          ensuring you find the right candidate.
        </h2>
        <div className="flex gap-4 pt-8">
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
            Contact
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              size: "lg",
            })}
            href={siteConfig.links.github}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="max-w-[0px] sm:max-w-[200px] pb-8 md:max-w-[538px]">
        <Image src="/mainpage.png" alt="Main Page Illustration" />
      </div>
    </div>
  </section>
  
  <section className="flex flex-col items-center justify-center ">
    <div className="inline-block max-w-full text-center pt-40 px-2">
        <h1 className={subtitle({size:"md"})}>Quality hires come from quality systems</h1>
        <div className="grid grid-cols-1 md:flex md:justify-center py-8 md:py-14 gap-9">
          <AboutCard 
          title="Shortlisting"
          description="Automate candidate pre-testing processes"
          link="/"/>
          <AboutCard 
          title="Interviewing"
          description="Schedule interview with potential employees"
          link="/"/>
          <AboutCard 
          title="Onboarding"
          description="Set onboarding tasks to conclude the hiring process"
          link="/"/>
        </div>
      </div>
      <h2 className={description({ className: "text-center font-light opacity-95 px-4 text-sm md:text-lg max-w-[900px]" })}>
        Hirasys simplifies your entire recruitment process with integrated ATS for efficient shortlisting, 
        AI-driven tools for seamless interviewing, Automated candidate pre-employement testing and comprehensive onboarding solutions
        to ensure that the right candidates are onboarded smoothly.
        </h2>
        <div className="max-w-[900px] pt-9 px-2">
          <Image src ="\section2.png"/>
        </div>
      <div className="flex text-center pt-20">
          <h1 className={subtitle({size:"md"})}>Design & Automate your hiring pipeline with <span className="text-blue-600">Hirasys</span></h1>
      </div>
      <h2 className={description({ className: "text-center font-light opacity-95 text-sm md:text-lg pt-4 max-w-[900px]" })}>
      Transform your hiring process with Hirasys, empowering you to design and automate every stage of your recruitment pipeline. 
      From sourcing and screening to interviewing and onboarding, Hirasys ensures efficiency and precision to integrate top talent seamlessly.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-40 md:pb-10 px-8">
        <div className="pt-20 max-w-[520px]">
        <Sourcing/>
          <h1 className={subtitle({size:"sm", className:"font-semibold"})}>Efficiently manage and track candidate progress throughout the hiring process</h1>
          <p className={description({className:"opacity-95 pb-4"})}>
            Publish your job on more than 20+ job boards with our built-in API integration with just one click while seamlessly managing applicant progress from initial contact to final selection.
          </p>
          <Link
                      isExternal
                      showAnchorIcon
                      href="/"
                  >
                      Learn More.
                  </Link>
        </div>
        <Image className="max-w-[0px] md:max-w-[280px] md:pt-40" src ="/source.svg"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-40 md:pb-10 px-8 ">
        <div className="pt-20 max-w-[520px]">
        <Automating/>
          <h1 className={subtitle({size:"sm", className:"font-semibold"})}>Automate the hiring process and shortlist the right candidate for the right role</h1>
          <p className={description({className:"opacity-95 pb-4"})}>
          Use our proctored and integrated AI test modules to create a hiring funnel which makes it easy for you to choose the right talent. 
          </p>
          <Link
                      isExternal
                      showAnchorIcon
                      href="/"
                  >
                      Learn More.
                  </Link>
        </div>
        <Image className="max-w-[0px] md:max-w-[280px] md:pt-10" src ="/tracking.svg"/>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-40 pb-20 px-8">
        <div className="pt-20 max-w-[520px]">
        <Interviewing/>
          <h1 className={subtitle({size:"sm", className:"font-semibold"})}>Easily schedule interviews and initiate the onboarding process, all within a single, integrated platform.</h1>
          <p className={description({className:"opacity-95 pb-4"})}>
          Enhance efficiency and ensure a seamless transition from selection to onboarding with our integrated interview scheduling and onboarding support.
          </p>
          <Link
                      isExternal
                      showAnchorIcon
                      href="/"
                  >
                      Learn More.
                  </Link>
        </div>
        <Image className="max-w-[0px] md:max-w-[280px] md:pt-10" src ="/interview.svg"/>
      </div>
      <div className="flex text-center md:pt-20 md:px-40">
          <h1 className={subtitle({size:"md"})}>Choose from 20+ Modules to find the best candidates.</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:flex-row text-black px-8 gap-8 md:gap-8 pt-10 md:pt-10">
        <ICG/>
        <ResumeParser/>
        <PA/>
        <CS/>
        <AI/>
        <CF/>
        <PI/>
        <CR/>
      </div>
      <Link
          isExternal
          showAnchorIcon
          href="/"
          className="text-lg font-medium py-8"
            >
            View all Modules
      </Link>
      </section>
      <section className="flex flex-col items-center justify-center " >
      <div className=" w-screen bg-blue-600 pt-16 relative px-20">
        <div className="grid grid-cols-1 md:flex md:justify-center gap-8 md:gap-0 ">
          <InfoCard
          icon = <Partner/>
          title="Become a customer"
          link="/"
          />
          <InfoCard
          icon = <Shield/>
          title="Privacy Policy"
          link="/"
          />
          <InfoCard
          icon = <Community/>
          title="Join the Community"
          link="/"
          />
        </div>
      </div>
      <div className="w-screen bg-blue-600 flex justify-center pt-8">
        <h1 className={subtitle({size:"md", className:"font-bold text-center text-white text-xl md:text-lg pt-9 max-w-[900px] mt-0"})}>Comprehensive recruitment software for quicker and more efficient hires.</h1>
      </div>
      <div className="w-screen bg-blue-600 flex justify-center">
      <Link
            isExternal
            className={buttonStyles({
              color:"success",
              radius: "full",
              size: "lg",
              variant: "shadow",
              className:"py-8 px-12 text-2xl text-white font-semibold mt-12 mb-16"
            })}
            href={siteConfig.links.docs}
          >
            Try Hirasys
          </Link>
          </div>
      </section>   
      <section className="flex flex-col items-center justify-center gap-8 px-8 mt-20 md:py-1 ">
    <div className="flex flex-col md:flex-row items-center justify-start gap-8 ">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold pb-8">
          Frequently Asked Questions&nbsp;
        </h1>
        <div className="flex flex-col items-center justify-center min-w-[360px] max-w-[360px] md:min-w-[1000px] mb-28 md:max-w-[1000px]">
        <Faqs />
      </div>
      </div>
    </div>
  </section>
    </>
    
  );
}
