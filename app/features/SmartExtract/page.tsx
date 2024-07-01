import { title,subtitle,description} from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import {Image} from "@nextui-org/image";
import { Arrow, Check } from "@/components/icons";
import { AboutCard } from "@/components/card";
import { InfoCard, StepCard } from "@/components/infocard";

export default function SmartExtract() {
  return (
    <>
    <section className="w-full flex justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 ">
        <div className="max-w-2xl text-left">
          <h1 className={title({ className: "text-5xl md:text-7xl leading-[3.5rem]" })}>
            What is Smart Extract?&nbsp;
          </h1>
          <br />
          <h2 className={description({ class: "pt-6 max-w-[32rem] " })}>
            Smart Extract is a resume parsing tool that automates the process of extracting key information from resumes, such as contact details,
            education, work experience, and skills. This helps streamline recruitment by saving time and ensuring access to relevant candidate information.
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
          <Image src="/smartextract.jpeg" alt="Main Page Illustration" />
        </div>
      </div>
    </section>
    <section className="mt-44 w-full flex justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-start gap-8">
          <div className="max-w-2xl text-left">
            <h1 className={subtitle({ size: "lg", className: "font-semibold md:font-medium md:leading-[4rem]" })}>
              Why should I choose <span className="underline underline-offset-8">Smart Extract</span>?
            </h1>
            <br />
            <h2 className={description({ class: "max-w-[36rem] leading-[2rem]" })}>
              Manual Screening can be easy, only if the number of resumes are handful. In today's job market conditions each job opening attracts 300 to 800 applicants on average.
              The entire process can get time consuming and inefficient, without even taking in consideration of personal bias and missing out on good potential.<br/>With <span className="text-blue-600 dark:text-blue-500">Hirasys's</span> Smart Extract you can:<br/>
              </h2>
            <ul className="pt-3 text-lg">
            <li className="py-2 flex items-center gap-3"><Check/><b>Increase the efficiency and productivity by up to <i>85%.</i></b></li> 
              <li className="py-2 flex items-center gap-3"><Check/><b>Create a standardized format for all recieved resumes.</b></li>
              <li className="py-2 flex items-center gap-3"><Check/><b>Automatically or Manually add the resume to your talent pool.</b></li>
              <li className="py-2 flex items-center gap-3"><Check/><b>Reduce the cost of hiring by up to <i>70%.</i></b></li>
            </ul>
            
          </div>
          <div className="max-w-[400px] flex justify-center md:max-w-[440px]">
          <Image className="w-0 md:w-auto" src="/resume2.jpg"></Image>
          </div>
        </div>
      </section>
      <section className="mt-24 w-full flex justify-center">
        <div className="flex-row">
          <div className="flex justify-center max-w-2xl">
            <h1 className={subtitle({ size: "lg", className: "font-semibold md:font-medium leading-[3.5rem]"})}>
              How it works?
            </h1>
            </div>



            <div className="flex justify-center pt-12 pb-3">
            <StepCard
            title="Upload Resume"
            description="Candidates applies from various integrated job boards  and uploads their resume. (PDF, DOCX, etc.) "
            />
            </div>
            <div className="flex justify-center">
              <Arrow className="w-10"/>
            </div>

            
            <div className="flex justify-center pt-3 pb-3">
            <StepCard
            title="Parsing & Extraction"
            description="The system parses and extracts key information using NLP and Machine Learning and formats it into a uniform structure"
            />
            </div>
            <div className="flex justify-center">
              <Arrow className="w-10"/>
            </div>



            <div className="flex justify-center pt-3 pb-3">
            <StepCard
            title="Ranking & Integration"
            description="Parsed data is uniformly structured, and candidates are ranked by predefined requirements."
            />
            </div>
            <div className="flex justify-center">
              <Arrow className="w-10"/>
            </div>


            <div className="flex justify-center pt-3 pb-3">
            <StepCard
            title="Utilisation"
            description="The extracted data is continuously updated as the candidate progresses through each step of the hiring process."
            />
            </div>
          </div>
      </section></>
  );
}
