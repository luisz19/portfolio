import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-white text-blue  font-bold text-md hover:bg-white/90 shadow-sm hover:shadow-[0_0_20px_rgba(238,244,237,0.5)] transition-shadow duration-300",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-shadow duration-300",
        outline:
          "border border-gray-border bg-transparent shadow-sm hover:bg-white-subtle hover:text-white hover:shadow-[0_0_15px_rgba(238,244,237,0.2)] transition-shadow duration-300",
        secondary:
          "bg-dark text-white shadow-sm hover:bg-white-subtle hover:shadow-[0_0_15px_rgba(238,244,237,0.15)] transition-shadow duration-300",
        ghost: "bg-blue/30 border border-blue text-white hover:bg-blue/10 text-md hover:shadow-[0_0_20px_rgba(48,157,200,0.4)] transition-shadow duration-300",
        link: "text-cyan underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
