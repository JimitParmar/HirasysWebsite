'use client'

import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function InputMain() {
  return (
    <div className="mx-24 w-[200px] mb-12 md:w-[400px] md:ml-8 md:mr-40 md:pt-24 md:pb-20 gap-4 grid items-center">
      <Input type="email" label="Email" placeholder="Enter your email" />
      <Button color="primary">
      Subscribe
    </Button>
    </div>

  );
}
