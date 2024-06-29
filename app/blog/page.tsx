import { subtitle, title } from "@/components/primitives";
import { BlogCard, CustomImage, MainBlogCard, DualImage, OtherBlogs} from "@/components/card";
import Image from "next/image";
import { button as buttonStyles } from "@nextui-org/theme";
import { px } from "framer-motion";
import InputMain from "@/components/input";


export default function BlogPage() {
  return (
    <><section>
      <div className="w-full">
        <div className="text-center"><h1 className={title()}>Blog</h1></div>
        <div className="w-full mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-2 px-6 md:px-40 gap-8 mb-20 mx-auto">
          <div>
            <MainBlogCard
              image="/sbl.jpeg"
              title="The Emergence of Skills-Based Learning is Vital to Teams Success"
              author="Jimit Parmar"
              category="Articles"
              linkto="https://peoplemanagingpeople.com/articles/skills-based-learning/" />
          </div>
          <div className="grid gap-y-6">
            <BlogCard
              image="/hr.jpeg"
              title="Set for Growth: The Ins and Outs of the HR Payroll Software Market"
              category="Human Resource"
              author="Sakshi Upadhyay"
              linkto="google.com" />
            <BlogCard
              image="/mental.jpeg"
              title="The Real Impact of Flexible Work on Mental Health"
              category="Health & Wellbeing"
              author="Atharva Wagh"
              linkto="google.com" />
            <BlogCard
              image="/employee.jpeg"
              title="There’s A Problem With Your Employee Wellness Program. Here's How To Fix It"
              category="Article"
              author="Sanchit Warang"
              linkto="google.com" />
            <BlogCard
              image="/wfh.jpeg"
              title="Remote Work Improved Our Productivity But What About Team Dynamics?"
              category="Remote & Hybrid"
              author="Jimit Parmar"
              linkto="google.com" />
          </div>
        </div>
      </div>
    </section>
    <section className="w-screen bg-black pb-16 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-8 md:px-32 pt-8 md:pt-32 text-white">
            <div className="flex justify-center md:scale-100 ">
            <CustomImage 
            image="trends.jpeg"/>
            </div>
          <div className="flex flex-col gap-2">
            <p className="pt-6 md:pt-12 pb-3 md:pb-6 text-md font-semibold uppercase">Strategy & Leadership</p>
            <h1 className="text-2xl md:text-5xl font-semibold md:leading-[3.5rem] pb-4 md:pb-8 hover:underline underline-offset-8 ">HR Predictions: The 2024 Workplace Trends on the Minds of HR Leaders Everywhere</h1>
            <p className="pb-6 md:pb-8">What do HR leaders and experts across industries think about AI, the talent marketplace and key initiatives around DEI and…</p>
            <a className={buttonStyles({
              variant:"bordered",
              className:"max-w-40 p-6 text-white bg-blue-800 hover:bg-blue-600 hover:scale-105 transition-all ease-in-out delay-75 text-lg border-0",
              radius: "full",
              size: "md",
            })}href="">Read</a>
          </div>
        </div>
      </section>
      <section>
      <p className="py-8 pl-5 md:pb-8 md:pt-12 md:pl-40 text-xl font-medium">Latest Stories</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-40 mb-20 gap-8 md:gap-8">
          <div className="flex flex-col">
          <DualImage
          image="recruitment.jpeg"/>
          <h1 className="px-5 pt-4 text-lg md:pl-12 md:pt-6 md:text-2xl font-semibold hover:underline underline-offset-4 hover:text-blue-900 dark:hover:text-blue-700">Top 10 Recruitment Softwares of 2024</h1>
          <p className="px-5 pt-2 md:px-12  md:pt-2 text-sm">Top applicant tracking systems to 
            shortlist and manage candidates and uncover the best talent fit for each role.</p>
            <h2 className="px-5 py-2 md:px-12  md:pt-2 font-semibold text-md">By Sanchit Warang</h2>
          </div>
          
          <div>
          <DualImage
          image="hr.jpeg"/>
          <h1 className="px-5 pt-4 md:pl-12 md:pt-6 text-lg md:text-2xl font-semibold hover:underline underline-offset-4 hover:text-blue-900 dark:hover:text-blue-700">41 Key HR Policies & Best Practices</h1>
          <p className="px-5 pt-2 md:px-12  md:pt-2 text-sm">HR policies empower and protect employees 
            and minimize business risks. Here are the best practices for developing your own.</p>
            <h2 className="px-5 py-2 md:px-12  md:pt-2 font-semibold text-md">By Atharva Wagh</h2>
          </div>
        </div>
        <hr className="border-black border-1.5"/>
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:mx-36 gap-16 md:gap-12 py-16">
        <div className="grid gap-y-16">
            <OtherBlogs
              image="/hr.jpeg"
              title="Set for Growth: The Ins and Outs of the HR Payroll Software Market"
              category="Human Resource"
              author="Sakshi Upadhyay"
              linkto="google.com" />
            <OtherBlogs
              image="/mental.jpeg"
              title="The Real Impact of Flexible Work on Mental Health"
              category="Health & Wellbeing"
              author="Atharva Wagh"
              linkto="google.com" />
            <OtherBlogs
              image="/employee.jpeg"
              title="There’s A Problem With Your Employee Wellness Program. Here’s How To Fix It"
              category="Article"
              author="Sanchit Warang"
              linkto="google.com" />
            <OtherBlogs
              image="/wfh.jpeg"
              title="Remote Work Improved Our Productivity But What About Team Dynamics?"
              category="Remote & Hybrid"
              author="Jimit Parmar"
              linkto="google.com" />
          </div>
        <div className="grid gap-y-16">
            <OtherBlogs
              image="/hr.jpeg"
              title="Set for Growth: The Ins and Outs of the HR Payroll Software Market"
              category="Human Resource"
              author="Sakshi Upadhyay"
              linkto="google.com" />
            <OtherBlogs
              image="/mental.jpeg"
              title="The Real Impact of Flexible Work on Mental Health"
              category="Health & Wellbeing"
              author="Atharva Wagh"
              linkto="google.com" />
            <OtherBlogs
              image="/employee.jpeg"
              title="There’s A Problem With Your Employee Wellness Program. Here’s How To Fix It"
              category="Article"
              author="Sanchit Warang"
              linkto="google.com" />
            <OtherBlogs
              image="/wfh.jpeg"
              title="Remote Work Improved Our Productivity But What About Team Dynamics?"
              category="Remote & Hybrid"
              author="Jimit Parmar"
              linkto="google.com" />
          </div>
          </div>
        </section>


        
        <section className="w-screen bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
            <h1 className="text-2xl md:text-5xl font-semibold mx-8 text-center md:ml-40 pt-16 pb-12 md:py-[5.6rem] text-white leading-tight">Subscribe to Hirasys's Free Newsletter...</h1>
            </div>
            <div>
              <InputMain/>
            </div>
            </div>
            <hr className="mx-16 md:mx-80 md:w-[50rem]"/>
        </section>
        </>

  );
}
