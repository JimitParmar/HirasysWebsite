import { tv } from "tailwind-variants";
export const hoverborder = tv({
  variants:{
      color:{
          violet: "from-[#FF1CF7] to-[#b249f8]"
      }
  }
});
export const title = tv({
  base: "tracking-tight inline font-semibold py-1/2",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      mainblue: "text-[#0245EF]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-xl lg:text-3xl",
      md: "text-[2.5rem] lg:text-4xl leading-5",
      lg: "text-4xl lg:text-7xl leading-normal",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-2xl block max-w-full",
  variants: {
    size:{
      sm: "text:xl lg:text-3xl",
      md: "text-[1.5rem] lg:text-5xl leading-relaxed font-bold",
      lg: "text-4xl lg:text-6xl leading-normal",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
export const description = tv({
  base: "w-full py-2 text-lg lg:text-md leading-relaxed text-default-800 block ",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

