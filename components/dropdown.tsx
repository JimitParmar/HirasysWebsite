"use client"


import { useRouter } from 'next/navigation';
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn} from "@nextui-org/react";
import Link from "next/link";

export function Resource() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered"
          className="border-0 text-md" 
        >
          Resources
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="help">Documentation</DropdownItem>
        <DropdownItem key="help">Help Center</DropdownItem>
        <DropdownItem key="tutorials">Tutorials</DropdownItem>
        <DropdownItem key="forum">Forum</DropdownItem>
        <DropdownItem key="blog" href="/blog">Blogs</DropdownItem>
        <DropdownItem key="new">What's new</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
export function Features() {
  const router = useRouter();

return (
  <Dropdown>
    <DropdownTrigger>
      <Button 
        variant="bordered" 
        className="border-0 text-md"
      >
        Features
      </Button>
    </DropdownTrigger>
    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
    <DropdownSection showDivider>  
      <DropdownItem
          description="A Versatile Resume Parser"
          key="smartextract"
          onClick={() => router.push('/features/smartextract')}
          // startContent={<AddNoteIcon className={iconClasses} />}
        >
          
        SmartExtract
          
        </DropdownItem>
        <DropdownItem
          description="Various types of Proctored tests"
          key="examina"
          onClick={() => router.push('/features/examina')}
          // startContent={<CopyDocumentIcon className={iconClasses} />}
        >Examina
        </DropdownItem>
        <DropdownItem
          description="Conduct Coding Tests"
          // startContent={<EditDocumentIcon className={iconClasses} />}
        >
          Codelab
        </DropdownItem>
        <DropdownItem
          description="Use AI to Test Candidates"
          // startContent={<EditDocumentIcon className={iconClasses} />}
        >
          InterviewAI
        </DropdownItem>
        <DropdownItem
          description="An Entire Onboarding support"
          // startContent={<EditDocumentIcon className={iconClasses} />}
        >
          Onboarder
        </DropdownItem>
      </DropdownSection>
      <DropdownSection>  
        <DropdownItem
          className="text-success"
          color="success"
          description="Check all Features in Detail"
          // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
        >
          All Features
        </DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);
}
export function Solutions() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="border-0 text-md"
        >
          Solutions
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
      <DropdownSection showDivider>  
        <DropdownItem
            description="Next-Gen ATS"
            // startContent={<AddNoteIcon className={iconClasses} />}
          >
            Candidate Tracking
          </DropdownItem>
          <DropdownItem
            description="Conduct Proctored tests"
            // startContent={<CopyDocumentIcon className={iconClasses} />}
          >
            Pre-Employement Testing
          </DropdownItem>
          <DropdownItem
            description="Various types of Interview Modules"
            // startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Conduct Interviews
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>  
          <DropdownItem
            className="text-success"
            color="success"
            description="Onboard successful applicants"
            // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Onboarding
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
export function Pricing() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

return (
  <Dropdown>
    <DropdownTrigger>
      <Button 
        variant="bordered" 
        className="border-0 text-md"
      >
        Pricing
      </Button>
    </DropdownTrigger>
    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
    <DropdownSection showDivider>  
      <DropdownItem
          className="text-success"
          color="success"
          description="Check out Pricing Details"
          // startContent={<AddNoteIcon className={iconClasses} />}
        >
          Pricing
        </DropdownItem>
      </DropdownSection>
      <DropdownSection>  
        <DropdownItem
          description="Usage based Cost Calculator"
          // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
        >
          Cost Calculator
        </DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);
}
export function Contact() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

return (
  <Dropdown>
    <DropdownTrigger>
      <Button 
        variant="bordered" 
        className="border-0 text-md"
      >
        Contact
      </Button>
    </DropdownTrigger>
    <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
    <DropdownSection showDivider>  
      <DropdownItem
          description="Discuss Business opportunities"
          // startContent={<AddNoteIcon className={iconClasses} />}
        >
          Partnership
        </DropdownItem>
      </DropdownSection>
      <DropdownSection>  
        <DropdownItem
          description="Reach out to us via mail"
          // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
        >
          E-Mail
        </DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);
}