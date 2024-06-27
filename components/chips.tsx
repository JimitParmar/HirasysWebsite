'use client'
import React from "react";
import {Chip} from "@nextui-org/react";

export function Sourcing() {
  return (
      <Chip radius="sm" className="py-5 bg-red-100 text-black text-md mb-2">Sourcing & Tracking</Chip>
  );
}

export function Automating() {
    return (
        <Chip radius="sm" className="py-5 bg-lime-100 text-black text-md mb-2">Automating & Shortlisting</Chip>
    );
}


export function Interviewing() {
    return (
        <Chip radius="sm" className="py-5 bg-blue-100 text-black text-md mb-2">Interviewing & Onboarding</Chip>
    );
  }