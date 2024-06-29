import { title } from "@/components/primitives";
import { BlogCard, MainBlogCard } from "@/components/card";


export default function BlogPage() {
  return (
    <><section>
      <div className="w-full">
        <div className="text-center"><h1 className={title()}>Blog</h1></div>
        <div className="w-[1200px] mt-32 grid grid-cols-2  mb-20 mx-auto">
          <div className="w-[584px]">
            <MainBlogCard
              image="/sbl.jpeg"
              title="The Emergence of Skills-Based Learning is Vital to Teams Success"
              readingTime="20 minutes"
              author="Jimit Parmar"
              category="Articles"
              linkto="google.com" />
          </div>
          <div className="grid ">
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
              title="There’s A Problem With Your Employee Wellness Program. Here’s How To Fix It"
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
    <section className="w-screen bg-black ">
        <div className="w-20 h-200 text-red-600">
          hello mister
        </div>
      </section></>

  );
}
