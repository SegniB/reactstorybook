import { cn } from "@/utils";
import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";

type StackProps = BoxProps;
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn("flex flex-col items-start", className)}
        {...props}
      />
    );
  }
);
