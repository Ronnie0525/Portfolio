import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_rgba(192,132,252,0.3)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-[rgba(123,47,190,0.45)] bg-transparent text-white hover:bg-[rgba(123,47,190,0.12)] hover:border-[#C084FC]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-[rgba(123,47,190,0.1)] hover:text-[#C084FC]",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "text-white font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(192,132,252,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(192,132,252,0.5)]",
        heroOutline: "border-2 border-[rgba(123,47,190,0.5)] bg-transparent text-white font-bold uppercase tracking-wider hover:bg-[rgba(123,47,190,0.12)] hover:border-[#C084FC]",
        glass: "backdrop-blur-xl bg-white/5 border border-[rgba(123,47,190,0.3)] text-white hover:border-[rgba(123,47,190,0.6)] hover:bg-[rgba(123,47,190,0.05)]",
        neon: "relative bg-transparent border border-primary text-primary overflow-hidden shadow-[0_0_10px_rgba(192,132,252,0.3)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
