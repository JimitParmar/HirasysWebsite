'use client'

import { title } from "@/components/primitives";
import mainContent from "../docs/mainContent";
import { useState } from "react";

export default function DocsPage() {
  // const router = useRouter();
  const [expandedMainField, setExpandedMainField] = useState<number | null>(null);
  const [selectedSubField, setSelectedSubField] = useState<number | null>(null);

  const toggleMainField = (mainIndex: number) => {
    if (expandedMainField === mainIndex) {
      setExpandedMainField(null); // Collapse if clicking on the same expanded mainField
    } else {
      setExpandedMainField(mainIndex); // Expand if clicking on a different mainField
      setSelectedSubField(null); // Reset selectedSubField when expanding a new mainField
    }
  };

  const handleSubFieldClick = (subIndex: number) => {
    setSelectedSubField(subIndex);
  };


  return (
    <div className="w-screen mx-40 flex">
    {/* Sidebar with Fixed Position */}
    <div className="h-screen w-[20%] sticky top-0 left-0 py-3  bg-white space-y-10">
      <ul>
        {mainContent.map((mainField, mainIndex) => (
          <li key={mainIndex} className="pb-2">
            <h2
              onClick={() => toggleMainField(mainIndex)}
              className={`font-semibold text-lg pb-2 cursor-pointer ${
                expandedMainField === mainIndex ? 'text-blue-500' : ''
              }`}
            >
              {mainField.title}
            </h2>
            {expandedMainField === mainIndex && (
              <ul>
                {mainField.subFields.map((subField, subIndex) => (
                  <li key={subIndex} className="ml-8 py-1 list-disc">
                    <h3
                      onClick={() => handleSubFieldClick(subIndex)}
                      className={`cursor-pointer ${
                        selectedSubField === subIndex ? 'text-blue-500' : ''
                      }`}
                    >
                      {subField.title}
                    </h3>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Main Content Area */}
    <div className="w-[80%] mr-12">
      {expandedMainField !== null && selectedSubField !== null && (
        <div className={mainContent[expandedMainField].subFields[selectedSubField].className}>
          {mainContent[expandedMainField].subFields[selectedSubField].renderContent()}
        </div>
      )}
    </div>
  </div>
);

  
}
